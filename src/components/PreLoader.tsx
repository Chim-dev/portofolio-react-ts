import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const text = "CarteChia".split("");

  useEffect(() => {
    const showTime = text.length * 100 + 1000;

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, showTime);

    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, showTime + 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 overflow-hidden h-screen ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1
        className={`flex text-6xl font-extrabold tracking-wide transform transition-all duration-1000 ${
          fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {text.map((char, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-amber-400 via-gray-300 to-blue-400 bg-clip-text text-transparent animate-wave"
            style={{
              animationDelay: `${index * 0.1}s`,
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