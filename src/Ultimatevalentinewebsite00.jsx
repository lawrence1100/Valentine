import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Star, Crown, Flame, Zap } from 'lucide-react';

export default function UltimateValentineWebsite() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);
  const [cursorParticles, setCursorParticles] = useState([]);
  const [revealedCards, setRevealedCards] = useState(new Set());
  const [letterOpened, setLetterOpened] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (Math.random() > 0.9) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: 4 + Math.random() * 8
        };
        setCursorParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  const toggleCard = (index) => {
    setRevealedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const loveChapters = [
    {
      chapter: "I",
      title: "The Moment",
      subtitle: "When I First Saw You",
      text: "Time stopped. The world faded. And there you were—the most beautiful thing I'd ever seen. In that moment, I didn't know it yet, but my life had just changed forever.",
      icon: <Sparkles style={{ width: '64px', height: '64px' }} />,
      gradient: "linear-gradient(135deg, #d97706, #e11d48, #ec4899)"
    },
    {
      chapter: "II",
      title: "The Falling",
      subtitle: "Losing Myself in You",
      text: "Every conversation drew me deeper. Your laugh became my favorite song. Your smile, my greatest treasure. I fell, not slowly, but all at once—completely, hopelessly, beautifully.",
      icon: <Heart style={{ width: '64px', height: '64px' }} />,
      gradient: "linear-gradient(135deg, #ec4899, #e11d48, #dc2626)"
    },
    {
      chapter: "III",
      title: "The Knowing",
      subtitle: "You're The One",
      text: "Some truths hit you like lightning. Clear. Undeniable. You are my person. My soulmate. The one my heart has been searching for across time and space.",
      icon: <Zap style={{ width: '64px', height: '64px' }} />,
      gradient: "linear-gradient(135deg, #9333ea, #ec4899, #e11d48)"
    },
    {
      chapter: "IV",
      title: "The Forever",
      subtitle: "Our Infinite Story",
      text: "This is not a chapter that ends. This is the beginning of our forever. Every sunrise, every heartbeat, every moment—ours to share, forever and always.",
      icon: <Crown style={{ width: '64px', height: '64px' }} />,
      gradient: "linear-gradient(135deg, #e11d48, #d97706, #eab308)"
    }
  ];

  const reasons = [
    { emoji: "✨", reason: "Your smile lights up entire galaxies" },
    { emoji: "🌙", reason: "You make darkness beautiful" },
    { emoji: "🔥", reason: "Your passion ignites my soul" },
    { emoji: "💎", reason: "You're rare, precious, invaluable" },
    { emoji: "🌹", reason: "Your beauty is timeless" },
    { emoji: "⚡", reason: "You electrify my existence" },
    { emoji: "🎭", reason: "Every emotion with you is art" },
    { emoji: "🏆", reason: "You're my greatest achievement" },
    { emoji: "🌟", reason: "You outshine every star" }
  ];

  return (
    <div ref={containerRef} style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
          
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes letterFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes expandWidth {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes fallPetal {
            0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
          
          @keyframes floatParticle {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, -10px); }
            50% { transform: translate(-5px, -20px); }
            75% { transform: translate(-10px, -10px); }
          }
          
          @keyframes fadeOutParticle {
            to { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          }
          
          @keyframes rotateGradient {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes gradientFlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes slideInFromSide {
            from { opacity: 0; transform: translateX(-100px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* Custom cursor */}
      <div style={{
        ...styles.customCursor,
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
      }} />

      {/* Cursor trail particles */}
      {cursorParticles.map(particle => (
        <div
          key={particle.id}
          style={{
            ...styles.cursorParticle,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* Background particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            ...styles.bgParticle,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}>
          <div style={styles.heroBg1} />
          <div style={styles.heroBg2} />
        </div>

        <div style={{
          ...styles.heroContent,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}>
          <div style={styles.heroInner}>
            {/* Top ornament */}
            <div style={styles.topOrnament}>
              <div style={styles.ornamentLine} />
              <Star style={styles.ornamentStar} />
              <div style={styles.ornamentLine} />
            </div>

            {/* Main title */}
            <h1 style={styles.mainTitle}>
              <span style={{ ...styles.titleLetter, animationDelay: '0s' }}>L</span>
              <span style={{ ...styles.titleLetter, animationDelay: '0.1s' }}>O</span>
              <span style={{ ...styles.titleLetter, animationDelay: '0.2s' }}>V</span>
              <span style={{ ...styles.titleLetter, animationDelay: '0.3s' }}>E</span>
            </h1>

            {/* Subtitle */}
            <p style={styles.subtitle}>
              A MASTERPIECE IN MOTION
            </p>

            {/* Decorative hearts */}
            <div style={styles.decorativeHearts}>
              <Heart style={{ ...styles.heart, animationDelay: '0s' }} fill="currentColor" />
              <div style={styles.heartSymbol}>❦</div>
              <Heart style={{ ...styles.heart, animationDelay: '0.5s' }} fill="currentColor" />
            </div>

            {/* Bottom ornament */}
            <div style={styles.bottomOrnament}>
              <div style={styles.ornamentLine2} />
              <Sparkles style={styles.sparklesIcon} />
              <div style={styles.ornamentLine2} />
            </div>

            <p style={styles.scrollText}>
              SCROLL TO BEGIN OUR STORY
            </p>
          </div>
        </div>

        {/* Floating rose petals */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`petal-${i}`}
            style={{
              ...styles.rosePetal,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            🌹
          </div>
        ))}
      </section>

      {/* Love Chapters */}
      {loveChapters.map((chapter, index) => (
        <section 
          key={index}
          style={{
            ...styles.chapterSection,
            background: index % 2 === 0 
              ? 'linear-gradient(to bottom, #000000, #1a0a0f, #000000)'
              : 'linear-gradient(to bottom, #0f0a0a, #1a0505, #0f0a0a)',
          }}
        >
          <div style={{
            ...styles.chapterContent,
            opacity: Math.max(0, Math.min(1, (scrollY - (1000 + index * 800)) / 400)),
            transform: `translateY(${Math.max(0, 100 - (scrollY - (1000 + index * 800)) / 4)}px)`,
          }}>
            {/* Chapter number */}
            <div style={styles.chapterNumber}>
              <p style={{
                ...styles.chapterNumText,
                background: chapter.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {chapter.chapter}
              </p>
            </div>

            {/* Icon */}
            <div style={styles.chapterIconWrapper}>
              <div style={{ ...styles.chapterIcon, background: chapter.gradient }}>
                {React.cloneElement(chapter.icon, { style: { color: 'white' } })}
              </div>
            </div>

            {/* Title */}
            <h2 style={{
              ...styles.chapterTitle,
              background: chapter.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {chapter.title}
            </h2>

            {/* Subtitle */}
            <p style={styles.chapterSubtitle}>
              {chapter.subtitle}
            </p>

            {/* Divider */}
            <div style={styles.chapterDivider}>
              <div style={{ ...styles.dividerLine, background: chapter.gradient }} />
              <div style={{ ...styles.dividerDot, background: chapter.gradient }} />
              <div style={{ ...styles.dividerLine, background: chapter.gradient }} />
            </div>

            {/* Content */}
            <div style={{ ...styles.chapterCard, background: chapter.gradient }}>
              <div style={styles.chapterCardInner}>
                <p style={styles.chapterText}>
                  {chapter.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Interactive Reasons Grid */}
      <section style={styles.reasonsSection}>
        <div style={styles.reasonsContainer}>
          <h2 style={styles.reasonsTitle}>
            Infinite Reasons
          </h2>
          
          <p style={styles.reasonsSubtitle}>
            Why You're My Everything
          </p>

          <div style={styles.reasonsGrid}>
            {reasons.map((item, index) => (
              <div
                key={index}
                style={styles.reasonCard}
                onClick={() => toggleCard(index)}
              >
                <div style={{
                  ...styles.reasonCardInner,
                  transform: revealedCards.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}>
                  {/* Front */}
                  <div style={styles.reasonFront}>
                    <div style={styles.reasonEmoji}>{item.emoji}</div>
                  </div>

                  {/* Back */}
                  <div style={styles.reasonBack}>
                    <p style={styles.reasonText}>
                      {item.reason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={styles.tapInstruction}>
            TAP EACH CARD TO REVEAL
          </p>
        </div>
      </section>

      {/* Love Letter Section */}
      <section style={styles.letterSection}>
        <div style={styles.letterContainer}>
          <h2 style={styles.letterTitle}>
            A Letter For You
          </h2>

          <div 
            style={{
              ...styles.envelope,
              transform: letterOpened ? 'scale(1.05)' : 'scale(1)',
            }}
            onClick={() => setLetterOpened(!letterOpened)}
          >
            <div style={styles.envelopeInner}>
              <div style={{
                ...styles.letterContent,
                opacity: letterOpened ? 1 : 0,
                maxHeight: letterOpened ? '500px' : '0',
              }}>
                <div style={styles.letterPaper}>
                  <p style={styles.letterGreeting}>
                    My Dearest Love,
                  </p>
                  <p style={styles.letterBody}>
                    Words feel inadequate when trying to express the depth of what you mean to me. You are my sunrise and sunset, my calm and my storm, my everything.
                  </p>
                  <p style={styles.letterBody}>
                    This Valentine's Day, I promise you not just today, but every day—my heart, my devotion, my unwavering love.
                  </p>
                  <p style={styles.letterSignature}>
                    Forever Yours ♥
                  </p>
                </div>
              </div>

              {!letterOpened && (
                <div style={styles.envelopeClosed}>
                  <Heart style={styles.envelopeHeart} fill="currentColor" />
                  <p style={styles.envelopeText}>
                    CLICK TO OPEN
                  </p>
                </div>
              )}
            </div>

            {/* Wax seal */}
            <div style={styles.waxSeal}>
              <Heart style={styles.sealHeart} fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* Grand Finale */}
      <section style={styles.finaleSection}>
        <div style={styles.finaleBackground}>
          {[...Array(100)].map((_, i) => (
            <div
              key={`final-${i}`}
              style={{
                ...styles.finaleStar,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div style={styles.finaleContent}>
          <Crown style={styles.finaleCrown} />

          <h1 style={styles.finaleTitle}>
            FOREVER
          </h1>

          <div style={styles.finaleIcons}>
            <Flame style={{ ...styles.finaleFlame, animationDelay: '0s' }} />
            <Heart style={styles.finaleHeart} fill="currentColor" />
            <Flame style={{ ...styles.finaleFlame, animationDelay: '0.5s' }} />
          </div>

          <p style={styles.finaleSubtitle}>
            You & Me, Always & Eternally
          </p>

          <div style={styles.finaleWords}>
            {['HAPPY', 'VALENTINE\'S', 'DAY'].map((word, index) => (
              <div 
                key={word}
                style={{
                  ...styles.finaleWord,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {word}
              </div>
            ))}
          </div>

          <div style={styles.finaleHearts}>
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i}
                style={{
                  ...styles.finaleSmallHeart,
                  animationDelay: `${i * 0.1}s`,
                }}
                fill="currentColor"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    background: '#000',
    overflow: 'hidden',
  },
  customCursor: {
    position: 'fixed',
    width: '32px',
    height: '32px',
    border: '2px solid #fb7185',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 100,
    mixBlendMode: 'difference',
    transition: 'transform 0.1s',
    transform: 'translate(-50%, -50%)',
  },
  cursorParticle: {
    position: 'fixed',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #fb7185, #ec4899)',
    pointerEvents: 'none',
    zIndex: 50,
    animation: 'fadeOutParticle 1s ease-out forwards',
    transform: 'translate(-50%, -50%)',
  },
  bgParticle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(251, 113, 133, 0.2)',
    animation: 'floatParticle infinite ease-in-out',
  },
  heroSection: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroBackground: {
    position: 'absolute',
    inset: 0,
  },
  heroBg1: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #000 0%, #881337 50%, #000 100%)',
  },
  heroBg2: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(45deg, transparent 0%, rgba(136, 19, 55, 0.2) 50%, transparent 100%)',
    animation: 'rotateGradient 20s linear infinite',
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px',
  },
  heroInner: {
    textAlign: 'center',
    position: 'relative',
  },
  topOrnament: {
    marginBottom: '48px',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    alignItems: 'center',
  },
  ornamentLine: {
    width: '128px',
    height: '1px',
    background: 'linear-gradient(to right, transparent, #fb7185, transparent)',
    animation: 'expandWidth 2s ease-out',
  },
  ornamentStar: {
    width: '24px',
    height: '24px',
    color: '#fb7185',
    animation: 'spin 10s linear infinite',
  },
  mainTitle: {
    fontSize: 'clamp(8rem, 20vw, 20rem)',
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: '24px',
    letterSpacing: '-0.05em',
    fontFamily: "'Playfair Display', serif",
    background: 'linear-gradient(135deg, #fecaca 0%, #fda4af 25%, #fb7185 50%, #f43f5e 75%, #e11d48 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'fadeInScale 1.5s ease-out',
  },
  titleLetter: {
    display: 'inline-block',
    animation: 'letterFloat 3s ease-in-out infinite',
  },
  subtitle: {
    fontSize: 'clamp(1.5rem, 3vw, 3rem)',
    color: '#fda4af',
    marginBottom: '32px',
    letterSpacing: '0.3em',
    fontWeight: '300',
    fontFamily: "'Cormorant Garamond', serif",
    animation: 'fadeInUp 1.5s ease-out 0.5s backwards',
  },
  decorativeHearts: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '48px',
    animation: 'fadeInUp 1.5s ease-out 0.8s backwards',
  },
  heart: {
    width: '32px',
    height: '32px',
    color: '#fb7185',
    animation: 'pulse 2s ease-in-out infinite',
  },
  heartSymbol: {
    color: '#fb7185',
    fontSize: '2.5rem',
    fontFamily: "'Playfair Display', serif",
  },
  bottomOrnament: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    alignItems: 'center',
    animation: 'fadeInUp 1.5s ease-out 1.1s backwards',
  },
  ornamentLine2: {
    width: '96px',
    height: '1px',
    background: 'linear-gradient(to right, transparent, #fb7185, transparent)',
  },
  sparklesIcon: {
    width: '20px',
    height: '20px',
    color: '#fb7185',
    animation: 'pulse 2s ease-in-out infinite',
  },
  scrollText: {
    marginTop: '48px',
    color: 'rgba(253, 164, 175, 0.6)',
    fontSize: '0.875rem',
    letterSpacing: '0.2em',
    fontFamily: "'Cormorant Garamond', serif",
    animation: 'fadeInUp 1.5s ease-out 1.4s backwards',
  },
  rosePetal: {
    position: 'absolute',
    color: 'rgba(251, 113, 133, 0.3)',
    fontSize: '2.5rem',
    pointerEvents: 'none',
    animation: 'fallPetal linear infinite',
  },
  chapterSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 24px',
  },
  chapterContent: {
    maxWidth: '1280px',
    width: '100%',
    transition: 'all 0.3s ease-out',
  },
  chapterNumber: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  chapterNumText: {
    fontSize: 'clamp(8rem, 15vw, 12rem)',
    fontWeight: 'bold',
    opacity: 0.1,
    lineHeight: 1,
    fontFamily: "'Playfair Display', serif",
  },
  chapterIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px',
  },
  chapterIcon: {
    padding: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapterTitle: {
    fontSize: 'clamp(3rem, 8vw, 8rem)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    fontFamily: "'Playfair Display', serif",
  },
  chapterSubtitle: {
    fontSize: 'clamp(1.5rem, 3vw, 3rem)',
    color: '#fda4af',
    textAlign: 'center',
    marginBottom: '48px',
    letterSpacing: '0.05em',
    fontWeight: '300',
    fontFamily: "'Cormorant Garamond', serif",
  },
  chapterDivider: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '48px',
  },
  dividerLine: {
    width: '128px',
    height: '1px',
  },
  dividerDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  chapterCard: {
    padding: '1px',
    borderRadius: '24px',
    maxWidth: '896px',
    margin: '0 auto',
  },
  chapterCardInner: {
    background: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(40px)',
    padding: '48px',
    borderRadius: '24px',
  },
  chapterText: {
    fontSize: 'clamp(1.5rem, 2.5vw, 3rem)',
    color: '#fce7f3',
    textAlign: 'center',
    lineHeight: '1.6',
    fontWeight: '300',
    fontFamily: "'Cormorant Garamond', serif",
  },
  reasonsSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 24px',
    background: 'linear-gradient(135deg, #000 0%, #881337 50%, #000 100%)',
  },
  reasonsContainer: {
    maxWidth: '1536px',
    width: '100%',
  },
  reasonsTitle: {
    fontSize: 'clamp(3rem, 8vw, 8rem)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    fontFamily: "'Playfair Display', serif",
    background: 'linear-gradient(135deg, #fecaca, #fda4af, #fb7185)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  reasonsSubtitle: {
    fontSize: 'clamp(1.5rem, 2vw, 2rem)',
    color: '#fda4af',
    textAlign: 'center',
    marginBottom: '64px',
    letterSpacing: '0.05em',
    fontFamily: "'Cormorant Garamond', serif",
  },
  reasonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    marginBottom: '48px',
  },
  reasonCard: {
    cursor: 'pointer',
    perspective: '1000px',
    height: '320px',
  },
  reasonCardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.7s',
    transformStyle: 'preserve-3d',
  },
  reasonFront: {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    background: 'rgba(136, 19, 55, 0.4)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(251, 113, 133, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s',
  },
  reasonEmoji: {
    fontSize: '5rem',
  },
  reasonBack: {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    background: 'linear-gradient(135deg, #e11d48, #ec4899)',
    borderRadius: '16px',
    padding: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'rotateY(180deg)',
  },
  reasonText: {
    color: 'white',
    fontSize: '1.25rem',
    textAlign: 'center',
    lineHeight: '1.6',
    fontWeight: '300',
    fontFamily: "'Cormorant Garamond', serif",
  },
  tapInstruction: {
    textAlign: 'center',
    marginTop: '48px',
    color: 'rgba(253, 164, 175, 0.6)',
    fontSize: '0.875rem',
    letterSpacing: '0.2em',
    fontFamily: "'Cormorant Garamond', serif",
  },
  letterSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 24px',
    background: '#000',
  },
  letterContainer: {
    maxWidth: '1024px',
    width: '100%',
    textAlign: 'center',
  },
  letterTitle: {
    fontSize: 'clamp(3rem, 8vw, 8rem)',
    fontWeight: 'bold',
    marginBottom: '48px',
    letterSpacing: '-0.02em',
    fontFamily: "'Playfair Display', serif",
    background: 'linear-gradient(135deg, #fecaca, #fda4af, #fb7185)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  envelope: {
    position: 'relative',
    maxWidth: '672px',
    margin: '0 auto',
    cursor: 'pointer',
    transition: 'all 1s',
  },
  envelopeInner: {
    position: 'relative',
    background: 'linear-gradient(135deg, #881337, #9f1239)',
    padding: '48px',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    border: '4px solid rgba(251, 113, 133, 0.3)',
  },
  letterContent: {
    transition: 'all 1s',
    overflow: 'hidden',
  },
  letterPaper: {
    background: '#fce7f3',
    color: '#881337',
    padding: '32px',
    borderRadius: '8px',
  },
  letterGreeting: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    marginBottom: '24px',
    fontFamily: "'Cormorant Garamond', serif",
  },
  letterBody: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    marginBottom: '16px',
    fontFamily: "'Cormorant Garamond', serif",
  },
  letterSignature: {
    fontSize: '1.5rem',
    marginTop: '32px',
    fontFamily: "'Playfair Display', serif",
  },
  envelopeClosed: {
    textAlign: 'center',
  },
  envelopeHeart: {
    width: '96px',
    height: '96px',
    margin: '0 auto 24px',
    color: '#fecdd3',
    animation: 'pulse 2s ease-in-out infinite',
  },
  envelopeText: {
    color: '#fce7f3',
    fontSize: '1.25rem',
    letterSpacing: '0.2em',
    fontFamily: "'Cormorant Garamond', serif",
  },
  waxSeal: {
    position: 'absolute',
    bottom: '-24px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #d97706, #991b1b)',
    border: '4px solid #92400e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  },
  sealHeart: {
    width: '32px',
    height: '32px',
    color: '#fcd34d',
  },
  finaleSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: '#000',
  },
  finaleBackground: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #881337 0%, #9f1239 50%, #a855f7 100%)',
    opacity: 0.5,
  },
  finaleStar: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(251, 113, 133, 0.3)',
    animation: 'twinkle ease-in-out infinite',
  },
  finaleContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 24px',
  },
  finaleCrown: {
    width: '128px',
    height: '128px',
    margin: '0 auto 48px',
    color: '#fbbf24',
    animation: 'float 3s ease-in-out infinite',
  },
  finaleTitle: {
    fontSize: 'clamp(8rem, 20vw, 16rem)',
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: '32px',
    letterSpacing: '-0.05em',
    fontFamily: "'Playfair Display', serif",
    background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #f43f5e, #ec4899, #a855f7)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientFlow 5s ease infinite',
  },
  finaleIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginBottom: '48px',
  },
  finaleFlame: {
    width: '64px',
    height: '64px',
    color: '#f97316',
    animation: 'pulse 2s ease-in-out infinite',
  },
  finaleHeart: {
    width: '80px',
    height: '80px',
    color: '#e11d48',
    animation: 'heartbeat 1.5s ease-in-out infinite',
  },
  finaleSubtitle: {
    fontSize: 'clamp(2rem, 6vw, 6rem)',
    color: '#fecdd3',
    marginBottom: '64px',
    letterSpacing: '0.05em',
    fontWeight: '300',
    fontFamily: "'Cormorant Garamond', serif",
  },
  finaleWords: {
    marginBottom: '64px',
  },
  finaleWord: {
    fontSize: 'clamp(3rem, 8vw, 8rem)',
    fontWeight: 900,
    color: 'white',
    letterSpacing: '-0.05em',
    fontFamily: "'Playfair Display', serif",
    animation: 'slideInFromSide 1s ease-out backwards',
    textShadow: '0 0 40px rgba(251, 113, 133, 0.6)',
    marginBottom: '8px',
  },
  finaleHearts: {
    marginTop: '64px',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  finaleSmallHeart: {
    width: '32px',
    height: '32px',
    color: '#ec4899',
    animation: 'pulse 2s ease-in-out infinite',
  },
};