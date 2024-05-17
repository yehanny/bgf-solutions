import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import { GetStaticPropsContext } from "next";
import InnerBody from "../components/PageLayout/InnerBody";
import { useTranslations } from "next-intl";
import useGetUri from "../hooks/useGetUri";

const Products = () => {
  const t = useTranslations("Products");
  const productProps = {
    og_url: useGetUri(),
    og_description: t("description"),
    og_title: t("title"),
    og_image: "/Landing.jpg",
    og_site_name: "BGF Solutions",
    keywords: t("keywords") ?? "",
    author: "BGF Solutions",
    description: t("description") ?? "",
  };
  return (
    <PageLayout props={productProps}>
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
