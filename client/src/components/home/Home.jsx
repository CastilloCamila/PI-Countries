
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { getAllCountries, filtered } from '../../redux/actions/index.js'



import Filters from "./filters/Filters.jsx";
import Pagination from "./Pagination.jsx";
import AllCards from './countries/allCards/AllCards'
import Search from './filters/search/Search.jsx'

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setcountriesPerPage] = useState(10)

    const dispatch = useDispatch()

    

    const filteredCountries = useSelector((state) => state.filteredCountries)

    let filter = null

    const indexFisrstCountry = currentPage * countriesPerPage
    const indexLastCountry = indexFisrstCountry - countriesPerPage

    console.log('indexFisrstCountry', indexFisrstCountry)
    console.log('indexLastCountry', indexLastCountry)
    console.log('cantt', filteredCountries.length)
    useEffect(() => {
        dispatch(getAllCountries())

    }, [dispatch])



    //------paginate-------
    function pagination() {
        if (currentPage == 1) {
            filter = filteredCountries.slice(indexLastCountry, 9)
        } else { filter = filteredCountries.slice(indexLastCountry - 1, indexFisrstCountry - 1) }



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
        if (indexLastCountry > 0) setCurrentPage(currentPage - 1)
    }
    //------paginate-------
    return (
        <div>
            <h1>Home</h1>
            <Search />
            <Filters paginate={paginate} />
            <AllCards pagination={pagination} />
            <Pagination totalCountries={filteredCountries.length} countriesPerPage={countriesPerPage} paginate={paginate} nextPage={nextPage} previusPage={previusPage} />
        </div>
    )
}