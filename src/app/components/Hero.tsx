import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-8" data-aos="fade-up">
        Pemrograman Web C
      </h1>
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={500}
          height={500}
          alt="Pemrograman Web C"
          className="w-1/2 flex mx-auto rounded-full"
          data-aos="zoom-in"
        />
      </Link>
    </div>
  );
}
