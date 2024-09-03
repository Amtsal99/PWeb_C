type ButtonLinkProps = {
  href: string;
  text: string;
};

export default function ButtonLink({ href, text }: ButtonLinkProps) {
  return (
    <div className="bg-yellow-100 w-[150px] text-center py-2 hover:bg-yellow-400 rounded-lg ">
      <a href={href}>{text}</a>
    </div>
  );
}
