
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { getAllCountries, updatePage } from '../../../../redux/actions/index.js'
import style from './Home.module.css'


import Filters from "../../filters/filters/Filters.jsx";

import Pagination from "../pagination/Pagination.jsx";
import AllCards from '../../countries/allCards/AllCards'
import Search from '../../filters/search/Search.jsx'

export default function Home() {
    //----- Estados y variables------
    const currentPage=useSelector(state=>state.currentPage)
    const filteredCountries = useSelector((state) => state.filteredCountries)
    
    const [countriesPerPage] = useState(10)
    const [isLoading, setIsLoading]=useState()

    const dispatch = useDispatch()

    let filter = []
    
    const indexFisrstCountry = currentPage * countriesPerPage
    const indexLastCountry = indexFisrstCountry - countriesPerPage
    //-----------------------------

    useEffect(() => {   
        if (filteredCountries.length===1) {
            dispatch(getAllCountries())
        }
    }, [dispatch])
    
    //------paginate-------
 
        if (currentPage == 1) {
             filter = filteredCountries.slice(indexLastCountry, 9)
        } else {  filter = filteredCountries.slice(indexLastCountry - 1, indexFisrstCountry - 1) }
         
    
    // function paginate(pageNumber) {

    //     dispatch(updatePage(pageNumber))

    // }

    // const paginat = (pageNumber) => {
    //     for (let i = 1; i <= Math.ceil(recipes.length / recipePerPage); i++) {
    //       let page = document.getElementById(i);
    //       page.classList.remove("currentPage");
    //     }
    //     let current = document.getElementById(pageNumber);
    //     current.classList.add("currentPage")
    //     setCurrentPage(pageNumber)
    //   }


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
            <Filters />
            <AllCards  filter={filter} isLoading={isLoading} />
            <Pagination totalCountries={filteredCountries.length} countriesPerPage={countriesPerPage} nextPage={nextPage} previusPage={previusPage} currentPage={currentPage} />
        </div>
    )
}