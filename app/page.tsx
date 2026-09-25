"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Residential",
    price: "From $149",
    description:
      "Interior and exterior glass, frames, sills and screens—handled carefully throughout your home.",
    detail: "Apartments · Brownstones · Townhouses",
  },
  {
    number: "02",
    title: "Storefront",
    price: "From $89",
    description:
      "A polished street-facing presence with flexible one-time or recurring service before you open.",
    detail: "Retail · Cafés · Studios",
  },
  {
    number: "03",
    title: "Office",
    price: "Custom quote",
    description:
      "Reliable scheduled cleaning for street-level offices and small commercial properties.",
    detail: "Offices · Clinics · Common areas",
  },
];

const trustPoints = [
  {
    number: "01",
    title: "Care for every surface",
    description:
      "Protective shoe covers, clean drop cloths and the right tools for every pane and frame.",
  },
  {
    number: "02",
    title: "Clear, reliable timing",
    description:
      "Access, arrival window and the service plan are clarified before an appointment.",
  },
  {
    number: "03",
    title: "A clear finish",
    description:
      "Glass, edges and surrounding surfaces receive attention appropriate to the job.",
  },
];

const neighborhoods = [
  "Harlem",
  "Morningside Heights",
  "Hamilton Heights",
  "Washington Heights",
  "Inwood",
  "Upper West Side",
];

