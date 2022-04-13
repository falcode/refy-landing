import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <main className="pt-16 z-10">{children}</main>
      <Footer></Footer>
    </>
  );
}
