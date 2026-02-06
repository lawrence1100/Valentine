import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Star, Crown, Flame, X } from 'lucide-react';

export default function ValentineProposalWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);
  const [showProposal, setShowProposal] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showGallery, setShowGallery] = useState(false);
  const [letterOpened, setLetterOpened] = useState(false);
  const noButtonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Check if mouse is near NO button
      if (showProposal && noButtonRef.current) {
        const rect = noButtonRef.current.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - buttonCenterX, 2) +
          Math.pow(e.clientY - buttonCenterY, 2)
        );

        if (distance < 150) {
          const angle = Math.atan2(buttonCenterY - e.clientY, buttonCenterX - e.clientX);
          const moveDistance = 150;
          const newX = Math.cos(angle) * moveDistance;
          const newY = Math.sin(angle) * moveDistance;
          setNoButtonPos({ x: newX, y: newY });
        }
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showProposal]);

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

  const galleryPhotos = [
    // { id: 1, caption: "Sweet Hello", image: "/images/photo2.jpeg" },
    { id: 3, caption: "True Smile", image: "/images/photo3.jpeg" },
    { id: 4, caption: "Only Us", image: "/images/photo4.jpeg" },
    { id: 2, caption: "Perfect Day", image: "/images/photo5.jpeg" },
  ];

  if (showGallery) {
    return (
      <div style={styles.galleryContainer}>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Caveat:wght@400;600;700&family=Quicksand:wght@400;600;700&display=swap');
          `}
        </style>

        <div style={styles.galleryHeader}>
          <h1 style={styles.galleryTitle}>Look at this cutie 😭</h1>
        </div>

        <div style={styles.photoGrid}>
          {galleryPhotos.map((photo, index) => (
            <div
              key={photo.id}
              style={{
                ...styles.polaroid,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                transform: `rotate(${Math.random() * 6 - 3}deg)`
              }}
            >
              <div style={styles.photoFrame}>
                <img
                  src={photo.image}
                  alt={photo.caption}
                  style={styles.photo}
                />
              </div>
              <p style={styles.photoCaption}>{photo.caption}</p>
            </div>
          ))}
        </div>

        <div style={styles.galleryFooter}>
          <Heart style={styles.galleryHeart} fill="#e11d48" />
          <p style={styles.thanksText}>
            Thanks for choosing a beautiful life with me
          </p>
          <p style={styles.thanksSubtext}>
            I promise to make every day amazing ✨
          </p>
        </div>
      </div>
    );
  }

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
          
          @keyframes fallHeart {
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
          
          @keyframes rotateGradient {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
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
            <div style={styles.topOrnament}>
              <div style={styles.ornamentLine} />
              <Star style={styles.ornamentStar} />
              <div style={styles.ornamentLine} />
            </div>

            <p style={styles.subtitle}>
              {/* A STORY WRITTEN JUST FOR YOU */}
              I Didn’t Fall in Love…
            </p>

            <div style={styles.decorativeHearts}>
              <Heart style={{ ...styles.heart, animationDelay: '0s' }} fill="currentColor" />
              <div style={styles.heartSymbol}>❦</div>
              <Heart style={{ ...styles.heart, animationDelay: '0.5s' }} fill="currentColor" />
            </div>

            <div style={styles.bottomOrnament}>
              <div style={styles.ornamentLine2} />
              <Sparkles style={styles.sparklesIcon} />
              <div style={styles.ornamentLine2} />
            </div>
            {/* 
            <p style={styles.scrollText}>
              SCROLL TO READ OUR STORY
            </p> */}
            <p style={styles.scrollText}>
              I Walked Into It — With You, Janu.
            </p>
            <p style={styles.scrollText}>
              Scroll & don’t blink
            </p>
          </div>
        </div>

        {/* Floating hearts */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`heart-${i}`}
            style={{
              ...styles.floatingHeart,
              // left: `${Math.random() * 100}%`,
              left: `${(i * 12.5) + Math.random() * 10}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            💖
          </div>
        ))}
      </section>

      {/* Love Letter Section */}
      <section style={styles.letterSection}>
        <div style={styles.letterContainer}>
          <h2 style={styles.letterTitle}>A Letter For You</h2>

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
                    To my love,
                  </p>
                  <p style={styles.letterBody}>
                    I've tried writing this like ten times and keep deleting it because nothing sounds right.
                    But here's the truth - you changed my life. Simple as that.
                  </p>
                  <p style={styles.letterBody}>
                    All I want is to keep making you smile, to be there when you need me,
                    and to build this beautiful life together. One day at a time.
                    I love you. More than I can put into words.
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

            <div style={styles.waxSeal}>
              <Heart style={styles.sealHeart} fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Section with Proposal Button */}
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
            BE MINE?
          </h1>

          <div style={styles.finaleIcons}>
            <Flame style={{ ...styles.finaleFlame, animationDelay: '0s' }} />
            <Heart style={styles.finaleHeart} fill="currentColor" />
            <Flame style={{ ...styles.finaleFlame, animationDelay: '0.5s' }} />
          </div>

          <p style={styles.finaleSubtitle}>
            Will you be my Valentine forever?
          </p>

          <button
            onClick={() => setShowProposal(true)}
            style={styles.proposalButton}
          >
            💝 Click Here For A Special Question 💝
          </button>
        </div>
      </section>

      {/* Proposal Modal */}
      {showProposal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button
              onClick={() => setShowProposal(false)}
              style={styles.closeButton}
            >
              <X size={24} />
            </button>

            <div style={styles.proposalImage}>
              <img
                src="/images/photo1.png"
                alt="Will you be my Valentine?"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  borderRadius: '16px',
                  marginBottom: '24px'
                }}
              />

              <p style={styles.questionText}>
                Will you be my Valentine? 💕
              </p>
            </div>

            <div style={styles.buttonContainer}>
              <button
                onClick={() => setShowGallery(true)}
                style={styles.yesButton}
              >
                YES! 💖
              </button>

              <button
                ref={noButtonRef}
                style={{
                  ...styles.noButton,
                  transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                }}
              >
                No
              </button>
            </div>

            <p style={styles.hintText}>
              (Try clicking "No" 😏)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fff 0%, #fce7f3 50%, #fbcfe8 100%)',
    overflow: 'hidden',
  },
  bgParticle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(251, 113, 133, 0.3)',
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
    background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)',
  },
  heroBg2: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(45deg, transparent 0%, rgba(251, 207, 232, 0.4) 50%, transparent 100%)',
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
    background: 'linear-gradient(to right, transparent, #e11d48, transparent)',
    animation: 'expandWidth 2s ease-out',
  },
  ornamentStar: {
    width: '24px',
    height: '24px',
    color: '#e11d48',
    animation: 'spin 10s linear infinite',
  },
  subtitle: {
    fontSize: 'clamp(1.5rem, 3vw, 3rem)',
    color: '#be123c',
    marginBottom: '32px',
    letterSpacing: '0.3em',
    fontWeight: '600',
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
    color: '#e11d48',
    animation: 'pulse 2s ease-in-out infinite',
  },
  heartSymbol: {
    color: '#e11d48',
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
    background: 'linear-gradient(to right, transparent, #e11d48, transparent)',
  },
  sparklesIcon: {
    width: '20px',
    height: '20px',
    color: '#e11d48',
    animation: 'pulse 2s ease-in-out infinite',
  },
  scrollText: {
    marginTop: '48px',
    color: '#be123c',
    fontSize: '0.875rem',
    letterSpacing: '0.2em',
    fontFamily: "'Cormorant Garamond', serif",
    animation: 'fadeInUp 1.5s ease-out 1.4s backwards',
  },
  floatingHeart: {
    position: 'absolute',
    color: 'rgba(251, 113, 133, 0.6)',
    fontSize: '2.5rem',
    pointerEvents: 'none',
    animation: 'fallHeart linear infinite',
  },
  letterSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 24px',
    background: 'linear-gradient(to bottom, #fce7f3, #fbcfe8, #fce7f3)',
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
    background: 'linear-gradient(135deg, #e11d48, #ec4899, #f43f5e)',
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
    background: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
    padding: '20px 20px 60px 20px',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(225, 29, 72, 0.3)',
    border: '4px solid rgba(225, 29, 72, 0.3)',
  },
  letterContent: {
    transition: 'all 1s',
    overflow: 'hidden',
  },
  letterPaper: {
    background: '#fff',
    color: '#881337',
    padding: '32px',
    borderRadius: '8px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  letterGreeting: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    marginBottom: '24px',
    fontFamily: "'Cormorant Garamond', serif",
    color: '#be123c',
  },
  letterBody: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    marginBottom: '16px',
    fontFamily: "'Cormorant Garamond', serif",
    color: '#881337',
  },
  letterSignature: {
    fontSize: '1.5rem',
    marginTop: '32px',
    fontFamily: "'Playfair Display', serif",
    color: '#e11d48',
  },
  envelopeClosed: {
    textAlign: 'center',
  },
  envelopeHeart: {
    width: '96px',
    height: '96px',
    margin: '0 auto 24px',
    color: '#f43f5e',
    animation: 'pulse 2s ease-in-out infinite',
  },
  envelopeText: {
    color: '#be123c',
    fontSize: '1.25rem',
    letterSpacing: '0.2em',
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: '600',
  },
  waxSeal: {
    position: 'absolute',
    bottom: '-24px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #e11d48, #dc2626)',
    border: '4px solid #be123c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(225, 29, 72, 0.5)',
  },
  sealHeart: {
    width: '32px',
    height: '32px',
    color: '#fda4af',
  },
  finaleSection: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, #fce7f3, #fbcfe8, #fce7f3)',
  },
  finaleBackground: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)',
    opacity: 0.8,
  },
  finaleStar: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(225, 29, 72, 0.4)',
    animation: 'pulse ease-in-out infinite',
  },
  finaleContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 24px 45px',
  },
  finaleCrown: {
    width: '128px',
    height: '128px',
    margin: '0 auto 48px',
    color: '#f59e0b',
    animation: 'letterFloat 3s ease-in-out infinite',
  },
  finaleTitle: {
    fontSize: 'clamp(4rem, 15vw, 12rem)',
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: '32px',
    letterSpacing: '-0.05em',
    fontFamily: "'Playfair Display', serif",
    background: 'linear-gradient(135deg, #e11d48, #f43f5e, #ec4899)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
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
    fontSize: 'clamp(1.5rem, 4vw, 4rem)',
    color: '#be123c',
    marginBottom: '64px',
    letterSpacing: '0.05em',
    fontWeight: '600',
    fontFamily: "'Cormorant Garamond', serif",
  },
  proposalButton: {
    background: 'linear-gradient(135deg, #e11d48, #ec4899)',
    color: 'white',
    border: 'none',
    padding: '24px 48px',
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: "'Quicksand', sans-serif",
    boxShadow: '0 20px 40px rgba(225, 29, 72, 0.4)',
    transition: 'all 0.3s',
    animation: 'heartbeat 2s ease-in-out infinite',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '24px',
  },
  modalContent: {
    background: 'linear-gradient(135deg, #fff, #fce7f3)',
    borderRadius: '24px',
    padding: '48px',
    maxWidth: '600px',
    width: '100%',
    position: 'relative',
    border: '2px solid rgba(225, 29, 72, 0.3)',
    animation: 'fadeInScale 0.5s ease-out',
    boxShadow: '0 20px 60px rgba(225, 29, 72, 0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'transparent',
    border: 'none',
    color: '#e11d48',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    transition: 'all 0.3s',
  },
  proposalImage: {
    textAlign: 'center',
    marginBottom: '48px',
    height: '200'
  },
  questionText: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    color: '#be123c',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24px',
    position: 'relative',
    minHeight: '80px',
  },
  yesButton: {
    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
    color: 'white',
    border: 'none',
    padding: '20px 60px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: "'Quicksand', sans-serif",
    boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)',
    transition: 'all 0.3s',
  },
  noButton: {
    background: 'linear-gradient(135deg, #dc2626, #991b1b)',
    color: 'white',
    border: 'none',
    padding: '20px 60px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: "'Quicksand', sans-serif",
    boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4)',
    transition: 'all 0.2s ease-out',
    position: 'absolute',
  },
  hintText: {
    textAlign: 'center',
    color: '#be123c',
    fontSize: '1rem',
    fontStyle: 'italic',
    fontFamily: "'Cormorant Garamond', serif",
  },
  galleryContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fce7f3, #fbcfe8, #fce7f3)',
    padding: '40px 20px',
  },
  galleryHeader: {
    textAlign: 'center',
    marginBottom: '60px',
    paddingTop: '40px',
  },
  galleryTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontFamily: "'Caveat', cursive",
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    maxWidth: '1400px',
    margin: '0 auto 80px',
    padding: '0 20px',
  },
  polaroid: {
    background: 'white',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  photoFrame: {
    width: '100%',
    aspectRatio: '4/5',
    background: '#f5f5f5',
    marginBottom: '16px',
    overflow: 'hidden',
    borderRadius: '2px',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  photoCaption: {
    textAlign: 'center',
    fontFamily: "'Caveat', cursive",
    fontSize: '1.8rem',
    color: '#1a1a1a',
    fontWeight: '600',
  },
  galleryFooter: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  galleryHeart: {
    width: '80px',
    height: '80px',
    color: '#e11d48',
    margin: '0 auto 24px',
    animation: 'heartbeat 1.5s ease-in-out infinite',
  },
  thanksText: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontFamily: "'Caveat', cursive",
    color: '#1a1a1a',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  thanksSubtext: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    fontFamily: "'Quicksand', sans-serif",
    color: '#4a4a4a',
    fontWeight: '600',
  },
};