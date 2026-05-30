'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiFilm, FiMonitor, FiDownload, FiLayers, FiStar } from 'react-icons/fi';

const services = [
  { icon: <FiFilm size={22} />, label: 'Content', count: '30+' },
  { icon: <FiStar size={22} />, label: 'Film Services', count: '10+' },
  { icon: <FiMonitor size={22} />, label: 'TV Downloads', count: '300+' },
  { icon: <FiLayers size={22} />, label: 'Diverse Content', count: '4+' },
  { icon: <FiDownload size={22} />, label: 'Digital Releases', count: '50+' },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{
      background: 'var(--red)',
      padding: '0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Diagonal stripe pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.05) 20px, rgba(0,0,0,0.05) 40px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${services.length}, 1fr)`,
          gap: 0,
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '18px 20px',
                borderRight: i < services.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                cursor: 'default',
                transition: 'background 0.3s',
              }}
              whileHover={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
            >
              <div style={{ color: 'rgba(255,255,255,0.9)', flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  color: 'white',
                  lineHeight: 1,
                }}>{s.count}</div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.75)',
                  marginTop: 2,
                }}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
