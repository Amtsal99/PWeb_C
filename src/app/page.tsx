"use client";

import AOS from "aos";
import * as React from "react";

import ButtonLink from "./components/ButtonLink";
import Hero from "./components/Hero";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <main className="flex justify-center p-10 bg-blue-100 h-full min-h-screen">
      <div className="flex flex-col gap-4 items-center">
        <Hero />
        <div className="flex flex-col gap-2 w-full mt-6">
          <ButtonLink href="/point" text="Poin Keaktifan" />
          <ButtonLink href="/github" text="Github" />
          <ButtonLink href="https://its.id/web" text="YouTube" />
          <ButtonLink href="/pengurus" text="Pengurus Kelas" />
        </div>
      </div>
    </main>
  );
}
