import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  LinkText: string;
  icon?:ReactNode;
}

export default function ButtonRed({ href, LinkText ,icon }: Props) {
  return (
    <Link
      href={href}
      className="bg-red-600 text-slate-200 font-bold py-1.5 px-5 w-full mt-1 rounded-md  border-2 border-red-600 flex justify-center gap-2"
    >
       {icon && <span>{icon}</span>}
      <span>{LinkText}</span>
    </Link>
  );
}
