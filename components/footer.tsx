import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import {es, en} from "../assets/svg"
import router from "next/router";
import Container from "../layout/container";
import { Locale } from "../types";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <footer className="w-full h-48 bg-white flex items-center justify-center ring-1 ring-gray-900 ring-opacity-5">
        <Container bgColor="white" classes="flex items-center justify-evenly">
          <p className="text-gray-400">{t('footer.title')}</p>
          <Link href="/terms">
            <a className="text-gray-400 underline">{t('footer.terms')}</a>
          </Link>
          <Link href="/privacy">
            <a className="text-gray-400 underline">{t('footer.privacy')}</a>
          </Link>
          <Link href="/cookies">
            <a className="text-gray-400 underline">{t('footer.cookies')}</a>
          </Link>
          <div className="flex w-20 justify-between">
            <div className="flex items-center w-6 cursor-pointer" onClick={(_) => handleRoute("en")}>
              <Image src={en} alt="English"></Image>
            </div>
            <div className="flex items-center w-6 cursor-pointer" onClick={(_) => handleRoute("es")}>
              <Image src={es} alt="Español"></Image>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
const handleRoute = (locale: Locale) => router.push(router.asPath, router.asPath, { locale: locale });

export default Footer
