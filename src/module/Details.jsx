import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GridLayout } from '../components/layout/GridLayout'
import AppContext from '../context/appContext'
import { BsArrowLeft } from "react-icons/bs";
import { ThemeContext } from '../context/themeContext';
import { useByFlag } from '../hooks/useByFlag';

export const Details = () => {

  const {name} = useParams()
  const {handleNativeName, handleLanguage, handleCurrencies} = useByFlag()
  const {flag, getByName} = useContext(AppContext)
  const {isDarkTheme} = useContext(ThemeContext);
  const navigate = useNavigate()
  

  const ArrayLeft = [
    { titleLeft: 'Native Name:', desciptionLeft: handleNativeName() },
    { titleLeft: 'Population:', desciptionLeft: flag[0]?.population },
    { titleLeft: 'Region:', desciptionLeft: flag[0]?.region },
    { titleLeft: 'Sub Region Name:', desciptionLeft: flag[0]?.subregion },
    { titleLeft: 'Capital:', desciptionLeft: flag[0]?.capital },
  ]

  const ArrayRigth = [
    { titleRigth: 'Top Level Domain:', desciptionRigth: flag[0]?.tld },
    { titleRigth: 'Currencies:', desciptionRigth: handleCurrencies() },
    { titleRigth: 'Languages:', desciptionRigth: handleLanguage() }
  ]

  const ArrayButton = [
    { titleBoder : flag[0]?.borders ? flag[0]?.borders[0] : '' },
    { titleBoder : flag[0]?.borders ? flag[0]?.borders[1] : '' },
    { titleBoder : flag[0]?.borders ? flag[0]?.borders[2] : '' }
  ]



  useEffect(()=>{
    getByName(name)
  },[])


  
  
  
  return (
    <div className='h-screen'>
      <GridLayout>
        <div className='sm:col-span-4 md:col-span-8 lg:col-span-12'>
          <div onClick={()=> navigate('/')} className={`sm:mt-8 mt-20 h-10 w-[136px] rounded-[5px] shadow-3xl flex justify-center items-center gap-2 cursor-pointer ${isDarkTheme ? "bg-bg-card" : "bg-bg-white"}`} >
            <BsArrowLeft className={`${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}/>
            <p className={`text-mode font-light ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>Back</p>
          </div>
        </div>
        <div className='sm:col-span-4 sm:mt-8 md:col-span-4 lg:col-span-6 mt-20 lg:mr-[70px]'>
            <img src={flag[0]?.flags.png} alt="" className='w-full object-cover'/>
        </div>
        <div className='sm:col-span-4 sm:ml-[0px] md:col-start-5 md:col-end-9 md:ml-[30px] lg:col-start-7 lg:col-end-13 lg:ml-[30px]'>
          <h1 className={`sm:mt-[30px] mt-[100px] mb-[29px] text-titleDetail font-extrabold ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>{flag[0]?.name.common}</h1>
          
          <div className='md:flex-none lg:flex gap-10'>
            <div className='sm:mb-[10px] lg:mb-0'>
              {ArrayLeft.map((flag, index)=>{
                return(
                  <p key={index} className={`text-mode font-semibold mb-[10px] last:mb-0 ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>{flag.titleLeft}<span className='text-select font-light ml-[5px]'>{flag.desciptionLeft}</span></p>
                )
              })}
            </div>
            <div>
            {ArrayRigth.map((flag, index)=>{
                return(
                  <p key={index} className={`text-mode font-semibold mb-[10px] last:mb-0 ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>{flag.titleRigth}<span className='text-select font-light ml-[5px]'>{flag.desciptionRigth}</span></p>
                )
              })}
            </div>
          </div>

          {flag[0]?.borders && <div className='sm:mt-[30px] flex md:items-start lg:items-center gap-5 mt-[72px]'>
            <p className={`text-mode font-semibold ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>Border Countries:</p>
            <div className='sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row lg:items-center gap-[10px]'> 
            {ArrayButton?.map((flag, index)=>{
              return(
                <div key={index}>
                  { flag.titleBoder ? <div className={`h-[28px] w-[96px] rounded-[5px] shadow-3xl flex justify-center items-center gap-2 ${isDarkTheme ? "bg-bg-card" : "bg-bg-white"}`}>
                    <p className={`text-select font-light ${isDarkTheme ? "text-tx-dark" : "text-tx-lite"}`}>{flag.titleBoder}</p>
                  </div> : null}
                </div>
              )
            })}
            </div>
          </div>}

        </div>
      </GridLayout>
    </div>
  )
}
