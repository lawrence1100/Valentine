import { useEffect, useRef } from "react";

function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play().catch(() => {
        // Autoplay blocked – user interaction required
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}

export default BackgroundMusic;
