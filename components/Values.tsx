'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCamera, FiFilm, FiTv, FiMonitor, FiAward, FiVideo } from 'react-icons/fi';

const values = [
  {
    icon: <FiCamera size={32} />,
    title: 'Film Making',
    desc: 'We craft visually stunning narratives that push the boundaries of cinematic art. Every shot is a deliberate stroke of genius.',
    accent: '#cc0000',
  },
  {
    icon: <FiFilm size={32} />,
    title: 'Productions',
    desc: 'Full-scale production management from pre-production planning to post-production mastery — delivering flawless results every time.',
    accent: '#cc0000',
  },
  {
    icon: <FiMonitor size={32} />,
    title: 'Advertising & Design',
    desc: 'Brand stories that convert. We weave compelling visual identities that resonate with audiences and drive impactful results.',
    accent: '#cc0000',
  },
  {
    icon: <FiTv size={32} />,
    title: 'Digital Content',
    desc: 'Web series, short films, and digital campaigns crafted for the modern connected audience across all platforms.',
    accent: '#cc0000',
  },
  {
    icon: <FiAward size={32} />,
    title: 'Award Campaigns',
    desc: 'Festival-circuit strategy and awards campaign management to give your project the recognition it deserves.',
    accent: '#cc0000',
  },
  {
    icon: <FiVideo size={32} />,
    title: 'Live Production',
    desc: 'Real-time multi-camera event production, live streaming, and broadcast solutions for large-scale events.',
    accent: '#cc0000',
  },
];

export default function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="values" ref={ref} style={{
      background: 'var(--black-2)',
      position: 'relative',
      overflow: 'hidden',
      padding: '90px 0',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(204,0,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="red-line" style={{ margin: '0 auto 16px' }} />
          <h2 className="section-title">
            OUR <span style={{ color: 'var(--red)' }}>VALUES</span>
          </h2>
          <p style={{ color: 'var(--gray)', fontFamily: 'var(--font-body)', marginTop: 16, maxWidth: 500, margin: '16px auto 0' }}>
            The principles that guide every project, every frame, every story we tell
          </p>
        </motion.div>

        {/* Values Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              className="card-hover"
              style={{
                background: 'var(--black-3)',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '3px solid transparent',
                cursor: 'default',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              whileHover={{
                borderBottomColor: 'var(--red)',
                backgroundColor: 'var(--black-4)',
              }}
            >
              {/* Number */}
              <div style={{
                position: 'absolute', top: 16, right: 20,
                fontFamily: 'var(--font-display)', fontSize: '3.5rem',
                color: 'rgba(204,0,0,0.06)', lineHeight: 1,
                pointerEvents: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div style={{
                width: 60, height: 60,
                background: 'rgba(204,0,0,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
                color: 'var(--red)',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
              }}>
                {v.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                marginBottom: 12,
              }}>{v.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'var(--gray)',
                lineHeight: 1.7,
              }}>{v.desc}</p>

              {/* Bottom line accent */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: '0%', height: '3px',
                background: 'var(--red)',
                transition: 'width 0.4s ease',
              }} className="value-line" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
        div[style*="background: var(--black-3)"]:hover .value-line {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
}
