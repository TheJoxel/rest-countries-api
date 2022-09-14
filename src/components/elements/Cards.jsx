import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext';


export const Cards = ({name, population, region, capital, image, onclick}) => {

  const {isDarkTheme} = useContext(ThemeContext);



  return (
    <div className={`w-full h-[336px] rounded-[5px] cursor-pointer ${isDarkTheme ? "bg-bg-card" : "bg-bg-white"}`} onClick={onclick}>
        <img src={image} alt="" className='w-full h-[161px] rounded-t-lg'/>
        <h2 className={`text-titleCard font-extrabold mt-[24px] ml-[23px] ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>{name}</h2>
        <p className={`text-select font-semibold mt-[15px] ml-[24px] ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>Population:<span className='text-select font-light ml-[5px]'>{population}</span></p>
        <p className={`text-select font-semibold mt-[6px] ml-[24px] ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>Region:<span className='text-select font-light ml-[5px]'>{region}</span></p>
        <p className={`text-select font-semibold mt-[6px] ml-[24px] ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>Capital:<span className='text-select font-light ml-[5px]'>{capital}</span></p>
    </div>
  )
}
