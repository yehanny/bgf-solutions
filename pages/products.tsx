import React from "react";
import PageLayout from "../components/PageLayout";
import { GetStaticPropsContext } from "next";

const Products = () => {
  return (
    <PageLayout>
      <h1>Product Page</h1>
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

export default Products;
