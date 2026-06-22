import React from "react";

interface BorderRowProps {
  width?: string;
}

export default function Border_Row({ width }: BorderRowProps) {
  return (
    <div
      className={`
        h-px
        my-1
        ${width}
        bg-red-600
        [clip-path:polygon(8px_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,8px_100%,0_50%)]
      `}
    ></div>
  );
}