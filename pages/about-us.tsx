import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import { GetStaticPropsContext } from "next";
import InnerBody from "../components/PageLayout/InnerBody";
import { useTranslations } from "next-intl";
import useGetUri from "../hooks/useGetUri";
import openGraphProps from "../types/openGraphProps";
import TopHeaderBanner from "../components/TopHeader";
import Image from "next/image";

const AboutUs = () => {
  const t = useTranslations("AboutUs");
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

  return (
    <PageLayout {...servicesProps}>
      <InnerBody>
        <TopHeaderBanner image="/images/about-us-topbanner.jpg" title={t("title")} subtitle={t("subtitle")} />
        <div className="my-10">
          <p>{t("description")}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">{t("mission.title")}</h2>
          <hr className="w-10 my-5" />
          <p>{t("mission.description")}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">{t("vision.title")}</h2>
          <hr className="w-10 my-5" />
          <p>{t("vision.description")}</p>
        </div>
        <hr />

        <div className="flex flex-col md:flex-row gap-5 pb-10">
          <Image src="/images/LogoLUZ.gif" alt="Logo LUZ" width={300} height={200} className="p-5 bg-gray-400 bg-opacity-20 rounded-xl card-hover space-y-5" />
          <div>
            <h2 className="text-xl mb-8">{t("inpeluz.title")}</h2>
            <p className="text-md">{t("inpeluz.description")}</p>
          </div>
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

export default AboutUs;
