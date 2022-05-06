import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import CardCountry from './CardCountry'
import { getAllCountries, filtered } from '../../redux/actions/index.js'
import Filters from "./Filters";

import { Link } from "react-router-dom";

export default function AllCards() {


    let [currentPage, setCurrentPage] = useState(0)

    const dispatch = useDispatch()
    
    const countries = useSelector((state) => state.countries)

    const filteredCountries = useSelector((state) => state.filteredCountries)

    let filter = null


    useEffect(() => {
        dispatch(getAllCountries())

    }, [dispatch])

    //------paginate-------
    function pagination() {
        
        if (currentPage === 0) {
            filter = filteredCountries.slice(currentPage, currentPage + 9)
            console.log('filtraddo 0', filteredCountries)
        }
        else { filter = filteredCountries.slice(currentPage, currentPage + 10) }
        return filter
    }

    function nextPage() {
        setCurrentPage((currentPage - 1) + 10)
    }
    function previusPage() {
        if (currentPage > 0) setCurrentPage((currentPage + 1) - 10)
    }
    //------paginate-------

    return (
        <>
            <div>
                <Filters currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} />
                <Link to='/home/activity'>
                    <p>actividades</p>
                </Link>
                <button onClick={() => previusPage()}>
                    prev
                </button>
                <button onClick={() => nextPage()}>
                    Next
                </button>


                {
                    countries.length > 0 ? pagination().map((country) => (
                        <>

                            <CardCountry name={country.name} image={country.image} continent={country.continent} id={country.id} key={country.id} />
                        </>

                    )) : <h2>Cargandop</h2>
                }
            </div>
        </>
    )
}
