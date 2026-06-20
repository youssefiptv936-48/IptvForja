import React from 'react'

export default function Border_col() {
  return (
   <div
  className="
    w-0.5
    h-30
    bg-red-600
    [clip-path:polygon(50%_0,100%_10px,100%_calc(100%-10px),50%_100%,0_calc(100%-10px),0_10px)]
  "
></div>
  )
}
