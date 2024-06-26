import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const TopHeaderBanner = ({ image, title, subtitle }: Props) => {
  return (
    <section className="relative h-[300px] rounded-2xl ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-white text-2xl md:text-5xl font-bold">{title}</h1>
        <hr className="w-[50px] mx-auto my-4 bg-white" />
        <p className="text-white text-sm md:text-xl">{subtitle}</p>
      </div>
      <img className="bg-blend-hard-light rounded-2xl opacity-50 h-[300px] object-cover w-full" src={image} alt={title} width={1920} height={300} />
      <div className="absolute bottom-0 left-0 right-0 top-0 rounded-2xl h-full w-full overflow-hidden bg-gradient-to-t from-green-950 to-blue-900 opacity-50"></div>
    </section>
  );
};

export default TopHeaderBanner;
