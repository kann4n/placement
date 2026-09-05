import { Brain, Globe, Trophy, Rocket, BookOpen, Laptop, GraduationCap, FlaskConical, Award, Star, } from "lucide-react";
// change to good icons

const navLinks = [
  { href: "#why-hire", label: "Why Hire" },
  { href: "#startups", label: "Startups" },
  { href: "#partners", label: "Partners" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
] as const;

const stats = [
  { value: "20", label: "Students per Batch" },
  { value: "5+", label: "Hackathon Wins" },
  { value: "90%", label: "Practical Curriculum" },
  { value: "50%", label: "Research Projects" },
] as const;

const features = [
  {
    Icon: Brain,
    name: "AI & Data Science Focus",
    desc: "Specialised 5-year integrated MSc in Artificial Intelligence and Data Science.",
  },
  {
    Icon: Globe,
    name: "Global Exposure",
    desc: "Exchange programs with NTNU Norway, Queen's Belfast, and University of Rennes.",
  },
  {
    Icon: Trophy,
    name: "Hackathon Champions",
    desc: "5+ hackathon wins and top placements at national and international competitions.",
  },
  {
    Icon: Rocket,
    name: "Startup Founders",
    desc: "Student-founded startups building real AI solutions for industry challenges.",
  },
  {
    Icon: BookOpen,
    name: "Research Ready",
    desc: "50% research-focused curriculum with GATE & NET qualified graduates.",
  },
  {
    Icon: Laptop,
    name: "Industry Internships",
    desc: "Strong industry tie-ups ensuring students gain hands-on real-world experience.",
  },
  {
    Icon: GraduationCap,
    name: "GATE 2025 Qualified",
    desc: "Students have cracked GATE 2025 in Data Science and Artificial Intelligence.",
  },
  {
    Icon: FlaskConical,
    name: "90% Practical",
    desc: "Lab-first teaching with projects, competitions, and live deployments.",
  },
] as const;

const startups = [
  {
    name: "Lejit",
    tag: "AI Legal Assistant",
    desc: "Helping the legal sector be smarter and fairer through intelligent automation and AI-powered assistance — making justice more accessible.",
  },
  {
    name: "QALANSER",
    tag: "Advanced AI & ML Solutions",
    desc: "Building advanced Artificial Intelligence and Machine Learning solutions tailored for industries, pushing the frontier of applied AI.",
  },
] as const;

const globalPartners = [
  {
    name: "NTNU, Gjøvik",
    country: "Norway",
    years: "2022 · 2023 · 2025",
  },
  {
    name: "Queen's University of Belfast",
    country: "United Kingdom",
    years: "2023",
  },
  {
    name: "ENSSAT, University of Rennes",
    country: "France",
    years: "Recent",
  },
] as const;

const industryPartners = [
  "IIT Tirupati",
  "Infenox Technologies Kochi",
  "IISER Thiruvananthapuram",
  "Nav Technologies Kochi",
  "NIT Surathkal",
  "IIIT Hyderabad (LTRC)",
  "KPIT Technologies Kochi",
  "NIT Calicut",
  "Pealsoft Technologies Kochi",
  "Pixdynamics Kochi",
  "GadgEon Engineering Smartness Kochi",
  "BITS Pilani Goa",
] as const;

const hackathons = [
  { badge: "3rd Place", name: "Magnathon'23" },
  { badge: "Top 15", name: "Finathon'23" },
  { badge: "Finalist", name: "Tink-her-hack'24" },
  { badge: "Winners", name: "IEDC Hackify'24" },
  { badge: "3rd Prize", name: "IEEE .hack()'24" },
  { badge: "Theme Prize", name: "HackAthena'24" },
  { badge: "South Zone", name: "Anveshan'25" },
  { badge: "Top 10", name: "Hack2Future'25" },
] as const;

const achievements = [
  "Charpak Scholarship — French Embassy 2025",
  "Dreamvestor Startup Competition Winners",
  "16th Anti-UAV Challenge, CVPR 2025",
  "Top 30 — IEEE IES Generative AI Challenge 2024",
  "Publication at IFIP AIAI 2022",
  "Publication at BMVC UK 2023",
  "IEEE Connect 2024 & 2025",
  "NCMEP 2024 Participants",
  "IEEE AIIoT Seattle 2025",
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

export { navLinks, stats, features, startups, globalPartners, industryPartners, hackathons, achievements, contacts };