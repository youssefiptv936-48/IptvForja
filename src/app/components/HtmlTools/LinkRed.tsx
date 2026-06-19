import Link from "next/link";
interface Props {
    children:string;
    href:string;
}
export default function LinkRed({children, href} :Props) {
  return (
<Link href={href} className="text-red-600 text-2xl font-bold">{children}</Link>
  )
}
