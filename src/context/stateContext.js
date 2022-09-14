import React, { useEffect, useState } from 'react'
import { filterName, filterRegion, getAllFlags } from '../api/flags';
import AppContext from "./appContext";



export const AppState = ({children}) => {

    const [flags, setFlags] = useState([])
    const [flag, setFlag] = useState([])
    

    useEffect(()=>{
        getAll()
    },[])

    function getAll(){
        getAllFlags()
        .then(res => {setFlags(res.data)})
    }

    function handleFilterName (name) {
        if(name.length > 2 ){
            filterName(name)
            .then(res => {setFlags(res.data)})
        }else if( !name || name === "" ){
            getAll()
        }
    }

    function getByName(name) {
        filterName(name)
        .then(res=> {setFlag(res.data)})
    }

    function handleFilterRegion(region) {
        filterRegion(region)
        .then(res=> {setFlags(res.data)})
    }
    

  return (
    <AppContext.Provider value={{flags, flag, handleFilterName, handleFilterRegion, getByName}}>
        {children}
    </AppContext.Provider>
  )
}
