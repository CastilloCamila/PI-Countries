import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import CardCountry from './CardCountry'
import {getAllCountries} from '../redux/actions/index.js'


export default function AllCards(props) {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch])

    return (
        <>
        <div>
            
            {
                countries.length >0 ?  countries.map((country)=>(
                    <>
                   
                    <CardCountry name={country.name} image={country.image} continent={country.continent} id={country.id} key={country.id}/>
                    </>
                    
                )) : <h2>NO haynada de nada</h2>
            }
        </div>
        </>
    )
}