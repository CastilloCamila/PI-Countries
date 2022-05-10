
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { getAllCountries, updatePage } from '../../../../redux/actions/index.js'
import style from './Home.module.css'


import Filters from "../../filters/filters/Filters.jsx";

import Pagination from "../pagination/Pagination.jsx";
import AllCards from '../../countries/allCards/AllCards'
import Search from '../../filters/search/Search.jsx'

export default function Home() {
    const currentPage=useSelector(state=>state.currentPage)
    
    const [countriesPerPage] = useState(10)

    const dispatch = useDispatch()

    

    const filteredCountries = useSelector((state) => state.filteredCountries)

    let filter = null

    const indexFisrstCountry = currentPage * countriesPerPage
    const indexLastCountry = indexFisrstCountry - countriesPerPage

    useEffect(() => {
        console.log(filteredCountries.length)
        if (filteredCountries.length==1) {
          
            console.log('comdsc')
            dispatch(getAllCountries())
            console.log('length',filteredCountries.length)
        }
        // return ()=>{
        //     dispatch(filtered(filteredCountries))
        // }

    }, [dispatch])



    //------paginate-------
    function pagination() {
        if (currentPage == 1) {
            filter = filteredCountries.slice(indexLastCountry, 9)
        } else { filter = filteredCountries.slice(indexLastCountry - 1, indexFisrstCountry - 1) }



        return filter
    }
    function paginate(pageNumber) {
        console.log('numberrr', pageNumber)
        dispatch(updatePage(pageNumber))
        
    }

    function nextPage() {
        dispatch(updatePage(currentPage+1))
       
    }
    function previusPage() {
        console.log('on prev')
        if (indexLastCountry > 0)  dispatch(updatePage(currentPage-1))
    }
    //------paginate-------
    return (
        <div className={style.conteiner}>
            <div className={style.search}> 

                <Search className={style.searchBar} />
            </div>
           
            <Filters paginate={paginate} />
            <AllCards  pagination={pagination} />
            <Pagination totalCountries={filteredCountries.length} countriesPerPage={countriesPerPage} paginate={paginate} nextPage={nextPage} previusPage={previusPage} currentPage={currentPage} />
        </div>
    )
}