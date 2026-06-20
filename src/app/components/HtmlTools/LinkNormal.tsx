import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Props {
  children: string;
  href: string;
}

export default function LinkNormal({ children, href }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-slate-200  hover:text-red-500 transition"
    >
     
    <ChevronLeft size={18} className="text-red-600 font-medium" />
     {children}
    </Link>
  );
}