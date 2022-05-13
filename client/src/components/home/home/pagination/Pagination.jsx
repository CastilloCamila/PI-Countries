
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './Pagination.module.css'
import { updatePage } from '../../../../redux/actions';

export default function Pagination({ totalCountries, countriesPerPage, paginate, nextPage, previusPage }) {
    //---Estados y variables-----
    const dispatch = useDispatch()
    const pageNumbers = []

    //----------------------------
    //----- cantidad de paginas-------
    for (let i = 2; i <= Math.ceil((totalCountries - 9) / countriesPerPage) + 1; i++) {
        pageNumbers.push(i)

    }
    function paginate(pageNumber) {
        // console.log('pageNumber',pageNumber)

        // console.log('cant countries',totalCountries)

        // for (let i = 1; i <= Math.ceil((totalCountries / countriesPerPage) + 1) ; i++) {
        //     let page = document.getElementById(i);
        //     console.log('pagee',page)
        //     page.classList.remove(style['currentPage']);
        // }
        // let current = document.getElementById(pageNumber);
        // current.classList.add(style['currentPage'])
        dispatch(updatePage(pageNumber))

    }

    //---------------------------------
    return (
        <div className={style.containerButtons}>
            <button onClick={() => previusPage()}>
                Prev
            </button>
            <button onClick={() => paginate(1)}  id='1' className={style.currentPage}> 1</button>
            {
                pageNumbers.map(number => {
                    return <button id={number} onClick={() => paginate(number)}> {number}</button>
                })
            }
            <button onClick={() => nextPage()}>
                Next
            </button>
        </div>
    )
};
