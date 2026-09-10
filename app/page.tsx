import Image from "next/image";
import {
  Globe,
  Rocket,
  ChevronRight,
  Phone,
  Mail,
  ExternalLink,
  Check,
  MapPin,
} from "lucide-react";
import depImg from "./dep.jpg";
import cusatLogo from "./cusat-logo.png";
import { navLinks, stats, features, startups, globalPartners, industryPartners, hackathons, achievements, contacts } from "@/data/data";
import cusatAdmImg from "./cusat-adm.jpg";

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#" className="nav-brand">
            <Image
              src={cusatLogo}
              alt="CUSAT emblem"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <p className="nav-brand-name">Dept. of Computer Science</p>
              <p className="nav-brand-sub">CUSAT · Placement 2025–26</p>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            Contact Us
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="hero">
        <Image
          src={depImg}
          alt="Department of Computer Science building, CUSAT"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, oklch(0.15 0.09 258 / 0.95) 0%, oklch(0.18 0.07 258 / 0.85) 50%, oklch(0.12 0.05 258 / 0.65) 100%)",
          }}
        />
        <div className="hero-content">
          <h1 className="hero-title">
            MSc Computer Science
            <br />
            AI &amp; Data Science
          </h1>
          <p className="hero-sub">Department of Computer Science, CUSAT</p>
          <p className="hero-meta">
            Five-Year Integrated Programme · Cochin University of Science and
            Technology, Kochi
          </p>
          <div className="hero-actions">
            <a href="#why-hire" className="btn-hero-primary">
              Why Hire Us <ChevronRight size={16} />
            </a>
            <a href="#contact" className="btn-hero-ghost">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Band ──────────────────────────────────────────────── */}
      <div className="stats-band">
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Hire ────────────────────────────────────────────────── */}
      <section id="why-hire" className="section">
        <div className="wrap">
          <p className="eyebrow">Why Hire From Us</p>
          <h2 className="h-section mt-2">Graduates Built for Industry</h2>
          <p className="lead mt-4 max-w-2xl">
            Our graduates bring a rare blend of deep AI expertise, research
            acumen, and real-world project experience — ready to contribute from
            day one.
          </p>
          <div className="feature-grid mt-12">
            {features.map((f) => (
              <div key={f.name} className="feature-card">
                <div className="feature-icon">
                  <f.Icon size={20} />
                </div>
                <p className="feature-name">{f.name}</p>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Startups ────────────────────────────────────────── */}
      <section id="startups" className="section-muted">
        <div className="wrap">
          <p className="eyebrow">Student Ventures</p>
          <h2 className="h-section mt-2">Startups Founded by Our Students</h2>
          <p className="lead mt-4 max-w-2xl">
            Our students don&apos;t just learn — they build. These ventures were
            founded by graduates from our program.
          </p>
          <div className="startup-grid mt-10">
            {startups.map((s) => (
              <div key={s.name} className="startup-card">
                <Rocket className="text-primary mb-3" size={26} />
                <h3 className="startup-name">{s.name}</h3>
                <p className="startup-tag">{s.tag}</p>
                <p className="startup-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Partnerships ─────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Global Reach</p>
          <h2 className="h-section mt-2">International Collaborations</h2>
          <p className="lead mt-4 max-w-2xl">
            Students benefit from active exchange programs and research
            collaborations with leading universities worldwide.
          </p>
          <div className="global-grid mt-10">
            {globalPartners.map((p) => (
              <div key={p.name} className="global-card">
                <div className="global-icon">
                  <Globe size={22} />
                </div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {p.country}
                </p>
                <p className="text-xs font-medium text-primary mt-3">
                  {p.years}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Partners ───────────────────────────────────────── */}
      <section id="partners" className="section-muted">
        <div className="wrap">
          <p className="eyebrow">Academic–Industrial Partnerships</p>
          <h2 className="h-section mt-2">Our Partner Ecosystem</h2>
          <p className="lead mt-4 max-w-2xl">
            Collaborations spanning premier IITs, IISERs, NITs, and technology
            companies across India.
          </p>
          <div className="partner-grid mt-10">
            {industryPartners.map((p) => (
              <div key={p} className="partner-chip">
                <span className="partner-dot" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hackathons ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Competition Record</p>
          <h2 className="h-section mt-2">Hackathon Achievements</h2>
          <p className="lead mt-4 max-w-2xl">
            A consistent track record of excellence in national and
            international hackathons and coding challenges.
          </p>
          <div className="hack-grid mt-10">
            {hackathons.map((h) => (
              <div key={h.name} className="hack-item">
                <span className="hack-badge">{h.badge}</span>
                <span className="hack-name">{h.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ────────────────────────────────────────────── */}
      <section id="achievements" className="section-muted">
        <div className="wrap">
          <p className="eyebrow text-center">Notable Achievements</p>
          <h2 className="h-section mt-2 text-center">Beyond the Classroom</h2>
          <p className="lead mt-4 text-center max-w-2xl mx-auto">
            Scholarships, global conference publications, and recognition at
            prestigious international challenges.
          </p>
          <div className="achieve-list mt-10">
            {achievements.map((a) => (
              <div key={a} className="achieve-item">
                <div className="achieve-icon">
                  <Check size={11} strokeWidth={3} />
                </div>
                <span className="text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ──────────────────────────────────────────────────── */}
      <section className="vision-section">
        <div className="vision-body">
          <p
            className="eyebrow"
            style={{ color: "oklch(0.97 0.005 259 / 0.55)" }}
          >
            Our Vision
          </p>
          <h2 className="h-section mt-3">
            To globally excel in innovative research, teaching, and technology
            development inspired by social obligation.
          </h2>
          <blockquote className="vision-quote">
            &ldquo;The best way to predict the future is to invent it.&rdquo;
          </blockquote>
          <p className="vision-attr">— Alan Kay</p>
          <p className="vision-sub">
            Department of Computer Science · Cochin University of Science and
            Technology
          </p>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="wrap">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="h-section mt-2">Contact Our Team</h2>
          <p className="lead mt-4 max-w-2xl">
            For placement opportunities, research collaborations, or general
            enquiries — our team is here to help.
          </p>

          <div className="mt-10 contact-grid">
            {contacts.map((c) => (
              <div key={c.id} className="contact-card">
                <div className="flex items-center gap-3 mb-1">
                  {/* TODO: delete this */}
                  {/*<div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <c.Icon size={16} />
                  </div>*/}
                  <p className="contact-role">{c.role}</p>
                </div>
                <p className="contact-name">{c.name}</p>
                <a
                  href={"tel:" + c.phone.replace(/\s/g, "")}
                  className="contact-row"
                >
                  <Phone size={14} />
                  {c.phone}
                </a>
                {/*<a href={"mailto:" + c.email} className="contact-row">
                  <Mail size={14} />
                  {c.email}
                </a>*/}
              </div>
            ))}
          </div>

          {/* Department info block with split image */}
          <div className="mt-10 rounded-2xl overflow-hidden border shadow-sm">
            <div className="grid md:grid-cols-2">
              {/* Left: photo */}
              <div className="relative h-64 md:h-auto min-h-55">
                <Image
                  src={cusatAdmImg}
                  alt="CUSAT Main Campus"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "oklch(0.12 0.09 258 / 0.52)",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-xl font-heading leading-tight">
                      Cochin University of Science
                      <br />
                      and Technology
                    </p>
                    <p className="text-white/65 text-sm mt-1.5 flex items-center gap-1.5">
                      <MapPin size={12} />
                      South Kalamassery, Kochi — 682 022
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: contact details */}
              <div className="p-8 bg-card flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={cusatLogo}
                    alt="CUSAT"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold leading-tight">
                      Department of Computer Science
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CUSAT · DST-FIST Assisted
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <a href="tel:04842862301" className="contact-row">
                    <Phone size={14} />
                    0484 2862301
                  </a>
                  <a href="mailto:csdir@cusat.ac.in" className="contact-row">
                    <Mail size={14} />
                    csdir@cusat.ac.in
                  </a>
                  <a
                    href="https://cs.cusat.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row"
                  >
                    <ExternalLink size={14} />
                    cs.cusat.ac.in
                  </a>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>South Kalamassery, Kochi — 682 022, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="flex items-center gap-3">
            <Image
              src={cusatLogo}
              alt="CUSAT"
              width={28}
              height={28}
              className="rounded-full opacity-75"
            />
            <p className="footer-copy">
              © 2025 Department of Computer Science, CUSAT. Placement Brochure
              2025–26.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:csdir@cusat.ac.in" className="footer-link">
              <Mail size={14} />
              csdir@cusat.ac.in
            </a>
            <a
              href="https://cs.cusat.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <ExternalLink size={14} />
              cs.cusat.ac.in
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
