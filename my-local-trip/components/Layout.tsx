import Header from "./Header";
import PageLayout from "./PageLayout";
import React from "react";
import "tailwindcss/tailwind.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <PageLayout />
      <div>{children}</div>
    </>
  );
}
