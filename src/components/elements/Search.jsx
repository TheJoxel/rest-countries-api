import React, { useContext, useState } from 'react'
import AppContext from '../../context/appContext'
import { ThemeContext } from '../../context/themeContext'

export const Search = () => {

  const {handleFilterName} = useContext(AppContext) 
  const [search, setSearch] = useState("")

  const {isDarkTheme} = useContext(ThemeContext);



  function handleChange (e) {
    setSearch(e.target.value)
    handleFilterName(e.target.value)
}

  return (
    <div>
        <input type="text" onChange={handleChange} value={search} placeholder='Search for a country...' className={`outline-none w-full text-select font-light py-[18px] px-[24px] shadow-md rounded-[5px] ${isDarkTheme ? "bg-bg-card" : "bg-bg-white"}`}/>
    </div>
  )
}
