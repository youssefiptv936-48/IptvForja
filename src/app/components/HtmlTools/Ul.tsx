import { ReactNode } from "react"
interface Props {
    children:ReactNode;
}

export default function Ul({children}:Props) {
  return (
   <ul className="text-slate-200  list-disc">{children}</ul>
  )
}
