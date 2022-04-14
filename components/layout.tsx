import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import MaterialUiTheme from "../styles/material-ui-theme";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={MaterialUiTheme}>
        <Navbar></Navbar>
        <main className="pt-16 z-10">{children}</main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}
