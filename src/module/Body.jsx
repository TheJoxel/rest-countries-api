import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Cards } from '../components/elements/Cards'
import { Opcion } from '../components/elements/Opcion'
import { Search } from '../components/elements/Search'
import { GridLayout } from '../components/layout/GridLayout'
import AppContext from '../context/appContext'

export const Body = () => {

  const navigate = useNavigate()

  const {flags} = useContext(AppContext)

  function redirect(name){
    navigate(`/detail/${name}`)
  }

  return (
    <div className='h-auto py-[48px]'>
        <GridLayout>
          <div className='sm:pr-0 col-span-5 pr-[43px]'>
            <Search/>
          </div>
          <div className='sm:col-start-3 sm:col-end-5 sm:-mr-5 md:col-start-7 md:col-end-9 md:-mr-0 lg:col-start-11 lg:col-end-13'>
            <Opcion/>
          </div>
          <div className='sm:col-span-4 md:col-span-8 lg:col-span-12 mt-[28px]'>
            <div className='grid 
            sm:grid-cols-1
            md:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4 
            gap-[75px]
            justify-center '>
              {flags.map((flag, index)=>{
                return (
                  <Cards key={index} onclick={()=> redirect(flag?.name.common.toLowerCase())} image={flag.flags.png} name={flag?.name.common} population={flag?.population} region={flag?.region} capital={flag?.capital}/>
                )
              })}
            </div>
          </div>
        </GridLayout>
    </div>
  )
}
