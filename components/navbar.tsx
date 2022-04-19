import Link from "next/link";
import Image from "next/image";
import logo from "../assets/svg/logo-primary.svg";
import { Locale } from "../types";
import router from "next/router";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("common");
  return (
    <nav className="fixed top-0 left-0 right-0 w-full shadow bg-white z-20">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-5">
        <div className="w-20 mr-20 h-full flex items-center">
          <Image src={logo} alt="Refy Logo"></Image>
        </div>

        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center space-x-14">
            <Link href="/">
              <a>{t("navbar.home")}</a>
            </Link>
            <Link href="/pricing">
              <a>{t("navbar.prices")}</a>
            </Link>
            <Link href="/integrations">
              <a>{t("navbar.integrations")}</a>
            </Link>
            <Link href="/successful-cases">
              <a>{t("navbar.successful-cases")}</a>
            </Link>
          </div>
          <div className="flex space-x-3">
            <a
              className="cursor-pointer text-xs"
              onClick={(_) => handleRoute("es")}
            >
              Español
            </a>
            <a
              className="cursor-pointer text-xs"
              onClick={(_) => handleRoute("en")}
            >
              Ingles
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const handleRoute = (locale: Locale) =>
  router.push(router.asPath, router.asPath, { locale: locale });

export default Navbar;
