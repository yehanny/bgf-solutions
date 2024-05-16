import React from "react";
import type { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import { GetStaticPropsContext } from "next";
import Splash from "../components/Splash";
import Landing from "../components/Landing";
import Clients from "../components/Clients";
import Features from "../components/Features";

const Home: NextPage = () => {
  return (
    <PageLayout>
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
