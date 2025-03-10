import React, { useRef, useState, useEffect } from "react";

const ScrollingText = () => {
  const paragraphRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const text = "Welcome to BeeBark ".repeat(100); // Long paragraph for smooth scrolling

  useEffect(() => {
    const handleScroll = () => {
      if (paragraphRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = paragraphRef.current;
        const progress = scrollTop / (scrollHeight - clientHeight);
        setScrollProgress(progress);
      }
    };

    const element = paragraphRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const words = text.split(" ");

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div
        ref={paragraphRef}
        className="w-[80%] md:w-[60%] h-[80vh] overflow-y-scroll p-6 text-2xl leading-relaxed scrollbar-hide"
      >
        {words.map((word, index) => {
          const opacity = Math.min(1, (index / words.length) * 2 + scrollProgress);
          return (
            <span
              key={index}
              style={{
                color: `rgba(0, 0, 0, ${opacity})`,
                transition: "color 0.3s ease-in-out",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;
