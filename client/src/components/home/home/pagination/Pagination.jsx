
import React from 'react';

const Pagination = ({ totalCountries, countriesPerPage, paginate, nextPage, previusPage }) => {
    const pageNumbers = []
    for (let i = 2; i <= Math.ceil((totalCountries-9 ) / countriesPerPage)+1; i++) {
        pageNumbers.push(i)

 

    }
    return (
        <div>
                    <button onClick={() => previusPage()}>
                    prev
                </button>
                    <button onClick={()=>paginate(1)}> 1</button>
                {
                    pageNumbers.map(number => {
                        return <button onClick={()=>paginate(number)}> {number}</button>

                    })
                }
                <button onClick={() => nextPage()}>
                    Next
                </button>




        </div>
    )
};
export default Pagination;