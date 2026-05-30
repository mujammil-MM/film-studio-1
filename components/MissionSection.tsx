'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function MissionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="about" ref={ref} style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      {/* Red diagonal accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '45%', height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(204,0,0,0.04) 100%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ padding: '90px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          {/* Left - Director image */}
          <motion.div
            style={{ position: 'relative' }}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            {/* Image frame */}
            <div style={{
              position: 'relative',
              paddingBottom: '110%',
              overflow: 'hidden',
              background: 'var(--black-3)',
            }}>
              <motion.div style={{ y: imgY, position: 'absolute', inset: '-10%' }}>
                {/* Director illustration */}
                <svg viewBox="0 0 400 500" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <radialGradient id="dirGrad" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#2a1a1a"/>
                      <stop offset="100%" stopColor="#0a0a0a"/>
                    </radialGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#dirGrad)"/>
                  {/* Background scene - set lights */}
                  <circle cx="50" cy="80" r="30" fill="none" stroke="rgba(204,0,0,0.2)" strokeWidth="1"/>
                  <line x1="50" y1="80" x2="50" y2="200" stroke="rgba(150,150,150,0.2)" strokeWidth="4"/>
                  <circle cx="350" cy="60" r="25" fill="rgba(204,0,0,0.15)"/>
                  <line x1="350" y1="60" x2="350" y2="180" stroke="rgba(150,150,150,0.2)" strokeWidth="4"/>
                  {/* Person silhouette */}
                  <ellipse cx="200" cy="170" rx="45" ry="50" fill="#3a2a2a"/>
                  <ellipse cx="200" cy="330" rx="70" ry="100" fill="#2a1a1a"/>
                  <rect x="140" y="250" width="120" height="120" rx="10" fill="#2a1a1a"/>
                  {/* Clothes */}
                  <rect x="148" y="215" width="104" height="80" rx="5" fill="#1a0a0a"/>
                  {/* Arms */}
                  <ellipse cx="130" cy="270" rx="18" ry="45" fill="#3a2a2a" transform="rotate(-10 130 270)"/>
                  <ellipse cx="270" cy="265" rx="18" ry="45" fill="#3a2a2a" transform="rotate(10 270 265)"/>
                  {/* Face details */}
                  <circle cx="185" cy="160" r="5" fill="#5a4040"/>
                  <circle cx="215" cy="160" r="5" fill="#5a4040"/>
                  <path d="M188 178 Q200 185 212 178" fill="none" stroke="#5a4040" strokeWidth="2" strokeLinecap="round"/>
                  {/* Camera in hands */}
                  <rect x="155" y="280" width="90" height="55" rx="4" fill="#222" stroke="rgba(204,0,0,0.4)" strokeWidth="1.5"/>
                  <circle cx="200" cy="307" r="20" fill="#111" stroke="rgba(204,0,0,0.4)" strokeWidth="1.5"/>
                  <circle cx="200" cy="307" r="13" fill="#0a0a0a"/>
                  {/* Red lighting effect */}
                  <rect x="0" y="0" width="400" height="500" fill="none" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite"/>
                  </rect>
                  <radialGradient id="spotlight">
                    <stop offset="0%" stopColor="rgba(204,0,0,0.2)"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                  <ellipse cx="200" cy="200" rx="150" ry="180" fill="url(#spotlight)" opacity="0.5"/>
                  {/* Chair legs */}
                  <rect x="150" y="370" width="10" height="60" rx="3" fill="#333"/>
                  <rect x="240" y="370" width="10" height="60" rx="3" fill="#333"/>
                  <rect x="145" y="370" width="110" height="8" rx="3" fill="#3a3a3a"/>
                </svg>
              </motion.div>

              {/* Corner accents */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderTop: '2px solid var(--red)', borderLeft: '2px solid var(--red)' }}/>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 40, height: 40, borderBottom: '2px solid var(--red)', borderRight: '2px solid var(--red)' }}/>
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring' }}
              style={{
                position: 'absolute', bottom: -20, right: -20,
                background: 'var(--red)', padding: '20px 24px',
                textAlign: 'center',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'white', lineHeight: 1 }}>15+</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Years<br/>Experience</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="red-badge">Our Mission</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: 28,
            }}>
              IMAGINE,<br/>
              <span style={{ color: 'var(--red)' }}>INSPIRE</span> &amp;<br/>
              TRANSFORM
            </h2>

            <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
              At CineForge Studios, we believe in the transformative power of storytelling. Every frame we craft, every story we tell, is infused with passion, purpose, and an uncompromising commitment to excellence.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 36, fontSize: '0.95rem' }}>
              From the idea that sparks in a creative mind to the final cut that moves audiences — we walk every step of the journey with our collaborators, turning visions into cinematic realities.
            </p>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {['State-of-the-art production facilities', 'Award-winning creative team', 'Full-cycle film & digital production'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 8, height: 8, background: 'var(--red)', flexShrink: 0, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--gray-light)' }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="#productions" className="btn-red">
              Explore Our Work <FiArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
