'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

const productions = [
  {
    title: 'Shadows of Eternity',
    genre: 'Drama',
    year: '2024',
    color: '#1a0a0a',
    accent: '#cc0000',
  },
  {
    title: 'The Last Canvas',
    genre: 'Thriller',
    year: '2024',
    color: '#0a0a1a',
    accent: '#4444cc',
  },
  {
    title: 'Pulse of the City',
    genre: 'Action',
    year: '2023',
    color: '#0a1a0a',
    accent: '#22aa44',
  },
  {
    title: 'Whispers in Red',
    genre: 'Mystery',
    year: '2023',
    color: '#1a0a0a',
    accent: '#cc4400',
  },
  {
    title: 'Zero Hour',
    genre: 'Sci-Fi',
    year: '2023',
    color: '#0a0f1a',
    accent: '#0088cc',
  },
  {
    title: 'The Golden Reel',
    genre: 'Documentary',
    year: '2022',
    color: '#1a1400',
    accent: '#d4af37',
  },
];

function ProductionCard({ item, index }: { item: typeof productions[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="card-hover"
      style={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        background: item.color,
        aspectRatio: '2/3',
        borderBottom: `3px solid ${item.accent}`,
      }}
    >
      {/* Gradient background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 30% 30%, ${item.accent}22, transparent 70%), linear-gradient(to bottom, ${item.color}, #000)`,
      }} />

      {/* Film frame decoration */}
      <div style={{
        position: 'absolute', top: 8, left: 8, right: 8, bottom: 8,
        border: `1px solid ${item.accent}44`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 16, left: 16, right: 16, bottom: 16,
        border: `1px solid ${item.accent}22`,
        pointerEvents: 'none',
      }} />

      {/* Film perforations */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: 14,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center',
        paddingTop: 10, paddingBottom: 10,
      }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ width: 6, height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 1 }} />
        ))}
      </div>

      {/* Genre badge */}
      <div style={{
        position: 'absolute', top: 16, right: 16,
        background: item.accent,
        color: 'white',
        fontFamily: 'var(--font-heading)',
        fontSize: '0.6rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        padding: '3px 10px',
      }}>
        {item.genre}
      </div>

      {/* Center visual */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 70, height: 70,
          border: `2px solid ${item.accent}66`,
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 50, height: 50,
            border: `1px solid ${item.accent}44`,
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FiPlay size={20} style={{ color: item.accent, marginLeft: 3 }} />
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
        padding: '40px 20px 16px 24px',
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--gray)', marginBottom: 4,
        }}>{item.year}</div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase',
          color: 'var(--white)', lineHeight: 1.1,
        }}>{item.title}</div>
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${item.accent}22, transparent)`,
          transition: 'opacity 0.3s',
        }}
      />
    </motion.div>
  );
}

export default function Productions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="productions" ref={ref} className="section-padding" style={{ background: 'var(--black-2)', position: 'relative' }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(204,0,0,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 50, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <div className="red-line" />
            <h2 className="section-title">
              OUR <span style={{ color: 'var(--red)' }}>PRODUCTIONS</span>
            </h2>
            <p style={{ color: 'var(--gray)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: 12, maxWidth: 420 }}>
              Handcrafted stories that push boundaries and move hearts
            </p>
          </div>
          <a href="#" className="btn-outline">View All Works</a>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 16,
        }}>
          {productions.map((item, i) => (
            <ProductionCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
