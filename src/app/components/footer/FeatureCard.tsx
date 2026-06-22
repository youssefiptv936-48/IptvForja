import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div
      
      className="
        w-full
        rounded-xl
        border border-red-600/50
        bg-black
        p-5
        flex
        items-center
        gap-4
        shadow-[inset_0_0_35px_#ff000020]
        min-h-24
      "
    >
      {/* Icon */}
     

      {/* Text */}
      <div className="flex flex-col text-right w-[80%]">
        <h3 className="text-white text-lg font-bold ">
          {title}
        </h3>

        <p className="text-slate-300 text-sm leading-7">
          {description}
        </p>
      </div>
       <div
        className="
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          border border-red-600/40
          text-red-500
          shadow-[0_0_25px_#ff000080,inset_0_0_20px_#ff000040]
          shrink-0
          text-4xl 
        
          
        "
      >
        {icon}
      </div>
    </div>
  );
}