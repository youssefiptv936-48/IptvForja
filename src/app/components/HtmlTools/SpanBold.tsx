import React from 'react'
interface Props {
    children:string;
}
export default function SpanBold({children} :Props) {
  return (
   <span className='text-red-600 bg-amber-400 '>{children}</span>
  )
}
