import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  text: string;
  className?: string;
};

export default function ButtonLink({ href, text, className }: ButtonLinkProps) {
  return (
    <Link href={href}>
      <div
        className={`bg-yellow-100 w-full text-center py-6 md:text-xl font-semibold hover:bg-yellow-400 rounded-3xl ${className}`}
      >
        {text}
      </div>
    </Link>
  );
}
