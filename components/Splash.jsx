import React from "react";

const Splash = () => {
  return (
    <div className="h-full leading-normal text-gray-600">
      <div
        className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover bg-blend-lighten shadow-lg -bottom-full opacity-50 filter md:bottom-0 md:bg-center md:brightness-100"
        style={{
          backgroundImage: "url('images/splash.jpg')",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Splash;
