import React, { useContext } from 'react'
import { BsMoon, BsBrightnessHigh } from "react-icons/bs";
import { ThemeContext } from '../context/themeContext';
import { GridLayout } from './layout/GridLayout';

export const Menu = () => {
    
    const {activeThemeDark, isDarkTheme} = useContext(ThemeContext);
    
    

  return (
    <div className={`shadow-lg ${isDarkTheme ? "bg-bg-card" : "bg-bg-white"}`}>
        <GridLayout>
            <div className='col-span-12'>
                <div className='min-h-[80px] flex justify-between items-center'>
                    <h1 className={`text-logo font-extrabold ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>Where in the world?</h1>
                    <div className='flex items-center cursor-pointer' onClick={activeThemeDark}>
                        {isDarkTheme ? <BsBrightnessHigh className='fill-white h-[22px] mr-[9px]'/> : <BsMoon className='h-[22px] mr-[9px]'/>}
                        <h2 className={`text-mode font-semibold ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>{isDarkTheme ? 'Lite mode' : 'Dark mode'}</h2>
                    </div>
                </div>
            </div>
        </GridLayout>
    </div>
  )
}
