/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiNetlify,
  SiTypescript,
} from "react-icons/si";
import { FiCode, FiImage } from "react-icons/fi";

/* ─────────────────────────────── DATA ─────────────────────────────── */

const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Contact"];

const EXPERIENCES = [
  {
    title: "Frontend Developer Intern",
    company: "PerfectionGeeks Technologies",
    period: "April 2025 – Present",
    desc: "Working on production-grade frontend projects, building responsive and scalable web applications using React, Next.js, and Tailwind CSS.",
    current: true,
    color: "#6366f1",
  },
  {
    title: "Frontend Developer Intern",
    company: "Google Developer Student Club (HRIT)",
    period: "Dec 2024 – Present",
    desc: "Working on web development projects and collaborating with the core team to build solutions for the student developer community.",
    current: true,
    color: "#a78bfa",
  },
  {
    title: "Open Source Contributor",
    company: "Hacktoberfest 2024",
    period: "Oct 2024 – Oct 31, 2024",
    desc: "Contributed to open-source projects by fixing bugs and improving features during the annual Hacktoberfest event.",
    current: false,
    color: "#38bdf8",
  },
];

const PROJECTS = [
  {
    name: "Out Grid",
    emoji: "🗒️",
    desc: "A fully optimized and responsive coding journal with immersive animations, seamless lazy loading, and unique button effects.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/TonyStark-19/Dev-Diary",
    live: "https://outgrid-template-sample.netlify.app/",
    grad: "from-indigo-900/60 to-purple-900/40",
  },
  {
    name: "Plots Web",
    emoji: "🏡",
    desc: "A fully responsive and visually stunning platform for buying plots, designed with Bootstrap for seamless experience.",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/KeshavMishra023/buying-plots",
    live: "https://plots-buying.netlify.app",
    grad: "from-blue-900/60 to-cyan-900/40",
  },
  {
    name: "Travel Website",
    emoji: "✈️",
    desc: "A modern travel UI delivering seamless performance, smooth animations, and an engaging user experience.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/KeshavMishra023/Travelling-web-sample",
    live: "https://travel-webdemo.netlify.app",
    grad: "from-emerald-900/60 to-teal-900/40",
  },
  {
    name: "World Info",
    emoji: "🌍",
    desc: "Built with React & Tailwind CSS, fetches real-time country info via REST API with a fully responsive UI.",
    tags: ["React", "Tailwind CSS", "REST API"],
    github: "https://github.com/KeshavMishra023/reactWorldVisitprojectGithub",
    live: "https://reactworldproject.netlify.app",
    grad: "from-violet-900/60 to-pink-900/40",
  },
];

const TECH_SKILLS = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
  { name: "React JS", icon: <FaReact className="text-cyan-400" />, level: 80 },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 85 },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" />, level: 88 },
  { name: "jQuery", icon: <SiJquery className="text-blue-400" />, level: 75 },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 55 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 45 },
];

