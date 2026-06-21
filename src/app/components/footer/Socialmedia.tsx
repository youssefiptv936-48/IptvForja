import type { ReactNode } from "react";

interface Props {
  ariaLabel: string;
  children: ReactNode;
  href: string;
}

export default function SocialMedia({
  href,
  ariaLabel,
  children,
}: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      title={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        h-16
        w-16
        shrink-0
        items-center
        justify-center
        text-3xl
        text-slate-200
        transition-colors
        hover:text-red-600
      "
    >
      {children}
    </a>
  );
}