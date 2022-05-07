import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { getAllCountries, filtered } from '../../../redux/actions/index.js'



import Filters from "../filters/Filters";
import Pagination from "../Pagination";
import CardCountry from './CardCountry'

export default function AllCards() {


    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setcountriesPerPage]=useState(10)

    const dispatch = useDispatch()
    
    const countries = useSelector((state) => state.countries)

    const filteredCountries = useSelector((state) => state.filteredCountries)

    let filter = null

    const indexFisrstCountry= currentPage * countriesPerPage
    const indexLastCountry= indexFisrstCountry - countriesPerPage

    console.log('indexFisrstCountry',indexFisrstCountry)
    console.log('indexLastCountry',indexLastCountry)
    console.log('cantt',filteredCountries.length)
    useEffect(() => {
        dispatch(getAllCountries())

    }, [dispatch])


    function numbers() {
        
    }

    //------paginate-------
    function pagination() {
            if(currentPage==1){
                filter = filteredCountries.slice( indexLastCountry,9)
            }else {filter = filteredCountries.slice( indexLastCountry-1,indexFisrstCountry-1)}

            

        return filter
    }
    function paginate(pageNumber) {
         setCurrentPage(pageNumber)
    }

    function nextPage() {
        setCurrentPage(currentPage + 1)
    }
    function previusPage() {
        console.log('on prev')
        if (indexLastCountry > 0) setCurrentPage(currentPage  - 1)
    }
    //------paginate-------

    return (
        <>
            <div>
                
                <Filters paginate={paginate}/>
                

                
                
                
                         
                {
                    countries.length > 0 ? pagination().map((country) => (
                       <>

                            <CardCountry name={country.name} image={country.image} continent={country.continent} id={country.id} key={country.id} />
                        </>

                    ))
                    : <h2>Cargandop</h2>
                   
                            
                }
                <Pagination totalCountries={filteredCountries.length} countriesPerPage={countriesPerPage} paginate={paginate} nextPage={nextPage} previusPage={previusPage} />
            </div>
        </>
    )
}
