import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20 mt-24">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="flex justify-center text-gray-400">
          <div className="grid grid-cols-2 gap-8 mb-20 md:gap-28 md:grid-cols-4">
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">BGF | Solutions</li>
              <li>
                <a href="#aboutus">{t("about_us")}</a>
              </li>
              <li>
                <a href="#clients">{t("clients")}</a>
              </li>
              <li>
                <a href="#services">{t("services")}</a>
              </li>
              <li>
                <a href="#contacts">{t("contacts")}</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">{t("products")}</li>
              <li>
                <a href="#features">{t("general")}</a>
              </li>
              <li>
                <a href="#">{t("insulators")}</a>
              </li>
              <li>
                <a href="#">{t("refractory_line")}</a>
              </li>
              <li>
                <a href="#">{t("others")}</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">{t("contacts")}</li>
              <li>
                <a href="#">{t("contacts")}</a>
              </li>
              <li>
                <a href="#">{t("email")}</a>
              </li>
              <li>
                <a href="#">{t("phone")}</a>
              </li>
              <li>
                <a href="#">{t("address")}</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">{t("resources")}</li>
              <li>
                <a href="#">{t("quality_policies")}</a>
              </li>
              <li>
                <a href="#">{t("siaho")}</a>
              </li>
              <li>
                <a href="#">{t("brochure_download")}</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="-mt-8 mb-12 text-center text-gray-300">
          {t("rights")} &copy; 2024 |
          <a href="https://bgfsolutions.com/?utm_source=website" className="ml-2 mr-3 underline">
            bgfsolutions.com
          </a>
          | {t("language")} <LocaleSwitcher className="ml-5" />
        </p>
      </div>
    </footer>
  );
}
