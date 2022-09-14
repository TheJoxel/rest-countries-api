import React from 'react'

export const GridLayout = ({children}) => {
  return (
    <div className='grid 
    sm:grid-cols-4
    sm:px-[20px] 
    md:grid-cols-8
    md:px-[40px] 
    lg:grid-cols-12 
    gap-[20px] 
    px-[80px]'>
        {children}
    </div>
  )
}
