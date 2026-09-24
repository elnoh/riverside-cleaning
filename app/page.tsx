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
      "Two-hour arrival windows, text updates and service planned around your day.",
  },
  {
    number: "03",
    title: "The view is guaranteed",
    description:
      "If a streak or spot was missed, we return and make it right. No runaround.",
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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
            <a className="text-link" href="tel:+12125550148">(212) 555-0148</a>
          </div>
          <div className="hero-proof">
            <strong>4.9</strong>
            <span className="stars" aria-label="4.9 out of 5 stars">★★★★★</span>
            <span>Trusted by 500+ local clients</span>
          </div>
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
          <div className="experience-badge">
            <strong>10+</strong>
            <span>Years of<br />clear views</span>
          </div>
        </div>
      </section>

      <div className="hero-strip" aria-label="Highlights">
        <span>Fully insured</span>
        <span>Pure-water system</span>
        <span>Satisfaction guaranteed</span>
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
          <p>Every property is different. Send a few details and we&apos;ll confirm a clear, written quote before scheduling.</p>
          <a href="#quote">Get your quote <span>↗</span></a>
        </div>
      </section>

      <section className="results" id="results">
        <div className="results-image-wrap">
          <Image
            className="results-image"
            src="/images/window-before-after.png"
            alt="The same brownstone window before cleaning on the left and after cleaning on the right"
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
          <blockquote>
            “The rooms genuinely feel brighter. They were punctual, careful and left every sill spotless.”
            <cite>— Maya R., Hamilton Heights</cite>
          </blockquote>
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
            Tell us about your windows. We&apos;ll follow up within one business day with a clear estimate and available times.
          </p>
          <div className="contact-details">
            <a href="tel:+12125550148">(212) 555-0148</a>
            <a href="mailto:hello@riversidewindows.co">hello@riversidewindows.co</a>
            <span>Mon–Sat · 8:00 AM–6:00 PM</span>
          </div>
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="success-message" role="status" aria-live="polite">
              <span aria-hidden="true">✓</span>
              <p className="eyebrow">Request received</p>
              <h3>Thanks—we&apos;ll be in touch.</h3>
              <p>Expect a call or email within one business day to confirm the details of your quote.</p>
              <button type="button" onClick={() => setSubmitted(false)}>Send another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your full name" autoComplete="name" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="(212) 555-0123" autoComplete="tel" required />
                </label>
              </div>
              <label>
                Email
                <input type="email" name="email" placeholder="you@email.com" autoComplete="email" required />
              </label>
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
              <button className="button form-submit" type="submit">Request my quote <span>↗</span></button>
              <p className="form-note">No obligation. Your details stay private.</p>
            </form>
          )}
        </div>
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
