import Link from "next/link";
import Image from "next/image";
import logo from "../assets/svg/logo-primary.svg";
import { Locale } from "../types";
import router from "next/router";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { SwipeableDrawer } from "@material-ui/core";
import React from "react";

const Navbar = () => {
  const { t } = useTranslation("common");
  const [state, setState] = React.useState({ navbar: false });
  const [clientWindowHeight, setClientWindowHeight] = React.useState("");

  const [padding, setPadding] = React.useState(30);
  const [boxShadow, setBoxShadow] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight((window.scrollY).toString());
  };

  React.useEffect(() => {
    let backgroundTransparacyVar = +clientWindowHeight / 100;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const toggleDrawer = (anchor: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const LinksList = () => (
    <div className="flex items-center justify-between flex-1">
      <div className="flex items-center space-x-14">
        <Link href="/">
          <a className="font-navbar">{t("navbar.home")}</a>
        </Link>
        <Link href="/pricing">
          <a className="font-navbar">{t("navbar.prices")}</a>
        </Link>
      </div>
      <div className="flex space-x-3">
        <a className="font-navbar cursor-pointer text-xs" onClick={(_) => handleRoute("es")}>
          {t("navbar.spanish")}
        </a>
        <a className="font-navbar cursor-pointer text-xs" onClick={(_) => handleRoute("en")}>
          {t("navbar.english")}
        </a>
      </div>
    </div>
  );

  const SideBarLinks = () => (
    <div className="w-40 h-full flex flex-col items-center justify-between py-24">
      <div className="flex w-full flex-col items-center space-y-10">
        <div className="h-px w-full bg-gray-100"></div>
        <Link href="/">
          <a className="font-navbar" onClick={toggleDrawer("navbar", false)}>{t("navbar.home")}</a>
        </Link>
        <div className="h-px w-full bg-gray-100"></div>
        <Link href="/pricing">
          <a className="font-navbar" onClick={toggleDrawer("navbar", false)}>{t("navbar.prices")}</a>
        </Link>
        <div className="h-px w-full bg-gray-100"></div>
      </div>
      <div className="flex w-full flex-col items-center space-y-10">
        <div className="h-px w-full bg-gray-100"></div>
        <a className="font-navbar cursor-pointer text-xs" onClick={(_) => handleRoute("es")}>
          {t("navbar.spanish")}
        </a>
        <div className="h-px w-full bg-gray-100"></div>
        <a className="font-navbar cursor-pointer text-xs" onClick={(_) => handleRoute("en")}>
          {t("navbar.english")}
        </a>
        <div className="h-px w-full bg-gray-100"></div>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white z-20" style={{
      padding: `${padding}px 0px`,
      boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
    }}>
      <div className="max-w-7xl mx-auto flex h-16 items-center px-5 mobile:justify-between">
        <div className="w-20 mr-20 h-full flex items-center">
          <Image src={logo} alt="Refy Logo"></Image>
        </div>

        <div className="flex w-full mobile:hidden">
          <LinksList></LinksList>
        </div>

        <div className="hidden mobile:flex">
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.3rem" }} onClick={toggleDrawer("navbar", true)}></FontAwesomeIcon>
        </div>

        <SwipeableDrawer
          anchor={"right"}
          open={state["navbar"]}
          onClose={toggleDrawer("navbar", false)}
          onOpen={toggleDrawer("navbar", true)}
        >
          <SideBarLinks></SideBarLinks>
        </SwipeableDrawer>
      </div>
    </nav>
  );
};

const handleRoute = (locale: Locale) => router.push(router.asPath, router.asPath, { locale: locale });

export default Navbar;
