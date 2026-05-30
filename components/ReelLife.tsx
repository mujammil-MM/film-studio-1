'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiPlay, FiChevronLeft, FiChevronRight, FiClock } from 'react-icons/fi';

const reels = [
  {
    title: 'Duma & Dumber',
    category: 'Web Series',
    duration: '8 Episodes',
    year: '2024',
    color: '#cc0000',
    bg: '#1a0808',
    desc: 'A wildly hilarious comedy series about two unlikely roommates navigating life in the city.',
  },
  {
    title: 'Biometric Bond',
    category: 'Short Film',
    duration: '42 min',
    year: '2024',
    color: '#0088cc',
    bg: '#080f1a',
    desc: 'A spy thriller set in a near-future world where biometric identity becomes the ultimate weapon.',
  },
  {
    title: 'The Kitchen Chronicles',
    category: 'Documentary',
    duration: '6 Episodes',
    year: '2023',
    color: '#cc8800',
    bg: '#1a1208',
    desc: 'An intimate look into the lives of chefs who craft extraordinary food in extraordinary circumstances.',
  },
  {
    title: 'Midnight Protocol',
    category: 'Thriller',
    duration: '1h 52min',
    year: '2023',
    color: '#8800cc',
    bg: '#120818',
    desc: 'A tense psychological thriller that blurs the lines between reality and paranoia.',
  },
  {
    title: 'Salt & Pepper',
    category: 'Drama',
    duration: '2h 05min',
    year: '2022',
    color: '#00cc88',
    bg: '#081a12',
    desc: 'Two generations of a family separated by ideology, reconnected by a shared passion for cooking.',
  },
];

function ReelCard({ reel, index }: { reel: typeof reels[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: reel.bg,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        flexShrink: 0,
        width: 280,
        borderBottom: `3px solid ${reel.color}`,
      }}
      className="card-hover"
    >
      {/* Thumbnail Area */}
      <div style={{ position: 'relative', paddingBottom: '56%', overflow: 'hidden' }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 30% 40%, ${reel.color}33, transparent 60%), linear-gradient(135deg, ${reel.bg}, #000)`,
        }} />

        {/* Decorative film frame lines */}
        <div style={{ position: 'absolute', inset: 8, border: `1px solid ${reel.color}33` }} />

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: reel.color,
          color: 'white',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '3px 10px',
          zIndex: 2,
        }}>{reel.category}</div>

        {/* Year */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          fontFamily: 'var(--font-heading)',
          fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.5)',
          zIndex: 2,
        }}>{reel.year}</div>

        {/* Play button */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 52, height: 52,
            borderRadius: '50%',
            background: hovered ? reel.color : 'rgba(255,255,255,0.1)',
            border: `2px solid ${hovered ? reel.color : 'rgba(255,255,255,0.3)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
            zIndex: 2,
          }}
        >
          <FiPlay size={18} style={{ color: 'white', marginLeft: 3 }} />
        </motion.div>

        {/* Widescreen letterbox bars */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 12, background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 12, background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
      </div>

      {/* Info */}
      <div style={{ padding: '16px 18px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <FiClock size={12} style={{ color: 'var(--gray)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--gray)' }}>{reel.duration}</span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--white)',
          marginBottom: 8,
          lineHeight: 1.1,
        }}>{reel.title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          color: 'var(--gray)',
          lineHeight: 1.6,
        }}>{reel.desc}</p>

        {/* Watch button */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.25 }}
          style={{ marginTop: 14 }}
        >
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: reel.color,
            cursor: 'pointer',
          }}>Watch Now →</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ReelLife() {
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [scrollPos, setScrollPos] = useState(0);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPos(containerRef.current.scrollLeft - 300);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPos(containerRef.current.scrollLeft + 300);
    }
  };

  return (
    <section id="reel" ref={ref} style={{
      background: 'var(--black)',
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Film strip top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 20,
        background: 'var(--black-3)',
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.04) 20px, rgba(255,255,255,0.04) 24px)',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: 40, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
        >
          <div>
            <div className="red-line" />
            <h2 className="section-title">
              REEL <span style={{ color: 'var(--red)' }}>LIFE</span>
            </h2>
            <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginTop: 10 }}>
              Our latest productions — streamed and celebrated worldwide
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={scrollLeft} style={{
              width: 44, height: 44, background: 'var(--black-3)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s',
            }} aria-label="Scroll left">
              <FiChevronLeft size={20} />
            </button>
            <button onClick={scrollRight} style={{
              width: 44, height: 44, background: 'var(--red)', border: 'none',
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s',
            }} aria-label="Scroll right">
              <FiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          gap: 20,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 8,
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
        {reels.map((reel, i) => (
          <ReelCard key={i} reel={reel} index={i} />
        ))}
      </div>
    </section>
  );
}
