import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

const Clients = () => {
  const t = useTranslations("Clients");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    className: "center",
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const ourClients = [
    {
      id: 1,
      logo: "https://tecnoquim.com.ve/img/media/client-baker.png",
      alt: "Baker Hughes Logo",
    },
    {
      id: 2,
      logo: "https://tecnoquim.com.ve/img/media/client-cerveceria-regional.jpg",
      alt: "Cerveceria Regional Logo",
    },
    {
      id: 3,
      logo: "https://tecnoquim.com.ve/img/media/client-chevron.jpg",
      alt: "Chevron Logo",
    },
    {
      id: 4,
      logo: "https://tecnoquim.com.ve/img/media/client-eni.jpg",
      alt: "Grupo ENI Logo",
    },
    {
      id: 5,
      logo: "https://tecnoquim.com.ve/img/media/client-halliburton.png",
      alt: "Halliburton Logo",
    },
    {
      id: 6,
      logo: "https://tecnoquim.com.ve/img/media/client-mi_swaco.png",
      alt: "Mi Swaco Logo",
    },
  ];
  return (
    <section id="clients" className="bg-blue-100">
      <div className="space-y-6 text-center py-32">
        <h2 className="text-lg font-semibold tracking-wide text-center text-opacity-75 uppercase md:mx-10 text-gray-600">{t("title")}</h2>
        <div className="w-full h-auto md:mx-auto md:w-3/4 p-3 bg-white rounded-2xl border border-gray-300 md:bg-opacity-100 md:p-10">
          <div className="">
            <Slider {...settings}>
              {ourClients.map((client) => (
                <img key={client.id} className="" width={120} height={80} src={client.logo} alt={client.alt} fetchpriority="auto" />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
