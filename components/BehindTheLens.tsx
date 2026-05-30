'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const photos = [
  { cols: 2, rows: 2, label: 'On Location Shoot', bg: '#1a0808' },
  { cols: 1, rows: 1, label: 'Director\'s Vision', bg: '#0a1218' },
  { cols: 1, rows: 1, label: 'Crew in Action', bg: '#181208' },
  { cols: 1, rows: 2, label: 'Behind Camera', bg: '#120818' },
  { cols: 2, rows: 1, label: 'Film Set Lights', bg: '#081812' },
  { cols: 1, rows: 1, label: 'Actors Prep', bg: '#180808' },
  { cols: 1, rows: 1, label: 'Post Production', bg: '#081218' },
  { cols: 2, rows: 1, label: 'Award Night', bg: '#181408' },
];

const gridItems = [
  { col: '1/3', row: '1/3', label: 'On Location Shoot', bg: '#1a0808', light: '#cc0000' },
  { col: '3/4', row: '1/2', label: "Director's Vision", bg: '#0a1218', light: '#4466cc' },
  { col: '4/5', row: '1/2', label: 'Crew in Action', bg: '#181208', light: '#cc8800' },
  { col: '5/7', row: '1/3', label: 'Behind Camera', bg: '#120818', light: '#8800cc' },
  { col: '3/4', row: '2/3', label: 'Film Set Lights', bg: '#081812', light: '#00aa44' },
  { col: '4/5', row: '2/3', label: 'Actors Prep', bg: '#180808', light: '#cc4400' },
  { col: '1/3', row: '3/4', label: 'Post Production', bg: '#081218', light: '#0088cc' },
  { col: '3/5', row: '3/4', label: 'Award Night', bg: '#181408', light: '#d4af37' },
  { col: '5/7', row: '3/4', label: 'Creative Process', bg: '#180818', light: '#cc0066' },
];

function BehindCard({ item, index }: { item: typeof gridItems[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{
        gridColumn: item.col,
        gridRow: item.row,
        background: item.bg,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 40% 40%, ${item.light}22, transparent 70%)`,
      }} />

      {/* Camera/film SVG elements */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="60" fill="none" stroke={item.light} strokeWidth="1"/>
        <circle cx="100" cy="100" r="40" fill="none" stroke={item.light} strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="15" fill={item.light} opacity="0.3"/>
        <line x1="100" y1="40" x2="100" y2="160" stroke={item.light} strokeWidth="0.5" opacity="0.4"/>
        <line x1="40" y1="100" x2="160" y2="100" stroke={item.light} strokeWidth="0.5" opacity="0.4"/>
      </svg>

      {/* Photo-like content (colored rectangles to simulate real photos) */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          radial-gradient(ellipse at 20% 30%, ${item.light}18 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, ${item.light}10 0%, transparent 50%),
          linear-gradient(${index * 37}deg, ${item.bg} 0%, ${item.light}08 100%)
        `,
      }} />

      {/* Human silhouette for some cards */}
      {index % 3 === 0 && (
        <svg style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', opacity: 0.2 }} viewBox="0 0 80 120">
          <ellipse cx="40" cy="20" rx="16" ry="18" fill={item.light}/>
          <rect x="20" y="38" width="40" height="55" rx="8" fill={item.light}/>
          <rect x="8" y="42" width="14" height="40" rx="6" fill={item.light}/>
          <rect x="58" y="42" width="14" height="40" rx="6" fill={item.light}/>
          <rect x="22" y="93" width="14" height="30" rx="5" fill={item.light}/>
          <rect x="44" y="93" width="14" height="30" rx="5" fill={item.light}/>
        </svg>
      )}

      {/* Label */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
        padding: '24px 14px 12px',
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
        }}>{item.label}</div>
      </div>

      {/* Red corner accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 3, height: 30, background: item.light,
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 30, height: 3, background: item.light,
      }} />

      {/* Hover play overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'opacity 0.3s',
        }}
      >
        <div style={{
          width: 44, height: 44,
          borderRadius: '50%',
          border: `2px solid ${item.light}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill={item.light}>
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BehindTheLens() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="behind" ref={ref} style={{
      background: 'var(--black)',
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dark bg texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(204,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 48, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
        >
          <div>
            <div className="red-line" />
            <h2 className="section-title">
              BEHIND <span style={{ color: 'var(--red)' }}>THE LENS</span>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: 10, maxWidth: 400 }}>
              A glimpse into the worlds we create — on location, on set, in the edit suite
            </p>
          </div>
          <a href="#" className="btn-outline">View Gallery</a>
        </motion.div>

        {/* Photo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'repeat(3, 180px)',
          gap: 8,
        }}>
          {gridItems.map((item, i) => (
            <BehindCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="repeat(6, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(6, 140px) !important;
          }
          div[style*="repeat(6, 1fr)"] > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
