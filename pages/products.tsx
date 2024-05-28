import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import { GetStaticPropsContext } from "next";
import InnerBody from "../components/PageLayout/InnerBody";
import { useTranslations } from "next-intl";
import useGetUri from "../hooks/useGetUri";
import AccordionItem from "../components/AccordionItem";
import { Accordion } from "@szhsin/react-accordion";
import openGraphProps from "../types/openGraphProps";
import productListItemsProps from "../types/productListItemsProps";

const Products = () => {
  const t = useTranslations("Products");
  const productList: any[] = ["General", "Insulators for Oil and Gas Pipelines", "Refactory Line", "Other Lines"];
  const productListItems: productListItemsProps[] = [];
  const productProps: openGraphProps = {
    children: null,
    props: {
      og_url: useGetUri(),
      og_description: t("description") ?? "",
      og_title: t("title") ?? "",
      og_image: t("image") ?? "",
      og_site_name: process.env.APP_NAME ?? "",
      keywords: t("keywords") ?? "",
      author: process.env.APP_NAME ?? "",
      description: t("description") ?? "",
    },
  };

  // Create a list of General items
  const generalLength = parseInt(t("products.General.length"));
  for (let i = 1; i <= generalLength; i++) {
    productListItems.push({ group: "General", item: `item${i}` });
  }

  // Create a list of Insulators for Oil and Gas Pipelines items
  const insulatorsLength = parseInt(t("products.Insulators for Oil and Gas Pipelines.length"));
  for (let i = 1; i <= insulatorsLength; i++) {
    productListItems.push({ group: "Insulators for Oil and Gas Pipelines", item: `item${i}` });
  }

  // Create a list of Refactory Line
  const refactoryLength = parseInt(t("products.Refactory Line.length"));
  for (let i = 1; i <= refactoryLength; i++) {
    productListItems.push({ group: "Refactory Line", item: `item${i}` });
  }

  // Create a list of Other Lines
  const otherLength = parseInt(t("products.Other Lines.length"));
  for (let i = 1; i <= otherLength; i++) {
    productListItems.push({ group: "Other Lines", item: `item${i}` });
  }

  return (
    <PageLayout {...productProps}>
      <InnerBody>
        <h1>{t("title")}</h1>
        <Accordion>
          {productList.map((product, index) => (
            <AccordionItem key={index} header={product}>
              {productListItems.map((item, index) => (item.group == product ? <p key={index}>{t(`products.${product}.list.${item.item}`)}</p> : null))}
            </AccordionItem>
          ))}
        </Accordion>
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
