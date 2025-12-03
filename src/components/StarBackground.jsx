import { useEffect, useState } from "react";

export const StarBackground = ({ isDarkMode }) => {

  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleResize = () => {
      generateStars();
      generateMeteors();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 3500);
    const starColors = ["#ffffff", "#d8e4ff", "#bfcfff"];

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 0.4 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        animationDuration: Math.random() * 3 + 2
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const meteorColors = ["#ffffff", "#9ecaff", "#b594ff"];

    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        color: meteorColors[Math.floor(Math.random() * meteorColors.length)],
        delay: Math.random() * 8,
        animationDuration: Math.random() * 10 + 12,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* STARS ONLY IN DARK MODE */}
      {isDarkMode &&
        stars.map((star) => (
          <span
            key={star.id}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              backgroundColor: star.color,
              position: "absolute",
              borderRadius: "50%",
              animation: `twinkle ${star.animationDuration}s ease-in-out infinite`,
            }}
          />
        ))
      }

      {/* METEORS ONLY IN DARK MODE */}
      {isDarkMode &&
        meteors.map((meteor) => (
          <span
            key={meteor.id}
            className="meteor"
            style={{
              width: `${meteor.size * 80}px`,
              height: `${meteor.size * 1.4}px`,
              top: "-5vh",
              left: "-10vw",
            background: `linear-gradient(90deg,
            ${meteor.color} 0%,
            rgba(180,200,255,0.4) 40%,
            rgba(180,200,255,0) 100%)`,

              animation: `meteor ${meteor.animationDuration}s linear -${meteor.delay}s infinite`,
            }}
          />
        ))
      }
    </div>
  );
};
