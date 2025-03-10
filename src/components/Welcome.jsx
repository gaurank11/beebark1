import React from "react";

const ScrollingHighlight = () => {
  return (
    <div className="relative w-full h-48 bg-[#221912] overflow-hidden flex justify-center items-center">
      <div className="absolute whitespace-nowrap flex animate-scroll">
        {Array(10)
          .fill("WELCOME TO THE FUTURE")
          .map((text, index) => (
            <span
              key={index}
              className={`text-2xl font-bold mx-4 ${
                index === 4 ? "text-white" : "text-white opacity-40"
              }`}
            >
              {text}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ScrollingHighlight;
