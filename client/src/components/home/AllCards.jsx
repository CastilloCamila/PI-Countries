import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import CardCountry from './CardCountry'
import {getAllCountries} from '../../redux/actions/index.js'

import { Link } from "react-router-dom";

export default function AllCards(props) {
    let [currentPage, setcurrentPage] = useState(0)
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch])

    function filterCountries() {
        let filteredCountries=null
        if(currentPage==0){
         filteredCountries= countries.slice(currentPage,currentPage+9)}
        else { filteredCountries= countries.slice(currentPage,currentPage+10)}
        
  
        return filteredCountries
    }
    function nextPage() {
        setcurrentPage((currentPage-1) + 10)
    }
    function previusPage() {
        if(currentPage>0)setcurrentPage((currentPage+1) - 10)
    }
    return (
        <>
        <div>
            <Link to='/home/activity'>
                <p>actividades</p>
            </Link>
            <button onClick={()=>nextPage()}>
                Next
            </button>
            <button onClick={()=>previusPage()}>
                prev
            </button>
            
            {
                countries.length >0 ?  filterCountries().map((country)=>(
                    <>
                   
                    <CardCountry name={country.name} image={country.image} continent={country.continent} id={country.id} key={country.id}/>
                    </>
                    
                )) : <h2>NO haynada de nada</h2>
            }
        </div>
        </>
    )
}
