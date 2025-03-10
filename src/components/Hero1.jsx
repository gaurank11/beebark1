import React, { useEffect, useState, useRef } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";

const Hero1 = () => {
  const canvasRef = useRef(null);
  const totalFrames = 64;
  const [images, setImages] = useState([]);

  const preloadImages = () => {
    const loadedImages = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/path/to/frames/frame_${String(i).padStart(4, "0")}.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  };

  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    const img = images[index];
    if (img && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    preloadImages();
  }, []);

  const [springRightImage, setSpringRightImage] = useSpring(() => ({
    transform: "translateX(-110px)", // Move initial right logo left
    opacity: 1,
    config: { tension: 200, friction: 25 },
    delay: 2000, // Start moving after 1 second
  }));
  

  const letters = "BeeBark".split("");
  const tagline = "Strongest Web, Built For Builders".split(" ");

  const trail = useTrail(letters.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    delay: 1500, // Letters appear after 1.5 seconds
    config: { tension: 200, friction: 20 },
  });

  const taglineTrail = useTrail(tagline.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    delay: 2000, // Tagline appears after 2 seconds
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    setTimeout(() => {
      setSpringRightImage({
        transform: "translateX(100vw)", // Moves out of the screen
        opacity: 0, // Fades out while moving
      });
    }, 1000);
  }, [setSpringRightImage]);

  return (
    <section className="w-full h-screen bg-white relative flex flex-col items-center justify-center">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      <div className="absolute inset-0 flex items-center justify-left md:mx-12 gap-8">
        {/* Left logo (Stays in place) */}
        <img
          src="bbark.png"
          alt="Left"
          className="w-[40%] max-w-[300px] z-10"
        />

        {/* Right logo (Moves out of screen) */}
        <animated.img
          src="bbark_1.png"
          alt="Right"
          className="w-[40%] max-w-[300px] z-10"
          style={springRightImage}
        />
      </div>

      {/* Animated Main Text "BeeBark" */}
      <div className="absolute top-[30%] flex gap-2 text-[7vw] sm:text-[8vw] md:text-[10vw] font-bold text-black z-20">
        {trail.map((props, index) => (
          <animated.span key={index} style={props}>
            {letters[index]}
          </animated.span>
        ))}
      </div>

      {/* Animated Tagline */}
      <div className="absolute top-[55%] flex gap-2 text-[3vw] sm:text-[3.5vw] md:text-[2.7vw] font-medium text-gray-600 z-20">

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
