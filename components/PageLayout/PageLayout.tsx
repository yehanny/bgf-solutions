import React, { ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import useGetUri from "../../hooks/useGetUri";
import openGraphProps from "../../types/openGraphProps";
import TopHeaderBanner from "../TopHeader";

const PageLayout: NextPage<openGraphProps> = ({ children, props }) => {
  const t = useTranslations("Home");
  const topImage = props?.top_image ?? "";
  const topTitle = props?.og_title ?? "";
  return (
    <>
      <Head>
        <title>{t("page_title")}</title>
        <meta property="og:url" content={useGetUri()} />
        <meta property="og:description" content={props.og_description} />
        <meta property="og:title" content={props?.og_title} />
        <meta property="og:image" content={props?.og_image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content={props?.keywords} />
        <meta name="author" content={process.env.APP_NAME} />
        <meta content={props?.description} name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}

export default PageLayout;
