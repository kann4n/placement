import Image from "next/image";
import {
  Mail,
  Phone,
  ExternalLink,
  Globe,

  Rocket,
  BookOpen,
  Brain,
  GraduationCap,
  FlaskConical,
  ChevronRight,
  Check,
  Sparkles,
  Award,
  Code2,
  Database,
  Cpu,
  Shield,
  Network,
  ArrowRight,
  Star,
  Calendar,
  MapPin,
  Menu,

} from "lucide-react";

import depImg from "../dep.jpg";
import cusatLogo from "../cusat-logo.png";
import cusatImg from "../cusat.png";
import cusatAdmImg from "../cusat-adm.jpg";
import achievementsImg from "../achievements-1.jpg";
import gp1Img from "../GP-1.png";
import gp2Img from "../GP-2.jpg";
import gp3Img from "../GP-3.jpg";
import bitsImg from "../BITS-Pilani.png";
import nitImg from "../NIT-Calicut.png";
import queensImg from "../queens.jpg";

// ── Data ─────────────────────────────────────────────────────────────────────

const navItems = [
  { href: "#about",        label: "About" },
  { href: "#programs",     label: "Programs" },
  { href: "#news",         label: "News & Events" },
  { href: "#research",     label: "Research" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#gallery",      label: "Gallery" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact",      label: "Contact" },
] as const;

const quickStats = [
  { value: "1984",  label: "Established" },
  { value: "20",    label: "Students per Batch" },
  { value: "90%",   label: "Practical Curriculum" },
  { value: "5+",    label: "Hackathon Wins" },
  { value: "3",     label: "Global University Partners" },
  { value: "50%",   label: "Research Focused" },
] as const;

const programs = [
  {
    code: "MSc (5-Year Integrated)",
    title: "Computer Science — AI & Data Science",
    duration: "5 Years",
    seats: "20 Seats",
    desc: "The flagship programme — an intensive five-year integrated degree combining computer science fundamentals with cutting-edge AI and Data Science research. One of the most specialised programmes of its kind in India.",
    Icon: Brain,
    highlights: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Analytics",
      "Industry-Integrated Internships",
      "Research Projects from Year 3",
    ],
    accent: "#00c2dc",
  },
  {
    code: "Ph.D.",
    title: "Computer Science",
    duration: "3–5 Years",
    seats: "Research Scholars",
    desc: "Full-time and part-time doctoral research across AI, Computer Vision, NLP, and Distributed Systems, guided by faculty with an active international publication record.",
    Icon: FlaskConical,
    highlights: [
      "Computer Vision & Image Processing",
      "Natural Language Processing",
      "International Publications",
      "Conference Presentations",
    ],
    accent: "#f59e0b",
  },
  {
    code: "M.Tech",
    title: "Computer Science",
    duration: "2 Years",
    seats: "Postgraduate",
    desc: "A rigorous postgraduate programme emphasising theoretical depth and research methodology, preparing students for advanced roles in academia and industry.",
    Icon: GraduationCap,
    highlights: [
      "Advanced Algorithms & Complexity",
      "Systems Design & Architecture",
      "Research Methodology",
      "Industry Collaboration Projects",
    ],
    accent: "#8b5cf6",
  },
] as const;

const newsEvents = [
  {
    type: "International Competition",
    date: "June 2025",
    title: "16th Anti-UAV Challenge — CVPR 2025",
    desc: "Our students competed on the global stage at CVPR 2025, one of the world's premier computer vision conferences, showcasing cutting-edge drone detection research.",
    img: gp1Img,
    tag: "Achievement",
    tagColor: "#10b981",
  },
  {
    type: "Exchange Program",
    date: "2025",
    title: "Annual Student Exchange — NTNU, Norway",
    desc: "Selected students participated in the research exchange program with NTNU Gjøvik, Norway, gaining international academic exposure and collaborative research experience.",
    img: gp2Img,
    tag: "Global",
    tagColor: "#3b82f6",
  },
  {
    type: "Scholarship Award",
    date: "2025",
    title: "Charpak Scholarship — French Embassy",
    desc: "A student from our department was awarded the prestigious Charpak Scholarship by the French Embassy, enabling advanced studies at a leading French institution.",
    img: gp3Img,
    tag: "Scholarship",
    tagColor: "#f59e0b",
  },
  {
    type: "Hackathon",
    date: "2024",
    title: "IEDC Hackify'24 — Champions",
    desc: "Our team emerged as winners at IEDC Hackify'24, demonstrating exceptional problem-solving, innovation, and technical execution under competition pressure.",
    img: null,
    tag: "Competition",
    tagColor: "#ef4444",
  },
  {
    type: "Global Exchange",
    date: "2023",
    title: "Research Visit — Queen's University, Belfast",
    desc: "Students and faculty visited Queen's University of Belfast as part of our international academic exchange programme, fostering collaborative research ties.",
    img: queensImg,
    tag: "International",
    tagColor: "#6366f1",
  },
  {
    type: "Conference Publication",
    date: "2023",
    title: "BMVC UK — Research Publication",
    desc: "Our students published groundbreaking research at BMVC 2023 (British Machine Vision Conference), cementing our reputation in the global computer vision community.",
    img: null,
    tag: "Research",
    tagColor: "#8b5cf6",
  },
] as const;

