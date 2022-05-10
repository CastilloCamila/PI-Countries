import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCountryDetail, cleartDetail } from '../../../../../redux/actions/index.js'
import { useParams } from 'react-router-dom'

import AcivityDetail from '../ActivityDetail'

import style from './CountryDetail.module.css'

export default function CountryDetail(){
    const {id} = useParams() 
    const  dispatch = useDispatch()
    const countryDetail = useSelector((state) => state.countryDetail)
    useEffect(() => {
        dispatch(getCountryDetail(id))
        return ()=>{
            dispatch(cleartDetail())}
            
        
    },[dispatch, id])
    console.log(countryDetail.activities)
    return(
        
        <div className={style.card}>{countryDetail.id ?
            <>
            <div className={style.cardDetail}>
            <h1>{countryDetail.name}</h1>
            <img src={`${countryDetail.image}`} alt="" />
            <p>Continent: {countryDetail.continent}</p>
            <p>Capital: {countryDetail.capital}</p>
            <p>Subregion: {countryDetail.subregion}</p>
            <p>Area: {countryDetail.area}</p>
            <p>Papulation: {countryDetail.population}</p>

            
            
            
            {/* <h3>{countryDetail.activities[1].name}</h3> */}
            
            </div>
            <div className={style.activityDetail}>
               <p>See All The Activities Of This Country</p> 
            {
                countryDetail.activities.map(actDetail=>{
                    {console.log('obj', actDetail.name)}
                   return <AcivityDetail name={actDetail.name}  difficulty={actDetail.difficulty} duration={actDetail.duration} season={actDetail.season} />
                })
            }
            </div>
            </>

        : (<h1>Cargando</h1>)}

        </div>
    )
}