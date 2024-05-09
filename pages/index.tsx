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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BFG Solutions</title>
        <meta content="En BGF SOLUTIONS, C.A. nos dedicamos a la fabricación y distribución de productos químicos para la industria en general" name="description" />
        <meta property="og:url" content="bfg-solutions.com" />
        <meta property="og:description" content="En BGF SOLUTIONS, C.A. nos dedicamos a la fabricación y distribución de productos químicos para la industria en general" />
        <meta property="og:title" content="BFG Solutions" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
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

export default Home;
