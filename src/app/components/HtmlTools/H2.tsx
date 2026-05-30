import { ReactNode } from "react";



interface Props {
  children: ReactNode;
}

export default function H2({ children }: Props) {
  return (
    <h2 className=" font-bold w-full leading-tight my-2 text-slate-200 overflow-hidden">
      
        {children}
      
    </h2>
  );
}