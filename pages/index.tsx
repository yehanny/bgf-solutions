import React from "react";
import type { NextPage } from "next";
import PageLayout from "../components/PageLayout/PageLayout";
import { GetStaticPropsContext } from "next";
import Splash from "../components/Splash";
import Landing from "../components/Landing";
import Services from "../components/Services";
import { useTranslations } from "next-intl";
import openGraphProps from "../types/openGraphProps";

const Home: NextPage<openGraphProps> = () => {
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const t = useTranslations("Home");
  const homeProps = {
    children: null,
    props: {
      og_url: "bgfsolutions.com",
      og_description: t("description"),
      og_title: t("page_title"),
      og_image: `${hostUrl}/images/Landing.jpg`,
      og_site_name: process.env.APP_NAME ?? "",
      keywords: t("keywords"),
      author: process.env.APP_NAME ?? "",
      description: t("description"),
    },
  };
  return (
    <PageLayout {...homeProps}>
      <Splash />
      <Landing />
      <Services />
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

export default Home;
