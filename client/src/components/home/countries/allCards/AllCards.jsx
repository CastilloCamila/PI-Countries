import React, { useEffect, useState } from "react";
import {  useSelector } from 'react-redux'

import style from './AllCards.module.css'
import CardCountry from '../cardCountry/CardCountry'

export default function AllCards({ pagination }) {
    const filteredCountries = useSelector((state) => state.filteredCountries)

    return (
        <>
            <div className={style.conteiner}>
 

                {
                    filteredCountries.length > 0 ? pagination().map((country) => (
                        <>
                            <CardCountry name={country.name} image={country.image} continent={country.continent} id={country.id} key={country.id} />
                        </>
                    ))
                        : <h2>Cargandop</h2>
                }

            </div>
        </>
    )
}
