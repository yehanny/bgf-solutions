import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Clients from "../components/Clients";
import Demo from "../components/Demo";
import Pricing from "../components/Pricing";
import Testimonies from "../components/Testimonies";
import Action from "../components/Action";
import Footer from "../components/Footer";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const t = useTranslations("PageLayout");
  return (
    <>
      <Head>
        <title>{t("page_title")}</title>
        <meta content={t("description")} name="description" />
        <meta property="og:url" content="bgfsolutions.com" />
        <meta property="og:description" content={t("description")} />
        <meta property="og:title" content={t("page_title")} />
        <meta property="og:image" content={t("/Landing.jpg")} />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover bg-blend-lighten shadow-lg -bottom-full opacity-50 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpg')",
            zIndex: -1,
          }}
        />
        <Header />
        <Landing />
        <Clients />
        <Features />
        <Footer />
      </div>
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

export default Home;