export default function Home() {
  const [submitted, setSubmitted] = useState<{
    propertyType: string;
    neighborhood: string;
    details: string;
  } | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    setSubmitted({
      propertyType: String(values.get("propertyType") || ""),
      neighborhood: String(values.get("neighborhood") || ""),
      details: String(values.get("details") || ""),
    });
  }

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Riverside Window Cleaning home">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span>Riverside<br />Window Cleaning</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#results">Our work</a>
          <a href="#service-area">Service area</a>
        </div>
        <a className="button button-small" href="#quote">Get a free quote <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Serving Upper Manhattan</p>
          <h1>A brighter view,<br /><em>professionally done.</em></h1>
          <p className="hero-lede">
            Meticulous window cleaning for homes, storefronts and offices—done with care, clarity and zero shortcuts.
          </p>
          <div className="hero-actions">
            <a className="button" href="#quote">Request a free quote <span>↗</span></a>
            <a className="text-link" href="#services">Explore services</a>
          </div>
          <div className="hero-proof"><span>Residential · Storefront · Office</span></div>
        </div>

        <div className="hero-visual">
          <Image
            className="hero-image"
            src="/images/riverside-hero.png"
            alt="A Riverside technician cleaning the exterior window of an Upper Manhattan brownstone with a water-fed pole"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 56vw"
          />
          <div className="hero-image-shade" />
          <div className="image-caption">
            <span>Professional equipment</span>
            <strong>Cleaner glass. More natural light.</strong>
          </div>
        </div>
      </section>

      <div className="hero-strip" aria-label="Highlights">
        <span>Interior &amp; exterior glass</span>
        <span>Careful surface prep</span>
        <span>Service by appointment</span>
      </div>

      <section className="section services" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> What we clean</p>
            <h2>Beautifully clear,<br /><em>wherever you are.</em></h2>
          </div>
          <p>
            From a single storefront to a full brownstone, every service includes professional tools, careful prep and a streak-free finish.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true">
                <span /><span /><span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-meta">
                <span>{service.detail}</span>
                <strong>{service.price}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="pricing-note">
          <p>Illustrative starting prices for this portfolio concept. A real project would confirm scope and rates before launch.</p>
          <a href="#quote">Get your quote <span>↗</span></a>
        </div>
      </section>

      <section className="results" id="results">
        <div className="results-image-wrap">
          <Image
            className="results-image"
            src="/images/window-before-after.png"
            alt="Illustrative comparison of a window before and after cleaning"
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <span className="before-label">Before</span>
          <span className="after-label">After</span>
          <div className="result-stamp"><span>See</span><strong>the difference</strong></div>
        </div>
        <div className="results-copy">
          <p className="eyebrow eyebrow-light"><span /> The Riverside standard</p>
          <h2>Not just clean.<br /><em>Remarkably clear.</em></h2>
          <p>
            We remove the residue that dulls your glass—dust, fingerprints, hard-water spots and city buildup—then detail the edges for a finish that holds up in direct light.
          </p>
          <p className="example-note">Illustrative before-and-after image for this portfolio concept.</p>
        </div>
      </section>

      <section className="section trust-section">
        <div className="trust-intro">
          <p className="eyebrow"><span /> Why Riverside</p>
          <h2>Good work is in<br /><em>the details.</em></h2>
        </div>
        <div className="trust-grid">
          {trustPoints.map((point) => (
            <article className="trust-card" key={point.title}>
              <span>{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-area" id="service-area">
        <div className="area-copy">
          <p className="eyebrow eyebrow-light"><span /> Service area</p>
          <h2>Your neighborhood.<br /><em>Our route.</em></h2>
          <p>
            Riverside serves homes and businesses throughout Upper Manhattan and nearby neighborhoods. Not sure if you&apos;re in range? Just ask.
          </p>
          <a className="button button-lime" href="#quote">Check your address <span>↗</span></a>
        </div>
        <div className="neighborhood-list" aria-label="Neighborhoods served">
          {neighborhoods.map((neighborhood, index) => (
            <div key={neighborhood}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{neighborhood}</strong>
              <span>↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro">
          <p className="eyebrow"><span /> Request a quote</p>
          <h2>Let the light<br /><em>back in.</em></h2>
          <p>
            Describe the property and see what a quote request would contain. This portfolio form does not send a message or book an appointment.
          </p>
          <div className="contact-details"><span>Portfolio demonstration · No live bookings</span></div>
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="success-message" role="status" aria-live="polite">
              <span aria-hidden="true">✓</span>
              <p className="eyebrow">Request preview</p>
              <h3>Here&apos;s what you selected.</h3>
              <p><strong>Property:</strong> {submitted.propertyType}</p>
              <p><strong>Neighborhood:</strong> {submitted.neighborhood}</p>
              <p><strong>Job details:</strong> {submitted.details}</p>
              <p>Demo only. Nothing was sent or saved.</p>
              <button type="button" onClick={() => setSubmitted(null)}>Reset demo</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Property type
                  <select name="propertyType" defaultValue="" required>
                    <option value="" disabled>Select one</option>
                    <option>Home / apartment</option>
                    <option>Storefront</option>
                    <option>Office</option>
                    <option>Other property</option>
                  </select>
                </label>
                <label>
                  Neighborhood
                  <input type="text" name="neighborhood" placeholder="e.g. Harlem" required />
                </label>
              </div>
              <label>
                Tell us about the job
                <textarea name="details" rows={4} placeholder="Approximate number of windows, interior/exterior, access notes…" required />
              </label>
              <button className="button form-submit" type="submit">Preview request <span>↗</span></button>
              <p className="form-note">This interactive demo keeps your entries in the browser. Nothing is sent or saved.</p>
            </form>
          )}
        </div>
      </section>

      <section className="agency-demo-cta">
        <div>
          <p className="eyebrow eyebrow-light"><span /> A website concept by AdamRemix</p>
          <h2>Put your business in motion.</h2>
          <p>Want a site like this for your agency or client? Tell us what the business needs to do better.</p>
        </div>
        <a className="button button-lime" href="https://adamremix.com/contact">Discuss a Project <span>↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">R</span>
          <span>Riverside<br />Window Cleaning</span>
        </a>
        <p>Clear glass. Better light. Upper Manhattan.</p>
        <div>
          <a href="#services">Services</a>
          <a href="#results">Our work</a>
          <a href="#quote">Contact</a>
        </div>
        <span>© 2026 Riverside Window Cleaning</span>
      </footer>

      <a className="mobile-quote" href="#quote">Get a free quote <span>↗</span></a>
    </main>
  );
}
