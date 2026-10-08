"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  ["Services", "#services"],
  ["Our work", "#results"],
  ["Service area", "#service-area"],
] as const;

export function SiteNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("navigation-open", open);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => { if (window.innerWidth > 620) setOpen(false); };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("navigation-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="Riverside Window Cleaning home" onClick={close}>
        <span className="brand-mark" aria-hidden="true">R</span>
        <span>Riverside<br />Window Cleaning</span>
      </Link>

      <div className="nav-links">
        {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </div>

      <a className="button button-small" href="#quote" onClick={close}>Get a free quote <span>↗</span></a>

      <button
        className={`nav-menu-button ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="riverside-mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className={`mobile-navigation ${open ? "is-open" : ""}`} id="riverside-mobile-navigation">
        <div className="mobile-navigation-links">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a className="mobile-navigation-cta" href="#quote" onClick={close}>Get a free quote <span>↗</span></a>
        </div>
      </div>
    </nav>
  );
}
