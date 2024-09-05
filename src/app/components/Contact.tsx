type ContactProps = {
  name?: string;
  href: string;
  number?: string;
  title?: string;
};

export default function Contact({ name, href, number, title }: ContactProps) {
  return (
    <div className="text-center">
      <h1
        className="font-bold text-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {title}
      </h1>
      <h2 className="" data-aos="fade-up" data-aos-duration="1000">
        {name} -{" "}
        <a
          href={href}
          className="underline-offset-4 hover:underline hover:font-semibold transition-all duration-300"
        >
          {number}
        </a>
      </h2>
    </div>
  );
}
