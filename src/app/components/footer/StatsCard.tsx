import type { ReactNode } from "react";

interface Props {
  number: number | string;
  children: ReactNode;
  description: string;
}

export default function StatsCard({number,children,description}:Props) {
  return (
    <div
            className="
            flex
            flex-col
            items-center
            justify-center
            px-3
            border-x
            border-dashed
            border-white/20
            
          "
          >
            <h3 className="text-red-600 text-2xl font-extrabold mb-1">
              {number}
            </h3>
            <p className="text-slate-200 text-sm mb-3">{description}</p>
            <div className="text-red-600">{children}</div>
            
          </div>
  )
}
