import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import { GetStaticPropsContext } from "next";
import InnerBody from "../components/PageLayout/InnerBody";

const Products = () => {
  return (
    <PageLayout>
      <InnerBody>
        <h1>Product Page</h1>
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

export default Products;
