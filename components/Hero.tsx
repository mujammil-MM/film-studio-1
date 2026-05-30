'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiPlay, FiArrowRight } from 'react-icons/fi';

const stats = [
  { number: '30+', label: 'Content Pieces' },
  { number: '10+', label: 'Film Services' },
  { number: '300+', label: 'TV Downloads' },
  { number: '4+', label: 'Diverse Content' },
];

function GlitchText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={className} style={{ position: 'relative', display: 'inline-block', ...style }}>
      {text}
      <span aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0,
        color: 'var(--red)',
        animation: 'glitch-1 4s infinite linear',
        opacity: 0.7,
        pointerEvents: 'none',
      }}>{text}</span>
      <span aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0,
        color: '#00ccff',
        animation: 'glitch-2 4s infinite linear',
        opacity: 0.3,
        pointerEvents: 'none',
      }}>{text}</span>
    </span>
  );
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1500;
        const step = (target / duration) * 16;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0505 40%, #0a0a0a 100%)',
        zIndex: 0,
      }} />

      {/* Animated grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Scanline animation */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, height: '2px',
          background: 'linear-gradient(transparent, rgba(204,0,0,0.15), transparent)',
          animation: 'scanline 6s linear infinite',
        }} />
      </div>

      {/* Hero camera image (SVG-based cinematic) */}
      <div style={{
        position: 'absolute', right: '-5%', top: '10%', width: '55%', height: '80%',
        background: 'radial-gradient(ellipse at center, rgba(204,0,0,0.12) 0%, transparent 70%)',
        zIndex: 1,
      }}>
        {/* Camera silhouette */}
        <svg viewBox="0 0 600 400" style={{ width: '100%', height: '100%', opacity: 0.25 }}>
          <g fill="rgba(204,0,0,0.6)" stroke="rgba(204,0,0,0.3)" strokeWidth="1">
            {/* Camera body */}
            <rect x="100" y="120" width="320" height="200" rx="8" fill="rgba(40,40,40,0.8)" stroke="rgba(204,0,0,0.5)" strokeWidth="2"/>
            {/* Lens */}
            <circle cx="250" cy="220" r="80" fill="rgba(20,20,20,0.9)" stroke="rgba(204,0,0,0.6)" strokeWidth="3"/>
            <circle cx="250" cy="220" r="60" fill="rgba(10,10,10,0.9)" stroke="rgba(100,100,100,0.4)" strokeWidth="2"/>
            <circle cx="250" cy="220" r="35" fill="rgba(5,5,20,0.95)" stroke="rgba(80,80,80,0.3)" strokeWidth="1"/>
            <circle cx="235" cy="205" r="8" fill="rgba(255,255,255,0.1)"/>
            {/* Viewfinder */}
            <rect x="380" y="140" width="80" height="50" rx="4" fill="rgba(30,30,30,0.8)" stroke="rgba(204,0,0,0.4)" strokeWidth="2"/>
            {/* Handle */}
            <rect x="320" y="80" width="60" height="50" rx="4" fill="rgba(30,30,30,0.8)" stroke="rgba(204,0,0,0.3)" strokeWidth="2"/>
            {/* Tripod */}
            <line x1="260" y1="320" x2="200" y2="400" stroke="rgba(150,150,150,0.5)" strokeWidth="8"/>
            <line x1="260" y1="320" x2="260" y2="400" stroke="rgba(150,150,150,0.5)" strokeWidth="8"/>
            <line x1="260" y1="320" x2="320" y2="400" stroke="rgba(150,150,150,0.5)" strokeWidth="8"/>
            {/* Red light dot */}
            <circle cx="420" cy="155" r="6" fill="var(--red)">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>
      </div>

      {/* Decorative red vertical line */}
      <div style={{
        position: 'absolute', left: '7%', top: 0, bottom: 0, width: '2px',
        background: 'linear-gradient(to bottom, transparent, var(--red), transparent)',
        zIndex: 2, opacity: 0.5,
      }} />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, zIndex: 3, position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 100 }}
        className="container"
      >
        <div style={{ maxWidth: 750 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: 24 }}
          >
            <span className="red-badge">🎬 Award Winning Studio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.9,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 0,
            }}>
              WE CREATE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ overflow: 'hidden', marginBottom: 24 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
              lineHeight: 0.9,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              WebkitTextStroke: '2px var(--red)',
              color: 'transparent',
              textShadow: '0 0 40px rgba(204,0,0,0.3)',
            }}>
              <GlitchText text="NEW MILESTONES" />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              color: 'var(--gray)',
              maxWidth: 500,
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            A premier production studio crafting cinematic stories that inspire, transform, and captivate audiences worldwide. From blockbuster films to viral web content — we redefine storytelling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a href="#productions" className="btn-red">
              <FiPlay size={16} />
              View Productions
            </a>
            <a href="#about" className="btn-outline">
              Our Story <FiArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            marginTop: 60,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 40,
            maxWidth: 680,
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '0 20px 0 0',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              paddingRight: i < 3 ? 20 : 0,
            }}>
              <div className="stat-number">
                <CountUp target={parseInt(s.number)} suffix="+" />
              </div>
              <div className="stat-label" style={{ marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
          zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gray)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, var(--red), transparent)', animation: 'float 2s ease-in-out infinite' }} />
      </motion.div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%',
        background: 'linear-gradient(to bottom, transparent, var(--black))',
        zIndex: 2, pointerEvents: 'none',
      }} />
    </section>
  );
}
