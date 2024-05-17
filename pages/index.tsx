import React from "react";
import type { NextPage } from "next";
import PageLayout from "../components/PageLayout/PageLayout";
import { GetStaticPropsContext } from "next";
import Splash from "../components/Splash";
import Landing from "../components/Landing";
import Clients from "../components/Clients";
import Features from "../components/Features";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const t = useTranslations("Home");
  const homeProps = {
    og_url: "bgfsolutions.com",
    og_description: t("description"),
    og_title: t("page_title"),
    og_image: "/Landing.jpg",
    og_site_name: "BGF Solutions",
    keywords: t("keywords"),
    author: "BGF Solutions",
    description: t("description"),
  };
  return (
    <PageLayout props={homeProps}>
      <Splash />
      <Landing />
      <Clients />
      <Features />
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
