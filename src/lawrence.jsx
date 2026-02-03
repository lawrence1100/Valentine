import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Star, Crown, Flame, Zap } from 'lucide-react';

export default function UltimateValentineWebsite() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);
  const [cursorParticles, setCursorParticles] = useState([]);
  const [revealedCards, setRevealedCards] = useState(new Set());
  const [letterOpened, setLetterOpened] = useState(false);
  const [playingAnimation, setPlayingAnimation] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create cursor trail particle
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
    // Floating particles
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
      icon: <Sparkles className="w-16 h-16" />,
      gradient: "from-amber-600 via-rose-600 to-pink-600"
    },
    {
      chapter: "II",
      title: "The Falling",
      subtitle: "Losing Myself in You",
      text: "Every conversation drew me deeper. Your laugh became my favorite song. Your smile, my greatest treasure. I fell, not slowly, but all at once—completely, hopelessly, beautifully.",
      icon: <Heart className="w-16 h-16" />,
      gradient: "from-pink-600 via-rose-600 to-red-600"
    },
    {
      chapter: "III",
      title: "The Knowing",
      subtitle: "You're The One",
      text: "Some truths hit you like lightning. Clear. Undeniable. You are my person. My soulmate. The one my heart has been searching for across time and space.",
      icon: <Zap className="w-16 h-16" />,
      gradient: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      chapter: "IV",
      title: "The Forever",
      subtitle: "Our Infinite Story",
      text: "This is not a chapter that ends. This is the beginning of our forever. Every sunrise, every heartbeat, every moment—ours to share, forever and always.",
      icon: <Crown className="w-16 h-16" />,
      gradient: "from-rose-600 via-amber-600 to-yellow-600"
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
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Custom cursor */}
      <div 
        className="fixed w-8 h-8 border-2 border-rose-400 rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%) scale(1)',
        }}
      />

      {/* Cursor trail particles */}
      {cursorParticles.map(particle => (
        <div
          key={particle.id}
          className="fixed rounded-full bg-gradient-to-br from-rose-400 to-pink-600 pointer-events-none z-50"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: 'fadeOutParticle 1s ease-out forwards',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Background particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-rose-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Hero Section - Luxury Editorial */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-rose-950 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-rose-900/20 to-transparent"
               style={{ animation: 'rotateGradient 20s linear infinite' }}></div>
        </div>

        {/* Parallax layers */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="text-center px-6 relative z-10">
            {/* Top ornament */}
            <div className="mb-12 flex justify-center gap-4">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"
                   style={{ animation: 'expandWidth 2s ease-out' }}></div>
              <Star className="w-6 h-6 text-rose-400 animate-spin-slow" />
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"
                   style={{ animation: 'expandWidth 2s ease-out' }}></div>
            </div>

            {/* Main title */}
            <h1 className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold leading-none mb-6 tracking-tighter relative"
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  background: 'linear-gradient(135deg, #fecaca 0%, #fda4af 25%, #fb7185 50%, #f43f5e 75%, #e11d48 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'none',
                  animation: 'fadeInScale 1.5s ease-out'
                }}>
              <span className="inline-block" style={{ animation: 'letterFloat 3s ease-in-out infinite' }}>L</span>
              <span className="inline-block" style={{ animation: 'letterFloat 3s ease-in-out infinite 0.1s' }}>O</span>
              <span className="inline-block" style={{ animation: 'letterFloat 3s ease-in-out infinite 0.2s' }}>V</span>
              <span className="inline-block" style={{ animation: 'letterFloat 3s ease-in-out infinite 0.3s' }}>E</span>
            </h1>

            {/* Subtitle */}
            <p className="text-3xl md:text-5xl text-rose-300 mb-8 tracking-[0.3em] font-light"
               style={{
                 fontFamily: "'Crimson Pro', serif",
                 animation: 'fadeInUp 1.5s ease-out 0.5s backwards'
               }}>
              A MASTERPIECE IN MOTION
            </p>

            {/* Decorative element */}
            <div className="flex justify-center items-center gap-6 mb-12"
                 style={{ animation: 'fadeInUp 1.5s ease-out 0.8s backwards' }}>
              <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
              <div className="text-rose-400 text-4xl" style={{ fontFamily: "'Bodoni Moda', serif" }}>❦</div>
              <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Bottom ornament */}
            <div className="flex justify-center gap-4"
                 style={{ animation: 'fadeInUp 1.5s ease-out 1.1s backwards' }}>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <Sparkles className="w-5 h-5 text-rose-400 animate-pulse" />
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </div>

            <p className="mt-12 text-rose-300/60 text-sm tracking-widest"
               style={{ 
                 fontFamily: "'Crimson Pro', serif",
                 animation: 'fadeInUp 1.5s ease-out 1.4s backwards' 
               }}>
              SCROLL TO BEGIN OUR STORY
            </p>
          </div>
        </div>

        {/* Floating rose petals effect */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute text-rose-400/30 text-4xl pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `fallPetal ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            🌹
          </div>
        ))}
      </section>

      {/* Love Chapters - Cinematic Storytelling */}
      {loveChapters.map((chapter, index) => (
        <section 
          key={index}
          className="min-h-screen relative flex items-center justify-center py-20 px-6"
          style={{
            background: index % 2 === 0 
              ? 'linear-gradient(to bottom, #000000, #1a0a0f, #000000)'
              : 'linear-gradient(to bottom, #0f0a0a, #1a0505, #0f0a0a)'
          }}
        >
          <div 
            className="max-w-5xl w-full"
            style={{
              opacity: Math.max(0, Math.min(1, (scrollY - (1000 + index * 800)) / 400)),
              transform: `translateY(${Math.max(0, 100 - (scrollY - (1000 + index * 800)) / 4)}px)`
            }}
          >
            {/* Chapter number */}
            <div className="text-center mb-8">
              <p className="text-9xl md:text-[12rem] font-bold opacity-10 leading-none"
                 style={{
                   fontFamily: "'Bodoni Moda', serif",
                   background: `linear-gradient(135deg, ${chapter.gradient})`,
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent'
                 }}>
                {chapter.chapter}
              </p>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className={`p-6 rounded-full bg-gradient-to-br ${chapter.gradient}`}>
                {React.cloneElement(chapter.icon, { className: 'w-16 h-16 text-white' })}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 tracking-tight"
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  background: `linear-gradient(135deg, ${chapter.gradient})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
              {chapter.title}
            </h2>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-rose-300 text-center mb-12 tracking-wider font-light"
               style={{ fontFamily: "'Crimson Pro', serif" }}>
              {chapter.subtitle}
            </p>

            {/* Divider */}
            <div className="flex justify-center gap-4 mb-12">
              <div className={`w-32 h-px bg-gradient-to-r from-transparent ${chapter.gradient} to-transparent`}></div>
              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${chapter.gradient}`}></div>
              <div className={`w-32 h-px bg-gradient-to-r from-transparent ${chapter.gradient} to-transparent`}></div>
            </div>

            {/* Content */}
            <div className={`bg-gradient-to-br ${chapter.gradient} p-1 rounded-3xl max-w-3xl mx-auto`}>
              <div className="bg-black/90 backdrop-blur-xl p-12 rounded-3xl">
                <p className="text-2xl md:text-3xl text-rose-100 text-center leading-relaxed font-light"
                   style={{ fontFamily: "'Crimson Pro', serif" }}>
                  {chapter.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Interactive Reasons Grid */}
      <section className="min-h-screen relative flex items-center justify-center py-20 px-6 bg-gradient-to-br from-black via-rose-950 to-black">
        <div className="max-w-6xl w-full">
          <h2 className="text-6xl md:text-8xl font-bold text-center mb-4 tracking-tight"
              style={{
                fontFamily: "'Bodoni Moda', serif",
                background: 'linear-gradient(135deg, #fecaca, #fda4af, #fb7185)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            Infinite Reasons
          </h2>
          
          <p className="text-2xl text-rose-300 text-center mb-16 tracking-wider"
             style={{ fontFamily: "'Crimson Pro', serif" }}>
            Why You're My Everything
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer perspective-1000"
                onClick={() => toggleCard(index)}
              >
                <div 
                  className={`relative h-64 transition-all duration-700 transform-style-3d ${
                    revealedCards.has(index) ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-rose-900/40 to-pink-900/40 backdrop-blur-md rounded-2xl border border-rose-400/30 flex items-center justify-center hover:scale-105 transition-transform"
                       style={{ backfaceVisibility: 'hidden' }}>
                    <div className="text-8xl">{item.emoji}</div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl p-8 flex items-center justify-center rotate-y-180"
                       style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <p className="text-white text-xl text-center leading-relaxed font-light"
                       style={{ fontFamily: "'Crimson Pro', serif" }}>
                      {item.reason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-rose-300/60 text-sm tracking-widest"
             style={{ fontFamily: "'Crimson Pro', serif" }}>
            TAP EACH CARD TO REVEAL
          </p>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="min-h-screen relative flex items-center justify-center py-20 px-6 bg-black">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tight"
              style={{
                fontFamily: "'Bodoni Moda', serif",
                background: 'linear-gradient(135deg, #fecaca, #fda4af, #fb7185)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            A Letter For You
          </h2>

          <div 
            className={`relative mx-auto max-w-2xl cursor-pointer transition-all duration-1000 ${
              letterOpened ? 'scale-105' : 'scale-100'
            }`}
            onClick={() => setLetterOpened(!letterOpened)}
          >
            {/* Envelope */}
            <div className="relative bg-gradient-to-br from-rose-800 to-pink-900 p-12 rounded-lg shadow-2xl border-4 border-rose-400/30">
              <div className={`transition-all duration-1000 ${letterOpened ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} overflow-hidden`}>
                <div className="bg-rose-50 text-rose-900 p-8 rounded-lg">
                  <p className="text-2xl leading-relaxed mb-6"
                     style={{ fontFamily: "'Crimson Pro', serif" }}>
                    My Dearest Love,
                  </p>
                  <p className="text-lg leading-relaxed mb-4"
                     style={{ fontFamily: "'Crimson Pro', serif" }}>
                    Words feel inadequate when trying to express the depth of what you mean to me. You are my sunrise and sunset, my calm and my storm, my everything.
                  </p>
                  <p className="text-lg leading-relaxed mb-4"
                     style={{ fontFamily: "'Crimson Pro', serif" }}>
                    This Valentine's Day, I promise you not just today, but every day—my heart, my devotion, my unwavering love.
                  </p>
                  <p className="text-2xl mt-8"
                     style={{ fontFamily: "'Bodoni Moda', serif" }}>
                    Forever Yours ♥
                  </p>
                </div>
              </div>

              {!letterOpened && (
                <div className="text-center">
                  <Heart className="w-24 h-24 mx-auto text-rose-200 fill-rose-200 mb-6 animate-pulse" />
                  <p className="text-rose-100 text-xl tracking-widest"
                     style={{ fontFamily: "'Crimson Pro', serif" }}>
                    CLICK TO OPEN
                  </p>
                </div>
              )}
            </div>

            {/* Wax seal */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-red-900 border-4 border-amber-800 flex items-center justify-center shadow-xl">
                <Heart className="w-8 h-8 text-amber-200 fill-amber-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Finale */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-pink-950 to-purple-950 opacity-50"></div>
          {[...Array(100)].map((_, i) => (
            <div
              key={`final-${i}`}
              className="absolute rounded-full bg-rose-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <Crown className="w-32 h-32 mx-auto mb-12 text-amber-400 animate-float" />

          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none mb-8 tracking-tighter"
              style={{
                fontFamily: "'Bodoni Moda', serif",
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #f43f5e, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientFlow 5s ease infinite'
              }}>
            FOREVER
          </h1>

          <div className="flex justify-center gap-6 mb-12">
            <Flame className="w-16 h-16 text-orange-500 animate-pulse" />
            <Heart className="w-20 h-20 text-rose-500 fill-rose-500 animate-heartbeat" />
            <Flame className="w-16 h-16 text-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <p className="text-4xl md:text-6xl text-rose-200 mb-16 tracking-wider font-light"
             style={{ fontFamily: "'Crimson Pro', serif" }}>
            You & Me, Always & Eternally
          </p>

          <div className="space-y-6">
            {['HAPPY', 'VALENTINE\'S', 'DAY'].map((word, index) => (
              <div 
                key={word}
                className="text-6xl md:text-8xl font-black text-white tracking-tighter"
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  animation: `slideInFromSide 1s ease-out ${index * 0.3}s backwards`,
                  textShadow: '0 0 40px rgba(251, 113, 133, 0.6)'
                }}
              >
                {word}
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center gap-4">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i}
                className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;0,900;1,400&family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,600;1,400&display=swap');
        
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
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}