import Link from "next/link";


interface Props {
  children: string;
  href: string;
}

export default function LinkGray({ children, href }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-slate-300 font-light  hover:text-red-500 transition"
    >
     
    
     {children}
    </Link>
  );
}