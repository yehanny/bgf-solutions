import React, { ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Splash from "./Splash";
import Header from "./Header";
import Landing from "./Landing";
import Features from "./Features";
import Clients from "./Clients";
import Demo from "./Demo";
import Pricing from "./Pricing";
import Testimonies from "./Testimonies";
import Action from "./Action";
import Footer from "./Footer";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

interface Props {
  children?: ReactNode;
}

const PageLayout: NextPage<Props> = ({ children }) => {
  const t = useTranslations("PageLayout");
  return (
    <>
      <Head>
        <title>{t("page_title")}</title>
        <meta content={t("description")} name="description" />
        <meta property="og:url" content="bgfsolutions.com" />
        <meta property="og:description" content={t("description")} />
        <meta property="og:title" content={t("page_title")} />
        <meta property="og:image" content={"/Landing.jpg"} />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

export default PageLayout;
