import { useTranslations } from "next-intl";
import Image from "next/image";
import Slider from "react-slick";

export default function Features() {
  const t = useTranslations("Services");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    className: "center",
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const features = [
    {
      title: t("services.service1"),
      alt: t("services.service1"),
      image: "https://tecnoquim.com.ve/img/media/services-rehab.jpg",
    },
    {
      title: t("services.service2"),
      alt: t("services.service2"),
      image: "https://tecnoquim.com.ve/img/media/services-water.jpg",
    },
    {
      title: t("services.service3"),
      alt: t("services.service3"),
      image: "https://tecnoquim.com.ve/img/media/services-heat-water.jpg",
    },
    {
      title: t("services.service4"),
      alt: t("services.service4"),
      image: "https://tecnoquim.com.ve/img/media/services-oil.jpg",
    },
    {
      title: t("services.service5"),
      alt: t("services.service5"),
      image: "https://tecnoquim.com.ve/img/media/endulzamiento-gas.jpg",
    },
  ];
  return (
    <section id="services" className="py-32 bg-gradient-to-t to-blue-950 from-green-800">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5 md:text-center">
              <h2 className="inline-block rounded-lg bg-green-800 bg-opacity-60 px-5 py-4 text-lg font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">{t("title")}</h2>
              <div className="text-3xl font-semibold text-gray-100 md:text-5xl">{t("subtitle")}</div>
              <p className="text-xl text-gray-200 md:text-2xl">{t("text")}</p>
            </div>
          </div>
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="p-5 bg-white bg-opacity-20 rounded-xl card-hover space-y-5 min-h-[250px] md:min-h-[280px] lg:min-h-[350px] min-w-[120px]">
                <img src={feature.image} alt={feature.alt} width={200} height={200} className="w-full object-cover rounded-lg transition-all ease-in-out" />
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-white">{feature.title}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