const TOOL_SKILLS = [
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "VS Code", icon: <FiImage  className="text-blue-400" /> },
  { name: "Photoshop", icon: <FiCode  className="text-blue-600" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

const TYPED_WORDS = [
  "Web Developer",
  "Frontend Engineer",
  "React Developer",
  "Next.js Developer",
  "UI Enthusiast",
];

/* ─────────────────────────────── COMPONENT ─────────────────────────────── */

export default function page () {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typed, setTyped] = useState("");
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Three.js particle background */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Particles
    const geo = new THREE.BufferGeometry();
    const count = 3500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 22;
      positions[i + 1] = (Math.random() - 0.5) * 22;
      positions[i + 2] = (Math.random() - 0.5) * 22;
      const r = Math.random();
      if (r < 0.33) { colors[i] = 0.39; colors[i + 1] = 0.40; colors[i + 2] = 0.94; }
      else if (r < 0.66) { colors[i] = 0.65; colors[i + 1] = 0.55; colors[i + 2] = 0.98; }
      else { colors[i] = 0.22; colors[i + 1] = 0.74; colors[i + 2] = 0.97; }
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.85 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Torus rings
    const t1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.008, 16, 200),
      new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.35 })
    );
    t1.rotation.x = Math.PI / 4;
    scene.add(t1);

    const t2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.005, 16, 200),
      new THREE.MeshBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.2 })
    );
    t2.rotation.x = -Math.PI / 6;
    t2.rotation.y = Math.PI / 4;
    scene.add(t2);

    const t3 = new THREE.Mesh(
      new THREE.TorusGeometry(1.5, 0.006, 16, 200),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25 })
    );
    scene.add(t3);

    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMouse);

    let tick = 0;
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      tick += 0.003;
      points.rotation.y = tick * 0.1 + mouse.x;
      points.rotation.x = mouse.y * 0.5;
      t1.rotation.z = tick * 0.3;
      t2.rotation.z = -tick * 0.2;
      t2.rotation.x = tick * 0.1 - Math.PI / 6;
      t3.rotation.y = tick * 0.4;
      t3.rotation.x = tick * 0.2;
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  /* Typewriter */
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const loop = () => {
      const word = TYPED_WORDS[wi];
      if (!deleting) {
        setTyped(word.slice(0, ci + 1));
        ci++;
        if (ci === word.length) { deleting = true; timer = setTimeout(loop, 1800); return; }
      } else {
        setTyped(word.slice(0, ci - 1));
        ci--;
        if (ci === 0) { deleting = false; wi = (wi + 1) % TYPED_WORDS.length; timer = setTimeout(loop, 400); return; }
      }
      timer = setTimeout(loop, deleting ? 60 : 100);
    };
    loop();
    return () => clearTimeout(timer);
  }, []);

  /* Scroll effects */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
      const current = sections.reduce((acc, el) => {
        if (el && window.scrollY >= el.offsetTop - 120) return el.id;
        return acc;
      }, "home");
      setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Intersection observer for reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ── JSX ── */
  return (
    <div className="relative bg-[#050510] text-slate-200 font-sans overflow-x-hidden">

      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />

      {/* ── NAV ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#050510]/90 backdrop-blur-xl border-b border-indigo-900/40 shadow-lg shadow-black/30" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold text-2xl bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            KM
          </span>
          {/* Desktop */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((n) => (
              <li key={n}>
                <button
                  onClick={() => scrollTo(n)}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${activeSection === n ? "text-indigo-400" : "text-slate-400 hover:text-white"}`}
                >
                  {n}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 ${activeSection === n ? "w-full" : "w-0 group-hover:w-full"}`} />
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile burger */}
          <button className="md:hidden text-slate-400 hover:text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a1f]/95 backdrop-blur-xl border-t border-indigo-900/30 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((n) => (
              <button key={n} onClick={() => scrollTo(n)} className="text-sm text-slate-300 hover:text-indigo-400 text-left transition-colors">
                {n}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative z-10  flex items-center px-6 pt-26">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-1.5 text-sm text-violet-300 font-medium mb-6">
              {/* <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> */}
              Available for opportunities
            </div>
            <p className="text-slate-400 text-md font-medium mb-1 tracking-widest uppercase">Hello, It&apos;s Me</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Keshav Mishra
                
              </span>
            </h1>
            <p className="md:text-2xl text-lg text-slate-300 mb-4">
              And I&apos;m a{" "}
              <span className="text-cyan-400 font-bold">{typed}<span className="animate-blink">|</span></span>
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-lg md:max-w-[480px] mb-6">
              Explore my portfolio featuring projects built with HTML, CSS, JavaScript, Bootstrap, jQuery, and Tailwind CSS. Currently levelling up with React &amp; Next.js to build dynamic, production-grade applications.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mb-8">
              {[
                { href: "https://www.linkedin.com/in/keshav-mishra-a97204347", icon: <FaLinkedin />, label: "LinkedIn" },
                { href: "https://github.com/KeshavMishra023", icon: <FaGithub />, label: "GitHub" },
                { href: "https://www.instagram.com/keshavmishra023", icon: <FaInstagram />, label: "Instagram" },
                { href: "https://x.com/Mish43720Keshav", icon: <FaTwitter />, label: "X" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl bg-[#111130] border border-indigo-900/50 flex items-center justify-center text-slate-400 hover:text-indigo-300 hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300 text-base">
                  {icon}
                </a>
              ))}
            </div>
            {/* CTAs */}
            <div className="flex gap-4">
              <button onClick={() => scrollTo("Experience")}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300">
                Explore My Work
              </button>
              <button onClick={() => scrollTo("Contact")}
                className="border border-indigo-800 text-slate-300 px-6 py-3 rounded-xl font-semibold text-sm hover:border-indigo-500 hover:text-indigo-300 hover:-translate-y-1 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
          {/* 3D Orb Visual */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 hidden md:flex justify-center items-center relative">
            <div className="w-80 h-80 rounded-full relative flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent border border-indigo-500/20" />
              <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-spin" style={{ animationDuration: "12s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/60" />
              </div>
              <div className="w-64 h-64 rounded-full bg-[#0f0f2e] border border-indigo-900/50 flex flex-col items-center justify-center gap-4 z-10">
                <span className="text-6xl">👨‍💻</span>
                <div className="flex gap-6">
                  {[["4+", "Projects"], ["2+", "Years"], ["7+", "Skills"]].map(([n, l]) => (
                    <div key={l} className="text-center">
                      <div className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{n}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-6 -left-4 bg-[#111130] border border-indigo-900/50 rounded-xl px-3 py-2 text-xs text-slate-300 animate-[float2_4s_ease-in-out_infinite] whitespace-nowrap">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />Open to Work
            </div>
            <div className="absolute bottom-16 -right-4 bg-[#111130] border border-indigo-900/50 rounded-xl px-3 py-2 text-xs text-slate-300 animate-[float2_5s_ease-in-out_infinite_reverse] whitespace-nowrap">
              ⚡ React · Next.js
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative z-10 py-28 px-6 bg-gradient-to-b from-transparent to-[#0a0a1f]/80">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-indigo-500/10 border border-indigo-500/25 text-violet-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
              My <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              I&apos;m a passionate frontend developer from Etah, Uttar Pradesh. My journey started with raw HTML &amp; CSS, and I&apos;ve grown into building responsive, dynamic web apps with modern frameworks like React and Next.js.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm">
              I love crafting pixel-perfect interfaces and am always learning new technologies to push the boundaries of what&apos;s possible on the web.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Frontend Dev", "React", "Next.js", "Open Source", "UI/UX Enthusiast", "Tailwind CSS"].map((t) => (
                <span key={t} className="bg-indigo-500/10 border border-indigo-500/20 text-violet-300 text-xs px-3 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </div>
          {/* Right – Education */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
            <span className="inline-block bg-indigo-500/10 border border-indigo-500/25 text-violet-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">Education</span>
            {[
              { icon: "🎓", title: "B.Sc — Ganjundwara College, Etah, U.P", period: "Sept 2021 – July 2024", sub: "Bachelor of Science" },
              { icon: "📚", title: "12th — R D Scientific Academy, Jaithra, Etah, U.P", period: "Score: 81%", sub: "🏆 Class Topper" },
            ].map((e) => (
              <div key={e.title} className="relative bg-[#111130] border border-indigo-900/40 rounded-2xl p-5 mb-4 overflow-hidden hover:border-indigo-500/50 hover:translate-x-1 transition-all duration-300 group">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500 to-violet-500 rounded-l-2xl" />
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-xl mb-3">{e.icon}</div>
                <p className="font-semibold text-sm text-slate-200 mb-1">{e.title}</p>
                <p className="text-cyan-400 text-xs font-medium">{e.period}</p>
                <p className="text-slate-400 text-xs mt-1">{e.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 py-28 px-6 bg-[#0a0a1f]/70">
        <div className="max-w-6xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-14 text-center">
            <span className="inline-block bg-indigo-500/10 border border-indigo-500/25 text-violet-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">Skills</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              My <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3">Technologies and tools I use to bring ideas to life.</p>
          </div>

          {/* Tech Skills with progress */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
            <h3 className="text-slate-400 font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
              Technologies <span className="flex-1 h-px bg-indigo-900/60" />
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TECH_SKILLS.map((s) => (
                <div key={s.name} className="bg-[#111130] border border-indigo-900/40 rounded-2xl p-4 hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="font-medium text-sm text-slate-200">{s.name}</span>
                    <span className="ml-auto text-xs text-slate-500">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-indigo-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <h3 className="text-slate-400 font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
              Tools <span className="flex-1 h-px bg-indigo-900/60" />
            </h3>
            <div className="flex flex-wrap gap-3">
              {TOOL_SKILLS.map((t) => (
                <div key={t.name} className="flex items-center gap-2 bg-[#111130] border border-indigo-900/40 rounded-xl px-4 py-3 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <span className="text-xl">{t.icon}</span>
                  <span className="text-sm text-slate-300 font-medium">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="relative z-10 py-28 px-6 bg-gradient-to-b from-[#0a0a1f]/70 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-14 text-center">
            <span className="inline-block bg-indigo-500/10 border border-indigo-500/25 text-violet-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">Career</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Work <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 relative pl-8 mb-24">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" />
            {EXPERIENCES.map((e, i) => (
              <div key={i} className="relative mb-8 last:mb-0 pl-8">
                <div
                  className="absolute -left-[7px] top-5 w-3.5 h-3.5 rounded-full border-[3px] border-[#0a0a1f]"
                  style={{ background: e.color, boxShadow: `0 0 14px ${e.color}99` }}
                />
                <div className="bg-[#111130] border border-indigo-900/40 rounded-2xl p-6 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  {e.current && (
                    <span className="inline-block bg-green-500/10 border border-green-500/25 text-green-400 text-xs px-2.5 py-0.5 rounded-full mb-3">
                      ● Current
                    </span>
                  )}
                  <h3 className="font-bold text-base text-slate-100 mb-1">{e.title}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-2">{e.company}</p>
                  <p className="text-slate-500 text-xs mb-3 flex items-center gap-1">📅 {e.period}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12 text-center">
            <span className="inline-block bg-indigo-500/10 border border-indigo-500/25 text-violet-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Featured <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((p) => (
              <div key={p.name} className="bg-[#111130] border border-indigo-900/40 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-400 group flex flex-col">
                <div className={`h-36 bg-gradient-to-br ${p.grad} flex items-center justify-center text-5xl relative`}>
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm text-slate-100 mb-2">{p.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs px-2 py-0.5 rounded-md">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-violet-300 transition-colors">
                      <FaGithub /> GitHub
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors">
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-[#111130] border border-indigo-900/40 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" />
              <span className="inline-block bg-indigo-500/10 border border-indigo-500/25 text-violet-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-5">Contact</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                I&apos;m open to work and networking. If you have an exciting project in mind, want to collaborate, or simply wish to connect — let&apos;s talk!
              </p>
              <a href="mailto:keshavmishra0024@gmail.com"
                className="inline-flex items-center gap-3 bg-indigo-500/15 border border-indigo-500/30 text-violet-300 font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-indigo-500/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 mb-8">
                <FaEnvelope className="text-base" />
                keshavmishra0024@gmail.com
              </a>
              <div className="flex justify-center gap-3">
                {[
                  { href: "https://www.linkedin.com/in/keshav-mishra-a97204347", icon: <FaLinkedin />, label: "LinkedIn" },
                  { href: "https://github.com/KeshavMishra023", icon: <FaGithub />, label: "GitHub" },
                  { href: "https://www.instagram.com/keshavmishra023", icon: <FaInstagram />, label: "Instagram" },
                  { href: "https://x.com/Mish43720Keshav", icon: <FaTwitter />, label: "X" },
                ].map(({ href, icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-900/60 flex items-center justify-center text-slate-400 hover:text-indigo-300 hover:border-indigo-500/60 hover:-translate-y-1 transition-all duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 bg-[#0a0a1f]/80 border-t border-indigo-900/30 py-6 px-6 text-center text-slate-500 text-sm">
        <p>
          © 2026{" "}
          <span className="text-indigo-400 font-semibold">Keshav Mishra</span>
          {" "}· Built with{" "}
          <span className="text-slate-300">Next.js</span> &amp;{" "}
          <SiTailwindcss className="inline text-sky-400 mx-1" />
          {" "}·{" "}
          <a href="mailto:keshavmishra0024@gmail.com" className="hover:text-indigo-400 transition-colors">
            keshavmishra0024@gmail.com
          </a>
        </p>
      </footer>

      {/* Global keyframe styles */}
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-10px) rotate(2deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .animate-blink { animation: blink 1s step-end infinite; }
        .reveal { opacity:0; transform:translateY(30px); transition:opacity .7s ease, transform .7s ease; }
        .reveal.visible { opacity:1; transform:translateY(0); }
      `}</style>
    </div>
  );
}