import { ReactNode } from "react";



interface Props {
  children: ReactNode;
}

export default function H2({ children }: Props) {
  return (
    <h2 className=" font-bold text-2xl   my-2 text-slate-200 ">
      
        {children}
      
    </h2>
  );
}