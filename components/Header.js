import { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { useContacForm } from "../hooks/useContactForm";

const Header = () => {
  const t = useTranslations("Header");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: t("about-us"),
      href: "/about-us",
    },
    {
      name: t("products"),
      href: "/products",
    },
    {
      name: t("services"),
      href: "/services",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50 pb-4 px-5 border-b-slate-300 border-b-[1px]">
      <div className="flex flex-col pt-4 mx-auto text-black roboto-regular max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between">
          <Link href="/" className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text md:text-gray-900">
            <img src="/images/bfg-solutions-logo.png" width={200} height={80} alt="BGF Solutions Logo" />
          </Link>
          <button className="p-3 bg-blue-950 rounded-full cursor-pointer bg-opacity-80 focus:outline-none md:hidden" type="button" aria-label="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className={"mt-10 flex-grow items-start md:flex lg:mt-0" + (navbarOpen ? " flex" : " hidden")}>
          <div className="flex-col text-xl w-full md:flex-grow md:pl-0">
            <ul className="flex flex-col flex-nowrap w-full md:flex-wrap md:flex-row md:items-center md:justify-end flex-grow gap-8 items-center md:gap-6 md:space-x-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-lg md:text-blue-950 hover:text-gray-300 md:hover:text-gray-700">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <LocaleSwitcher />
              </li>
              <li>
                <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export function toggleContactForm(e) {
  e.preventDefault();
  const { isOpen, setIsOpen } = useState(false);
  setIsOpen(!isOpen);
}

export default Header;
