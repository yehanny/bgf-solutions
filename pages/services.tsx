import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import { GetStaticPropsContext } from "next";
import InnerBody from "../components/PageLayout/InnerBody";
import { useTranslations } from "next-intl";
import useGetUri from "../hooks/useGetUri";
import openGraphProps from "../types/openGraphProps";
import TopHeaderBanner from "../components/TopHeader";
import Image from "next/image";

const Services = () => {
  const t = useTranslations("Services");
  const servicesProps: openGraphProps = {
    children: null,
    props: {
      og_url: useGetUri(),
      og_description: t("description") ?? "",
      og_title: t("title") ?? "",
      og_image: t("image") ?? "",
      og_site_name: process.env.APP_NAME ?? "",
      keywords: t("keywords") ?? "",
      author: process.env.APP_NAME ?? "",
      description: t("description") ?? "",
    },
  };

  const services = [
    {
      title: t("services.service1"),
      alt: t("services.service1"),
      image: "/images/drilling.jpg",
    },
    {
      title: t("services.service2"),
      alt: t("services.service2"),
      image: "/images/water-treatment.jpg",
    },
    {
      title: t("services.service3"),
      alt: t("services.service3"),
      image: "/images/boiler-treatment.jpg",
    },
    {
      title: t("services.service4"),
      alt: t("services.service4"),
      image: "/images/crude-oil-treatment.jpg",
    },
    {
      title: t("services.service5"),
      alt: t("services.service5"),
      image: "/images/gas-sweetening.jpg",
    },
  ];

  return (
    <PageLayout {...servicesProps}>
      <InnerBody>
        <TopHeaderBanner image="/images/services-topbanner.jpg" title={t("title")} subtitle={t("subtitle")} />
        <div className="my-10">
          <p>{t("text")}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          {services.map((feature, index) => (
            <div key={index} className="p-5 bg-gray-400 bg-opacity-20 rounded-xl card-hover space-y-5 w-full md:w-[49%]">
              <img src={feature.image} alt={feature.alt} width={400} height={300} className="w-full object-cover rounded-lg transition-all ease-in-out" />
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-700">{feature.title}</h3>
            </div>
          ))}
        </div>
        <hr />
        <h2 className="text-xl">{t("mixin_plant.title")}</h2>
        <p className="text-md">{t("mixin_plant.description")}</p>
        <div className="flex flex-wrap justify-between gap-5">
          <Image src="/images/mixin-plant.jpg" alt="Mixin Plant" width={400} height={300} className="p-5 bg-gray-400 bg-opacity-20 rounded-xl card-hover space-y-5 w-full md:w-[49%]" />
          <Image src="/images/mixin-plant2.jpg" alt="Mixin Plant" width={400} height={300} className="p-5 bg-gray-400 bg-opacity-20 rounded-xl card-hover space-y-5 w-full h-full md:w-[49%]" />
        </div>
      </InnerBody>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

export default Services;
