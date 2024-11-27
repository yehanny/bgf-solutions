import React from "react";

const Splash = () => {
  return (
    <div className="h-full leading-normal text-black">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-blend-lighten shadow-lg opacity-50 filter bg-left md:-bottom-full md:bg-center md:brightness-100"
        style={{
          backgroundImage: "url('/images/splash.webp')",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Splash;
