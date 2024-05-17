import React, { ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import useGetUri from "../../hooks/useGetUri";

interface Props {
  children?: ReactNode;
  props: {
    og_url: string;
    og_description: string;
    og_title: string;
    og_image: string;
    og_site_name: string;
    keywords: string;
    author: string;
    description: string;
  };
}

const PageLayout: NextPage<Props> = ({ children, props }) => {
  const t = useTranslations("Home");
  return (
    <>
      <Head>
        <title>{t("page_title")}</title>
        <meta property="og:url" content={useGetUri()} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:title" content={t("page_title")} />
        <meta property="og:image" content={props?.og_image ?? "/Landing.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content={props?.keywords ?? ""} />
        <meta name="author" content="BGF Solutions" />
        <meta content={props?.description ?? ""} name="description" />
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
