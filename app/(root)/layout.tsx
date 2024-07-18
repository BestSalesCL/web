"use client";
import React from "react";
import { Navbar } from "../../components/shared/navbar/Navbar";
import { Footer } from "../../components/shared/footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col items-center justify-start bg-background_color">
      <Navbar />
      <section className="flex min-h-screen w-screen flex-1 flex-col pt-[72px]">
        <div className="mx-auto w-full">{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
