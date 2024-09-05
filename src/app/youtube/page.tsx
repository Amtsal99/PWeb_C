import ButtonLink from "../components/ButtonLink";
import Contact from "../components/Contact";
import { FaYoutube } from "react-icons/fa";

export default function Youtube() {
  return (
    <div className="px-6 h-full min-h-screen flex items-center justify-center bg-blue-100">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold mb-10 flex justify-center items-center gap-3">
          <FaYoutube className="text-5xl text-red-600" /> YouTube
        </h1>
        <iframe
          width="420"
          height="240"
          src="https://www.youtube.com/embed/qEAxG48nPEs?si=MuWpTzcZmREnc6rX&autoplay=1&mute=1"
          className="mb-6  max-md:max-w-[330px]"
        />
        <Contact
          href="https://its.id/web"
          number="klik disini"
          name="Lihat Selengkapnya"
        />
        <ButtonLink
          href="/"
          text="Back to Home"
          className="mt-16 px-24 max-md:px-6"
        />
      </div>
    </div>
  );
}
