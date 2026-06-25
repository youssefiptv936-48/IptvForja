import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";



interface Props {
  children: string;
  href: string;
}

export default function LinkButton({ children, href }: Props) {
  return (
    <Link
      href={href}
      className=" flex w-full md:w-55 lg:w-60  items-center justify-around cursor-pointer text-slate-200 text-sm ml-2.5 lg:text-base  bg-neutral-900  py-2 pr-1 border-r-2  border-red-500 my-0.5    text-right   rounded-sm hover:text-red-600"
    >
     
    

     {children}
     <FaArrowLeftLong />
    </Link>
  );
}