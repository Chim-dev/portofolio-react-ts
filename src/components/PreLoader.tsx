import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const text = "CarteChia".split("");

  useEffect(() => {
    // total durasi animasi huruf (0.2s per huruf × jumlah huruf) + extra
    const showTime = text.length * 150 + 1000;

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, showTime);

    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, showTime + 1000); // fade out 1s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1
        className={`flex text-6xl font-extrabold tracking-wide transform transition-all duration-1000 ${
          fadeOut ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"
        }`}
      >
        {text.map((char, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-amber-400 via-gray-300 to-blue-400 bg-clip-text text-transparent animate-glow"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Preloader;
