import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import MaterialUiTheme from "../components/material-ui/material-ui-theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
        <Navbar></Navbar>
        <main className="z-10">{children}</main>
        <Footer></Footer>
    </ThemeProvider>
  );
}
