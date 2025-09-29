import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/Imaginarium Theater.mp3");
    audio.loop = true;
    audio.volume = 1;
    audio.muted = false;
    audioRef.current = audio;

    setIsMuted(audio.muted); // sync state dengan kondisi audio

    audio.play().catch((err) => {
      console.warn("Autoplay blocked, forcing muted:", err);
      audio.muted = true;
      setIsMuted(audio.muted); // <--- sync ulang state biar UI langsung mute
      audio.play().catch((e) =>
        console.warn("Muted autoplay also failed:", e)
      );
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between relative z-20">
      <div className="logo">
        <h1 className="text-4xl bg-clip-text text-transparent font-extrabold bg-gradient-to-b from-amber-400 via-gray-300 to-blue-400">
          CarteChia
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-5 gap-4 fixed left-1/2
    -translate-x-1/2 md:-translate-x-0 md:static p-6 rounded-2xl

    backdrop-blur-md bg-gradient-to-r from-white/10 via-purple-200/20 to-blue-200/10
    border border-white/30 shadow-2xl

    md:[background-image:none] md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none

    transition-all duration-500 ease-out md:transition-none md:opacity-100 z-50
    ${
      active
        ? "top-0 opacity-100 translate-y-0"
        : "opacity-0 -top-10 -translate-y-4"
    }`}
        style={{
          background: active
            ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(230,230,250,0.2) 30%, rgba(173,216,230,0.15) 70%, rgba(255,255,255,0.05) 100%)"
            : undefined,
        }}
      >
        <li>
          <a
            href=""
            className="sm:text-lg text-base font-medium text-white drop-shadow-lg hover:text-blue-200 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="sm:text-lg text-base font-medium text-white drop-shadow-lg hover:text-blue-200 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Chim-dev"
            className="sm:text-lg text-base font-medium text-white drop-shadow-lg hover:text-blue-200 transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Chim-dev"
            className="sm:text-lg text-base font-medium text-white drop-shadow-lg hover:text-blue-200 transition-colors duration-300"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href=""
            className="sm:text-lg text-base font-medium text-white drop-shadow-lg hover:text-blue-200 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
        <li>
          <button onClick={toggleAudio}>
            {isMuted ? (
              <i className="ri-volume-mute-line ri-xl sm:text-lg text-base font-medium text-white drop-shadow-lg hover:text-blue-200 transition-colors duration-300"></i>
            ) : (
              <i className="ri-volume-up-line ri-xl sm:text-lg text-base font-medium text-white drop-shadow-lg hover:text-blue-200 transition-colors duration-300"></i>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
