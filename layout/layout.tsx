import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ThemeProvider } from "@material-ui/core/styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <main className="z-10">{children}</main>
      <Footer></Footer>
    </>
  );
}