const researchAreas = [
  {
    Icon: Brain,
    name: "Artificial Intelligence",
    desc: "Deep learning, neural architectures, and autonomous intelligent systems.",
  },
  {
    Icon: Database,
    name: "Data Science",
    desc: "Big data analytics, statistical modelling, and data-driven decision systems.",
  },
  {
    Icon: Cpu,
    name: "Computer Vision",
    desc: "Image recognition, object detection, and visual understanding systems.",
  },
  {
    Icon: BookOpen,
    name: "Natural Language Processing",
    desc: "Language models, sentiment analysis, and conversational AI.",
  },
  {
    Icon: Shield,
    name: "Cybersecurity",
    desc: "Network security, cryptographic protocols, and threat intelligence.",
  },
  {
    Icon: Network,
    name: "Distributed Systems",
    desc: "Cloud computing, parallel algorithms, and scalable system design.",
  },
  {
    Icon: Code2,
    name: "Software Engineering",
    desc: "Software architecture, DevOps methodologies, and quality assurance.",
  },
  {
    Icon: Globe,
    name: "Human-Computer Interaction",
    desc: "UX research, accessible design, and intelligent user interfaces.",
  },
] as const;

const globalPartners = [
  {
    name: "NTNU, Gjøvik",
    country: "🇳🇴  Norway",
    years: "2022 · 2023 · 2025",
    desc: "Norwegian University of Science and Technology — research exchange, joint supervision, and collaborative AI projects across multiple cohorts.",
    img: gp1Img,
  },
  {
    name: "Queen's University of Belfast",
    country: "🇬🇧  United Kingdom",
    years: "2023",
    desc: "Faculty and student exchange with one of the UK's leading research-intensive universities, fostering cross-cultural academic collaboration.",
    img: queensImg,
  },
  {
    name: "ENSSAT, University of Rennes",
    country: "🇫🇷  France",
    years: "Recent",
    desc: "French engineering school collaboration enabling student participation in European research networks and Charpak Scholarship opportunities.",
    img: gp3Img,
  },
] as const;

const industryPartnerLogos = [
  { name: "BITS Pilani, Goa", img: bitsImg },
  { name: "NIT Calicut",      img: nitImg  },
] as const;

const industryPartnerNames = [
  "IIT Tirupati",
  "Infenox Technologies, Kochi",
  "IISER Thiruvananthapuram",
  "Nav Technologies, Kochi",
  "NIT Surathkal",
  "IIIT Hyderabad (LTRC)",
  "KPIT Technologies, Kochi",
  "Pealsoft Technologies, Kochi",
  "Pixdynamics, Kochi",
  "GadgEon Engineering Smartness, Kochi",
] as const;

const achievements = [
  { text: "Charpak Scholarship — French Embassy 2025",           tag: "Scholarship" },
  { text: "Dreamvestor Startup Competition — Winners",            tag: "Startup" },
  { text: "16th Anti-UAV Challenge, CVPR 2025",                  tag: "Research" },
  { text: "Top 30 — IEEE IES Generative AI Challenge 2024",      tag: "AI" },
  { text: "South Zone Winner — Anveshan'25",                     tag: "Research" },
  { text: "Theme Prize — HackAthena'24",                         tag: "Hackathon" },
  { text: "3rd Place — IEEE .hack()'24",                         tag: "Hackathon" },
  { text: "Winners — IEDC Hackify'24",                           tag: "Hackathon" },
  { text: "Publication at IFIP AIAI 2022",                       tag: "Publication" },
  { text: "Publication at BMVC UK 2023",                         tag: "Publication" },
  { text: "IEEE Connect 2024 & 2025",                            tag: "IEEE" },
  { text: "IEEE AIIoT Seattle 2025",                             tag: "IEEE" },
  { text: "GATE 2025 — Data Science & AI Qualified",             tag: "Academic" },
  { text: "Top 10 — Hack2Future'25",                             tag: "Hackathon" },
] as const;

