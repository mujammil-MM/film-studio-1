'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const awards = [
  { title: 'Best Film', org: 'National Film Awards', year: '2024', color: '#d4af37' },
  { title: 'Best Director', org: 'Filmfare Awards', year: '2024', color: '#d4af37' },
  { title: 'Golden Globe Nom.', org: 'Hollywood Foreign Press', year: '2023', color: '#c0c0c0' },
  { title: 'Best VFX', org: 'BAFTA Awards', year: '2023', color: '#d4af37' },
  { title: 'Audience Choice', org: 'IIFA Awards', year: '2023', color: '#cd7f32' },
  { title: 'Best Screenplay', org: 'Screen Awards', year: '2022', color: '#d4af37' },
  { title: 'Best Cinematography', org: 'Zee Cine Awards', year: '2022', color: '#d4af37' },
  { title: 'Outstanding Film', org: 'Star Screen Awards', year: '2022', color: '#c0c0c0' },
];

function AwardBadge({ award, index }: { award: typeof awards[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }}
    >
      {/* Award trophy SVG */}
      <motion.div
        animate={hovered ? { y: -8, rotate: [0, -3, 3, 0] } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'relative', marginBottom: 16 }}
      >
        <svg viewBox="0 0 100 120" width="90" height="108">
          <defs>
            <radialGradient id={`gold${index}`} cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor={award.color === '#d4af37' ? '#f5e07a' : award.color === '#c0c0c0' ? '#e8e8e8' : '#e8a060'}/>
              <stop offset="100%" stopColor={award.color}/>
            </radialGradient>
          </defs>
          {/* Trophy cup */}
          <path d="M35 15 Q35 5 50 5 Q65 5 65 15 L68 45 Q75 45 75 55 Q75 65 65 65 L62 65 Q58 80 50 85 L50 95 L60 100 L40 100 L50 95 L50 85 Q42 80 38 65 L35 65 Q25 65 25 55 Q25 45 32 45 Z" fill={`url(#gold${index})`}/>
          {/* Cup handles */}
          <path d="M32 45 Q20 45 20 55 Q20 62 32 63" fill="none" stroke={award.color} strokeWidth="2"/>
          <path d="M68 45 Q80 45 80 55 Q80 62 68 63" fill="none" stroke={award.color} strokeWidth="2"/>
          {/* Base */}
          <rect x="36" y="100" width="28" height="8" rx="2" fill={award.color}/>
          <rect x="30" y="108" width="40" height="7" rx="3" fill={award.color}/>
          {/* Star on cup */}
          <polygon points="50,25 52,31 58,31 53,35 55,41 50,37 45,41 47,35 42,31 48,31" fill="rgba(255,255,255,0.4)"/>
          {/* Shine */}
          <ellipse cx="42" cy="28" rx="5" ry="8" fill="rgba(255,255,255,0.2)" transform="rotate(-20 42 28)"/>
        </svg>

        {/* Glow */}
        <div style={{
          position: 'absolute', inset: -10,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${award.color}30, transparent 70%)`,
          animation: hovered ? 'pulse-red 1.5s infinite' : 'none',
        }} />
      </motion.div>

      <div style={{
        textAlign: 'center',
        padding: '0 10px',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.95rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--white)',
          marginBottom: 4,
        }}>{award.title}</div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          color: 'var(--gray)',
          marginBottom: 6,
        }}>{award.org}</div>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.7rem',
          color: award.color,
          letterSpacing: '0.1em',
        }}>{award.year}</div>
      </div>
    </motion.div>
  );
}

export default function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(awards.length / perPage);
  const visible = awards.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="awards" ref={ref} style={{
      background: 'var(--black-2)',
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '50%', left: -100,
        width: 300, height: 300, borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.06)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: -80,
        width: 250, height: 250, borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.06)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="red-line" style={{ margin: '0 auto 16px' }} />
          <h2 className="section-title">
            OUR <span style={{ color: 'var(--gold)' }}>ACCOLADES</span>
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: 14 }}>
            Recognition that validates our commitment to cinematic excellence
          </p>
        </motion.div>

        {/* Awards Carousel */}
        <div style={{ position: 'relative' }}>
          {/* Prev/Next arrows */}
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            style={{
              position: 'absolute', left: -40, top: '50%', transform: 'translateY(-50%)',
              zIndex: 10, background: 'var(--black-3)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: page === 0 ? 'var(--gray)' : 'var(--gold)',
              width: 40, height: 40,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: page === 0 ? 'default' : 'pointer',
              transition: 'all 0.2s',
            }}
            aria-label="Previous awards"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 16,
                padding: '20px 0',
              }}
            >
              {visible.map((award, i) => (
                <AwardBadge key={award.title} award={award} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            style={{
              position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)',
              zIndex: 10, background: 'var(--black-3)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: page === totalPages - 1 ? 'var(--gray)' : 'var(--gold)',
              width: 40, height: 40,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: page === totalPages - 1 ? 'default' : 'pointer',
              transition: 'all 0.2s',
            }}
            aria-label="Next awards"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? 24 : 8,
                height: 8,
                background: i === page ? 'var(--red)' : 'var(--black-4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                borderRadius: 4,
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
