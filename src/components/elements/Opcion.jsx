import React, { useContext, useState } from 'react'
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import AppContext from '../../context/appContext';
import { ThemeContext } from '../../context/themeContext';

export const Opcion = () => {

  const [select, setSelect] = useState(false)  
  const [option, setOption] = useState('Filter by Region')

  const {handleFilterRegion} = useContext(AppContext)
  const {isDarkTheme} = useContext(ThemeContext);

  function handleOnClick(){
    setSelect(!select)
  }

  function selectOption(name){
    setOption(name)
    handleFilterRegion(name.toLowerCase())
    setSelect(!select)

  }

  const ArrayOption = [
    {continent: "Africa"},
    {continent: "America"},
    {continent: "Asia"},
    {continent: "Europe"},
    {continent: "Oceania"},
  ]

  return (
    <div className='relative'>
        <div className={`flex justify-between items-center py-[18px] px-[24px] shadow-3xl rounded-[5px] cursor-pointer ${isDarkTheme ? "bg-bg-card" : "bg-bg-white"}`} onClick={handleOnClick}>
            <p className={`text-select font-light ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>{option}</p>
            {select ? <BsChevronUp className={`${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}/> : <BsChevronDown className={`${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}/>}
        </div>
        { select && <div className={`w-full mt-[4px] py-[17px] px-[24px] shadow-3xl rounded-[5px] absolute ${isDarkTheme ? "bg-bg-card" : "bg-bg-white"}`}>
          {ArrayOption.map((card, index)=>{
            return(
              <p className={`text-select font-light cursor-pointer mb-[9px] last:mb-0  ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`} onClick={()=>selectOption(card.continent) } key={index}>{card.continent}</p>
            )
          })}
        </div>}
    </div>
  )
}