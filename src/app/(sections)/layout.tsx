import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function layout({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}
