import Link from "next/link";
import Image from "next/image";
import logo from "../assets/svg/logo-primary.svg";
import { Locale } from "../types";
import router from "next/router";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { fontSize } from "@mui/material/node_modules/@mui/system";
import { SwipeableDrawer } from "@material-ui/core";
import React from "react";

const Navbar = () => {
  const { t } = useTranslation("common");
  const [state, setState] = React.useState({ navbar: false });
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
    <div className="flex items-center justify-between flex-1 mobile:flex-col">
      <div className="flex items-center space-x-14 mobile:flex-col mobile:space-x-0 mobile:space-y-40">
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
        <a className="cursor-pointer text-xs" onClick={(_) => handleRoute("es")}>
          Español
        </a>
        <a className="cursor-pointer text-xs" onClick={(_) => handleRoute("en")}>
          Ingles
        </a>
      </div>
    </div>
  );
  return (
    <nav className="fixed top-0 left-0 right-0 w-full shadow bg-white z-20">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-5 mobile:justify-between">
        <div className="w-20 mr-20 h-full flex items-center">
          <Image src={logo} alt="Refy Logo"></Image>
        </div>

        <div className="flex w-full mobile:hidden">
          <LinksList></LinksList>
        </div>

        <div className="hidden mobile:flex">
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.8rem" }} onClick={toggleDrawer("navbar", true)}></FontAwesomeIcon>
        </div>

        <SwipeableDrawer
          anchor={"right"}
          open={state["navbar"]}
          onClose={toggleDrawer("navbar", false)}
          onOpen={toggleDrawer("navbar", true)}
        >
          <LinksList></LinksList>
        </SwipeableDrawer>
      </div>
    </nav>
  );
};

const handleRoute = (locale: Locale) => router.push(router.asPath, router.asPath, { locale: locale });

export default Navbar;
