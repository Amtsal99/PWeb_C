import Image from "next/image";
import ButtonLink from "./components/ButtonLink";

export default function Home() {
  return (
    <main className="flex justify-center p-10">
      <div className="flex flex-col gap-4 items-center">
        <div>
          <h1 className="text-center text-4xl font-semibold mb-4">
            Pemrograman Web C
          </h1>
          <Image
            src="/images/logo.png"
            width={500}
            height={500}
            alt="Pemrograman Web C"
            className="w-1/2 flex mx-auto"
          ></Image>
        </div>
        <div className="flex flex-col gap-2">
          <ButtonLink href="/point" text="Poin Keaktifan" />
          <ButtonLink href="/github" text="Github" />
          <ButtonLink href="https://its.id/web" text="YouTube" />
        </div>
      </div>
    </main>
  );
}
