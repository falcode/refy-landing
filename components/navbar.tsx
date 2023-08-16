import Link from "next/link";
import Image from "next/image";
import logo from "../assets/svg/logo-primary.svg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { SwipeableDrawer } from "@material-ui/core";
import React from "react";

const Navbar = () => {
  const { t } = useTranslation("common");
  const [state, setState] = React.useState({ navbar: false });
  const [clientWindowHeight, setClientWindowHeight] = React.useState("");

  const [boxShadow, setBoxShadow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight((window.scrollY).toString());
  };

  React.useEffect(() => {
    setBoxShadow(+clientWindowHeight > 0);
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
        <Link href="/#product">
          <a className="font-navbar">{t("navbar.product")}</a>
        </Link>
        <Link href="/pricing">
          <a className="font-navbar">{t("navbar.prices")}</a>
        </Link>
        <Link href="https://refy.substack.com">
          <a className="font-navbar" target="_blank">{t("navbar.blog")}</a>
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link href="https://share-eu1.hsforms.com/1NRZaU4WaSm2oZo4-oEUVvwffi2u">
          <a className="font-navbar" target="_blank">{t("navbar.demo")}</a>
        </Link>
        <a href="https://app.refyapp.com/companies/new" target="_blank" rel="noreferrer">
          <button className="button-primary">{t("navbar.try")}</button>
        </a>
        <Link href="https://app.refyapp.com/users/login">
          <a className="font-navbar">{t("navbar.login")}</a>
        </Link>
      </div>
    </div>
  );

  const SideBarLinks = () => (
    <div className="w-80 h-full flex flex-col items-center justify-between py-10">
      <div className="flex w-full flex-col items-center space-y-5">
        <Link href="/">
          <a className="font-navbar" onClick={toggleDrawer("navbar", false)}>{t("navbar.home")}</a>
        </Link>
        <div className="h-px w-full bg-gray-100"></div>
        <Link href="/#product">
          <a className="font-navbar" onClick={toggleDrawer("navbar", false)}>{t("navbar.product")}</a>
        </Link>
        <div className="h-px w-full bg-gray-100"></div>
        <Link href="/pricing">
          <a className="font-navbar" onClick={toggleDrawer("navbar", false)}>{t("navbar.prices")}</a>
        </Link>
        <div className="h-px w-full bg-gray-100"></div>
        <Link href="https://refy.substack.com">
          <a className="font-navbar" target="_blank" onClick={toggleDrawer("navbar", false)}>{t("navbar.blog")}</a>
        </Link>
      </div>
      <div className="flex w-full flex-col items-center space-y-5">
        <Link href="https://share-eu1.hsforms.com/1NRZaU4WaSm2oZo4-oEUVvwffi2u">
          <a className="font-navbar" target="_blank">{t("navbar.demo")}</a>
        </Link>
        <div className="h-px w-full bg-gray-100"></div>
        <a href="https://app.refyapp.com/companies/new" target="_blank" rel="noreferrer">
          <button className="button-primary">{t("navbar.try")}</button>
        </a>
        <div className="h-px w-full bg-gray-100"></div>
        <Link href="https://app.refyapp.com/users/login">
          <a className="font-navbar">{t("navbar.login")}</a>
        </Link>
      </div>
    </div>
  );

  return (
    <nav className={"fixed top-0 left-0 right-0 w-full bg-white z-20" + (boxShadow ? " drop-shadow-sm" : "")}>
      <div className="max-w-7xl mx-auto flex h-20 items-center px-5 mobile:justify-between">
        <div className="w-20 mr-16 h-full flex items-center">
          <Link href="/">
            <Image className="cursor-pointer" src={logo} alt="Refy Logo"></Image>
          </Link>
        </div>

        <div className="flex w-full mobile:hidden">
          <LinksList></LinksList>
        </div>

        <div className="hidden cursor-pointer mobile:flex">
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


export default Navbar;
