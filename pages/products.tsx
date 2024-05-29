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
import TopHeaderBanner from "../components/TopHeader";

const Products = () => {
  const t = useTranslations("Products");
  const productList: any[] = ["product1", "product2", "product3", "product4"];
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
  const generalLength = parseInt(t("products.product1.length"));
  for (let i = 1; i <= generalLength; i++) {
    productListItems.push({ group: "product1", item: `item${i}` });
  }

  // Create a list of Insulators for Oil and Gas Pipelines items
  const insulatorsLength = parseInt(t("products.product2.length"));
  for (let i = 1; i <= insulatorsLength; i++) {
    productListItems.push({ group: "product2", item: `item${i}` });
  }

  // Create a list of Refactory Line
  const refactoryLength = parseInt(t("products.product3.length"));
  for (let i = 1; i <= refactoryLength; i++) {
    productListItems.push({ group: "product3", item: `item${i}` });
  }

  // Create a list of Other Lines
  const otherLength = parseInt(t("products.product4.length"));
  for (let i = 1; i <= otherLength; i++) {
    productListItems.push({ group: "product4", item: `item${i}` });
  }

  return (
    <PageLayout {...productProps}>
      <InnerBody>
        <TopHeaderBanner image="/images/products-topbanner.jpg" title={t("title")} />
        <div className="my-10">
          <p>{t("description")}</p>
        </div>
        <hr />
        <Accordion>
          {productList.map((product, index) => (
            <AccordionItem key={index} header={t(`products.${product}.title`)}>
              <ul className="flex flex-wrap gap-4">
                {productListItems.map((item, index) =>
                  item.group == product ? (
                    <li className="bg-grey border-2 border-gray-300 px-4 py-2 rounded-lg" key={index}>
                      {t(`products.${product}.list.${item.item}`)}
                    </li>
                  ) : null
                )}
              </ul>
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
