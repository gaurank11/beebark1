import React, { useEffect, useRef } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";

const Hero1 = () => {
  const canvasRef = useRef(null);
  const letters = "BeeBark".split("");
  const tagline = "Strongest Web, Built For Builders".split(" ");

  // Left logo animation (initial state)
  const [leftLogoSpring, setLeftLogoSpring] = useSpring(() => ({
    transform: "translateX(0px)",
    opacity: 1,
    config: { tension: 100, friction: 20 },
  }));

  // Right logo animation (moves out slowly)
  const [rightLogoSpring, setRightLogoSpring] = useSpring(() => ({
    transform: "translateX(0px)",
    opacity: 1,
    config: { tension: 50, friction: 30 },
  }));

  // Letter animation (revealed gradually)
  const letterTrail = useTrail(letters.length, {
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(20px)" },
    delay: 3000,
    config: { tension: 100, friction: 25 },
  });

  // Tagline animation (revealed gradually)
  const taglineTrail = useTrail(tagline.length, {
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(20px)" },
    delay: 4000,
    config: { tension: 100, friction: 25 },
  });

  useEffect(() => {
    setTimeout(() => {
      setRightLogoSpring({
        transform: "translateX(1000px)",
 
      });
    }, 2000);

    setTimeout(() => {
      setLeftLogoSpring({
        transform: "translateX(-220px)",
      });
    }, 2000);
  }, [setRightLogoSpring, setLeftLogoSpring]);

  return (
    <section className="w-full h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Logos */}
      <div className="absolute flex items-center">
        {/* Left logo (shifts slightly left after 2 sec) */}
        <animated.img
          src="bbark.png"
          alt="Left Logo"
          className="relative z-10 w-[100%] max-w-[300px]"
          style={leftLogoSpring}
        />
        {/* Right logo (moves out slowly) */}
        <animated.img
          src="bbark.png"
          alt="Right Logo"
          className="absolute z-10 w-[100%] max-w-[300px]"
          style={rightLogoSpring}
        />
      </div>

      {/* Animated Text "BeeBark" */}
      <div className="absolute left-[45%] top-[30%] flex gap-2 text-[7vw] font-bold text-black z-20">
        {letterTrail.map((props, index) => (
          <animated.span key={index} style={props}>
            {letters[index]}
          </animated.span>
        ))}
      </div>

      {/* Animated Tagline */}
      <div className="absolute left-[45%] top-[50%] flex gap-2 text-[2vw] font-medium text-gray-600 z-20">
        {taglineTrail.map((props, index) => (
          <animated.span key={index} style={props}>
            {tagline[index]}
          </animated.span>
        ))}
      </div>
    </section>
  );
};

export default Hero1;
