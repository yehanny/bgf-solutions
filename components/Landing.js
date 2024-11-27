import { useTranslations } from "next-intl";
import Link from "next/link";
import Typing from "./Typing";

export default function Landing() {
  const t = useTranslations("Hero");
  return (
    <section className="min-h-[90vh] flex flex-col align-middle items-center justify-center">
      <div className="max-w-3xl mx-8 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-3xl font-semibold sm:text-5xl md:text-6xl text-gray-800">{t("title")}</h1>
            <h2 className="text-lg md:text-2xl md:mx-10 text-gray-600 py-10">
              {t("subtitle")} <Typing />
            </h2>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-2">
              <Link href="about-us" className="px-5 py-3 font-semibold text-gray-200 transition duration-500 ease-in-out shadow-lg hover:-translate-y-2 rounded-2xl md:text-xl md:px-8 md:py-3 bg-gradient-to-br from-blue-950 to-green-800 hover:bg-gradient-to-br hover:from-green-800 hover:to-blue-950">
                {t("cta")}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mb-0.5 h-7 w-7 hidden sm:inline">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <div className="pt-4 text-sm text-gray-600">{t("cta_description")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