const contacts = [
  {
    role: "Placement Officer",
    name: "Dr. Ajees A P",
    phone: "+91 9061859697",
    email: "ajeesap@cusat.ac.in",
    Icon: Award,
  },
  {
    role: "Head of Department",
    name: "Dr. Madhu S. Nair",
    phone: "0484 2862302",
    email: "msn@cusat.ac.in",
    Icon: Star,
  },
  {
    role: "Student Coordinator",
    name: "Noble Austine",
    phone: "+91 9645922173",
    email: "nobleaustine@ug.cusat.ac.in",
    Icon: GraduationCap,
  },
  {
    role: "Student Coordinator",
    name: "Omal S",
    phone: "+91 9633276748",
    email: "omammu311@gmail.com",
    Icon: GraduationCap,
  },
] as const;

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DepartmentPage() {
  return (
    <>
      {/* ── Top Info Bar ──────────────────────────────────────────────── */}
      <div className="bg-gray-950 text-white/75 text-xs">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:csdir@cusat.ac.in"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} />
              csdir@cusat.ac.in
            </a>
            <a
              href="tel:04842862301"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} />
              +91-484-2862301
            </a>
          </div>
          <a
            href="https://erp.cusat.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#00b4d8" }}
            className="rounded px-4 py-1.5 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Student Portal
          </a>
        </div>
      </div>

      {/* ── Sticky Site Header ────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 shadow-md">
        {/* White logo bar */}
        <div className="bg-white border-b">
          <div className="wrap flex items-center justify-between h-20">
            {/* DCS Branding */}
            <a href="#" className="flex items-center gap-4">
              <div className="shrink-0 rounded-lg bg-primary/8 p-1">
                <Image
                  src={cusatLogo}
                  alt="Department of Computer Science"
                  width={50}
                  height={50}
                  className="rounded"
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-[11px] font-bold font-mono text-primary tracking-wider">
                  &lt;DCS/&gt;
                </p>
                <p className="text-sm font-bold text-primary tracking-widest uppercase">
                  Department of
                </p>
                <p className="text-xl font-black text-primary tracking-widest uppercase leading-tight">
                  Computer Science
                </p>
                <p className="text-[9px] text-muted-foreground tracking-[0.25em] uppercase">
                  DST-FIST Assisted
                </p>
              </div>
            </a>

            {/* Desktop inline nav */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CUSAT Logos (right) */}
            <div className="flex items-center gap-4">
              <Image
                src={cusatLogo}
                alt="CUSAT Emblem"
                width={58}
                height={58}
                className="rounded-full"
              />
              <div className="hidden sm:flex flex-col items-center border-l pl-4">
                <span className="text-4xl font-black text-primary leading-none">50</span>
                <span className="text-[9px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
                  Years
                </span>
                <span className="text-[8px] text-muted-foreground tracking-wider text-center leading-tight">
                  Celebrating<br />Knowledge
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navy nav sub-bar */}
        <nav
          className="bg-primary overflow-x-auto"
          aria-label="Section navigation"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="wrap flex items-center h-11 gap-6">
            <span className="flex items-center gap-2 text-white/90 font-semibold text-sm shrink-0">
              <Menu size={15} />
              MENU
            </span>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white text-sm whitespace-nowrap transition-colors shrink-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <Image
          src={depImg}
          alt="Department of Computer Science building, CUSAT"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(108deg, oklch(0.12 0.12 258 / 0.97) 0%, oklch(0.14 0.10 258 / 0.85) 50%, oklch(0.12 0.08 258 / 0.45) 100%)",
          }}
        />

        <div className="relative z-10 wrap py-28 w-full">
          <span className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            <Sparkles size={12} />
            Department of Computer Science · CUSAT
          </span>

          <h1 className="font-heading font-bold leading-none">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: "#00c2dc" }}
            >
              DISCOVER
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: "#00c2dc" }}
            >
              YOUR FUTURE
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-black">
              WITH US
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
            Five-Year Integrated MSc in Artificial Intelligence &amp; Data
            Science at Cochin University of Science and Technology — where
            research meets real-world impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#programs"
              style={{ background: "#00b4d8" }}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Explore Programs <ChevronRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-start gap-1 text-white/30">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to explore</span>
            <div className="h-8 w-px bg-white/25" />
          </div>
        </div>
      </section>

      {/* ── Stats Band ────────────────────────────────────────────────── */}
      <div className="stats-band">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-6">
          {quickStats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── About the Department ──────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="h-section mt-2">
                A Legacy of Excellence in Computer Science
              </h2>
              <p className="lead mt-4">
                Established in 1984, the Department of Computer Science at CUSAT
                has pioneered computing education in Kerala. As a DST-FIST
                assisted department, we blend rigorous academics with frontier
                research.
              </p>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Our flagship Five-Year Integrated MSc in AI &amp; Data Science
                is one of the most specialised programmes in India — combining
                strong fundamentals with hands-on research and global exposure
                from day one.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "DST-FIST Assisted by the Government of India",
                  "Part of Cochin University of Science and Technology (CUSAT)",
                  "Only 20 students per batch — deep, personalised mentorship",
                  "Exchange programs with European universities",
                  "Active industry tie-ups across Kerala and beyond",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: "#00b4d8" }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://cs.cusat.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Visit cs.cusat.ac.in <ExternalLink size={13} />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Our Programs <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Image stack */}
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={cusatAdmImg}
                  alt="CUSAT Administrative Building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, oklch(0.12 0.09 258 / 0.65) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-white font-semibold text-sm">
                    Cochin University of Science and Technology
                  </p>
                  <p className="text-white/65 text-xs mt-0.5">
                    Kochi, Kerala — 682 022
                  </p>
                </div>
              </div>

              {/* Float card: top-right */}
              <div className="absolute -top-5 -right-5 hidden lg:block bg-white rounded-xl shadow-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div
                    className="size-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,180,216,0.12)" }}
                  >
                    <Star size={18} style={{ color: "#00b4d8" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">DST-FIST Assisted</p>
                    <p className="text-[10px] text-muted-foreground">Govt. of India</p>
                  </div>
                </div>
              </div>

              {/* Float card: bottom-left */}
              <div className="absolute -bottom-5 -left-5 hidden lg:block bg-primary rounded-xl shadow-xl p-4 text-primary-foreground min-w-[110px]">
                <div className="text-3xl font-black leading-none">40+</div>
                <div className="text-xs text-primary-foreground/65 mt-1">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs Offered ──────────────────────────────────────────── */}
      <section id="programs" className="section-muted">
        <div className="wrap">
          <p className="eyebrow text-center">Programmes of Study</p>
          <h2 className="h-section mt-2 text-center">What We Offer</h2>
          <p className="lead mt-4 text-center max-w-2xl mx-auto">
            From foundational to frontier — our programmes prepare students for
            tomorrow&apos;s most demanding technology roles.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programs.map((prog) => (
              <div
                key={prog.code}
                className="bg-card rounded-2xl border shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Accent top bar */}
                <div className="h-1.5" style={{ background: prog.accent }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="size-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${prog.accent}18` }}
                    >
                      <prog.Icon size={24} style={{ color: prog.accent }} />
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        color: prog.accent,
                        background: `${prog.accent}15`,
                      }}
                    >
                      {prog.code}
                    </span>
                  </div>

                  <h3 className="font-bold font-heading text-lg leading-tight">
                    {prog.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-3 mb-4">
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {prog.duration}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {prog.seats}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {prog.desc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t pt-4">
                    {prog.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs">
                        <ChevronRight
                          size={11}
                          className="shrink-0"
                          style={{ color: prog.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Events ─────────────────────────────────────────────── */}
      <section id="news" className="py-16 md:py-24" style={{ background: "#eef0f8" }}>
        <div className="wrap">
          <p className="eyebrow text-center">Latest from DCS</p>
          <h2 className="h-section mt-2 text-center">News &amp; Events</h2>
          <p className="lead mt-4 text-center max-w-2xl mx-auto">
            From hackathon wins and international exchanges to research
            publications and scholarships — our department never stops achieving.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {newsEvents.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-white hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image or gradient placeholder */}
                {item.img ? (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
                      }}
                    />
                    <span
                      className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white"
                      style={{ background: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                  </div>
                ) : (
                  <div
                    className="h-48 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.22 0.1 258) 0%, oklch(0.30 0.08 260) 100%)`,
                    }}
                  >
                    <span
                      className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white"
                      style={{ background: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-white/10 font-black font-heading text-8xl select-none">
                      {item.tag.charAt(0)}
                    </span>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Calendar size={11} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {item.date}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: item.tagColor }}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="font-bold font-heading text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.desc}
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline self-start"
                  >
                    Read more <ChevronRight size={11} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Areas ────────────────────────────────────────────── */}
      <section id="research" className="section">
        <div className="wrap">
          <p className="eyebrow">Research Focus</p>
          <h2 className="h-section mt-2">Areas of Research</h2>
          <p className="lead mt-4 max-w-2xl">
            Our faculty and students pursue research across a wide spectrum of
            computer science, with particular depth in AI, vision, and language
            technologies.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <div
                key={area.name}
                className="group rounded-xl border bg-card p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all cursor-default"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <area.Icon size={22} />
                </div>
                <h3 className="font-bold text-sm">{area.name}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Research showcase image */}
          <div className="mt-14 relative overflow-hidden rounded-2xl h-64 md:h-80">
            <Image
              src={achievementsImg}
              alt="Research and achievements at CUSAT DCS"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, oklch(0.12 0.12 258 / 0.90) 0%, oklch(0.14 0.09 258 / 0.65) 55%, transparent 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="wrap">
                <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">
                  Research Culture
                </p>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white max-w-sm">
                  Building tomorrow&apos;s innovations, today.
                </h3>
                <p className="text-white/65 text-sm mt-3 max-w-xs leading-relaxed">
                  From undergraduate dissertations to internationally-published
                  research — our students are researchers from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Partnerships ───────────────────────────────────────── */}
      <section id="partnerships" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="wrap">
          <p className="eyebrow" style={{ color: "#00c2dc" }}>
            Global Reach
          </p>
          <h2 className="h-section mt-2 text-primary-foreground">
            International Partnerships
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/65 leading-relaxed">
            We maintain active exchange and research collaborations with leading
            universities across Europe — giving our students a truly global
            perspective.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {globalPartners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                {/* Partner image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, oklch(0.10 0.09 258 / 0.85) 0%, transparent 55%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold text-sm">
                      {partner.country}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe size={13} style={{ color: "#00c2dc" }} />
                    <p className="text-xs font-semibold" style={{ color: "#00c2dc" }}>
                      {partner.years}
                    </p>
                  </div>
                  <h3 className="font-bold font-heading text-lg leading-snug">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* GP-2 full-width banner */}
          <div className="mt-10 relative overflow-hidden rounded-2xl h-56 md:h-64">
            <Image
              src={gp2Img}
              alt="Global exchange program students"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "oklch(0.10 0.12 258 / 0.78)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div>
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "#00c2dc" }}
                >
                  Exchange Students — NTNU, Norway
                </p>
                <p className="text-white font-heading font-bold text-2xl md:text-3xl max-w-lg mx-auto leading-snug">
                  A Global Classroom, Built One Exchange at a Time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campus Gallery ────────────────────────────────────────────── */}
      <section id="gallery" className="section-muted">
        <div className="wrap">
          <p className="eyebrow text-center">Campus Life</p>
          <h2 className="h-section mt-2 text-center">A Glimpse of Our World</h2>
          <p className="lead mt-4 text-center max-w-2xl mx-auto">
            From state-of-the-art laboratories to lush green campuses — life at
            CUSAT is enriching both academically and personally.
          </p>

          {/* Gallery grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Feature image — spans 2 cols */}
            <div className="col-span-2 relative overflow-hidden rounded-2xl h-64 md:h-80 group">
              <Image
                src={cusatAdmImg}
                alt="CUSAT Administrative Block"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-semibold text-sm">
                  CUSAT Administrative Block
                </p>
                <p className="text-white/65 text-xs">Main Campus, Kochi</p>
              </div>
            </div>

            {/* Right column top */}
            <div className="relative overflow-hidden rounded-2xl h-64 md:h-80 group">
              <Image
                src={depImg}
                alt="Department of Computer Science Building"
                fill
                sizes="33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-medium text-xs">
                  Dept. of Computer Science
                </p>
              </div>
            </div>

            {/* Row 2 — three equal columns */}
            <div className="relative overflow-hidden rounded-2xl aspect-video group">
              <Image
                src={queensImg}
                alt="Queen's University of Belfast"
                fill
                sizes="33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-medium text-xs">
                  Queen&apos;s Univ. Belfast, UK
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-video group">
              <Image
                src={gp3Img}
                alt="ENSSAT, University of Rennes"
                fill
                sizes="33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-medium text-xs">
                  ENSSAT, Rennes, France
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-video group">
              <Image
                src={cusatImg}
                alt="CUSAT Campus"
                fill
                sizes="33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.30) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-medium text-xs">CUSAT Campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Partners ─────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Collaborations</p>
          <h2 className="h-section mt-2">Partner Institutions</h2>
          <p className="lead mt-4 max-w-2xl">
            We collaborate with premier academic institutions and technology
            companies across India.
          </p>

          {/* Logo partners */}
          <div className="mt-10 flex flex-wrap gap-5 items-center">
            {industryPartnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-4 rounded-xl border bg-card px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-10 w-28 shrink-0">
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>

          {/* Text partners grid */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industryPartnerNames.map((p) => (
              <div key={p} className="partner-chip">
                <span className="partner-dot" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements — full-bleed image section ───────────────────── */}
      <section id="achievements" className="relative py-16 md:py-28 overflow-hidden">
        <Image
          src={achievementsImg}
          alt="Student achievements at CUSAT"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, oklch(0.10 0.12 258 / 0.97) 0%, oklch(0.14 0.08 258 / 0.93) 100%)",
          }}
        />

        <div className="relative z-10 wrap">
          <p className="eyebrow" style={{ color: "#00c2dc" }}>
            Notable Achievements
          </p>
          <h2 className="h-section mt-2 text-white">Beyond the Classroom</h2>
          <p className="mt-4 max-w-2xl text-white/65 leading-relaxed">
            Scholarships, international conference publications, hackathon
            victories, and GATE qualifications — our students consistently
            excel on every stage.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {achievements.map((a) => (
              <div
                key={a.text}
                className="flex items-start gap-3 rounded-xl border border-white/10 px-5 py-4"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="mt-0.5 shrink-0 flex size-5 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(0,194,220,0.18)",
                    color: "#00c2dc",
                  }}
                >
                  <Check size={11} strokeWidth={3} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-white/85">{a.text}</span>
                </div>
                <span
                  className="shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(0,194,220,0.15)",
                    color: "#00c2dc",
                  }}
                >
                  {a.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Ventures ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow" style={{ color: "#00c2dc" }}>
                Student Ventures
              </p>
              <h2 className="h-section mt-2 text-primary-foreground">
                Startups Founded by Our Students
              </h2>
              <p className="mt-4 text-primary-foreground/65 leading-relaxed">
                Our students don&apos;t just learn — they build. These ventures
                were founded by graduates of our programme, tackling real-world
                challenges with AI.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Connect with Student Founders <ArrowRight size={14} />
              </a>
            </div>

            <div className="space-y-5">
              {[
                {
                  name: "Lejit",
                  tag: "AI Legal Assistant",
                  desc: "Helping the legal sector be smarter and fairer through intelligent automation — making justice more accessible.",
                },
                {
                  name: "QALANSER",
                  tag: "Advanced AI & ML Solutions",
                  desc: "Building advanced Artificial Intelligence and Machine Learning solutions tailored for industries, pushing the frontier of applied AI.",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="rounded-xl border border-white/12 p-5 flex gap-4 hover:border-white/25 transition-colors"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="size-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,194,220,0.18)" }}
                  >
                    <Rocket size={20} style={{ color: "#00c2dc" }} />
                  </div>
                  <div>
                    <p className="font-bold font-heading text-xl text-primary-foreground">
                      {s.name}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: "#00c2dc" }}>
                      {s.tag}
                    </p>
                    <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision / Quote ────────────────────────────────────────────── */}
      <section className="vision-section">
        <div className="vision-body">
          <p
            className="eyebrow"
            style={{ color: "oklch(0.97 0.005 259 / 0.50)" }}
          >
            Our Vision
          </p>
          <h2 className="h-section mt-3 max-w-3xl mx-auto">
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

      {/* ── Contact ───────────────────────────────────────────────────── */}
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
              <div key={c.email} className="contact-card">
                <div className="flex items-center gap-3 mb-1">
                  <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <c.Icon size={16} />
                  </div>
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
                <a href={"mailto:" + c.email} className="contact-row">
                  <Mail size={14} />
                  {c.email}
                </a>
              </div>
            ))}
          </div>

          {/* Department info block with split image */}
          <div className="mt-10 rounded-2xl overflow-hidden border shadow-sm">
            <div className="grid md:grid-cols-2">
              {/* Left: photo */}
              <div className="relative h-64 md:h-auto min-h-[220px]">
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

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="flex items-center gap-3">
            <Image
              src={cusatLogo}
              alt="CUSAT"
              width={28}
              height={28}
              className="rounded-full opacity-70"
            />
            <p className="footer-copy">
              © 2025 Department of Computer Science, CUSAT. All rights reserved.
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
