
import React,  { useState } from 'react';
import style from './Pagination.module.css'

const Pagination = ({ totalCountries, countriesPerPage, paginate, nextPage, previusPage }) => {

    const pageNumbers = []
    const [inPage, setInPage] = useState('')

    for (let i = 2; i <= Math.ceil((totalCountries-9 ) / countriesPerPage)+1; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.containerButtons}>
                <button onClick={() => previusPage()}>
                    Prev
                </button>
                    <button onClick={()=>paginate(1)}> 1</button>
                {
                    pageNumbers.map(number => {
                        
                        return <button className={`${inPage}`} onClick={()=>paginate(number, setInPage())}> {number}</button>

                    })
                }
                <button onClick={() => nextPage()}>
                    Next
                </button>




        </div>
    )
};
export default Pagination;