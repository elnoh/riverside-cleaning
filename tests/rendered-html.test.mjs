import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete Riverside landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Riverside Window Cleaning \| Upper Manhattan/);
  assert.match(html, /A brighter view/);
  assert.match(html, /Residential/);
  assert.match(html, /Storefront/);
  assert.match(html, /Office/);
  assert.match(html, /Request my quote/);
  assert.match(html, /riverside-hero\.png/);
  assert.match(html, /window-before-after\.png/);
});

test("keeps required sections, metadata and assets in place", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    access(new URL("../public/images/riverside-hero.png", import.meta.url)),
    access(new URL("../public/images/window-before-after.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  for (const section of ["services", "results", "service-area", "quote"]) {
    assert.match(page, new RegExp(`id=\\"${section}\\"`));
  }
  assert.match(page, /handleSubmit/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /twitter/);
  assert.doesNotMatch(page, /\b(?:cheap|starter|budget)\b/i);
  assert.doesNotMatch(layout, /codex-preview|SkeletonPreview/);
});
