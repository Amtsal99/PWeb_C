"use client";

import AOS from "aos";
import * as React from "react";

import ButtonLink from "../components/ButtonLink";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

export default function Pengurus() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="flex justify-center p-10 bg-blue-100 h-full min-h-screen">
      <div className="flex flex-col gap-4 items-center h-screen">
        <Hero />
        <Contact
          title="Asisten Sepuh FE"
          name="Ainun"
          href="https://wa.me/6287747447576"
          number="6287747447576"
        />
        <Contact
          title="Asisten Sepuh BE"
          name="Iftala"
          href="https://wa.me/6281573564240"
          number="6281573564240"
        />
        <Contact
          title="Kang Ngurus"
          name="Justin"
          href="https://wa.me/628116535858"
          number="628116535858"
        />
        <Contact
          title="Kang Catat 1"
          name="Amtsal"
          href="https://wa.me/6285333029778"
          number="6285333029778"
        />
        <Contact
          title="Kang Catat 2"
          name="Daniel"
          href="https://wa.me/6281281832612"
          number="6281281832612"
        />
        <Contact
          title="Kang Doa"
          name="Naufy"
          href="https://wa.me/6285349425454"
          number="6285349425454"
        />
        <ButtonLink
          href="/"
          text="Back to Home"
          className="mt-6 w-full px-24 max-md:px-6"
        />
      </div>
    </div>
  );
}
