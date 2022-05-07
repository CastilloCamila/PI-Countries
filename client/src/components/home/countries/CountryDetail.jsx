import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getCountryDetail, cleartDetail} from '../../../redux/actions/index.js'
import { useParams } from 'react-router-dom'
import AcivityDetail from '../activity/ActivityDetail.jsx'


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
        
        <div>{countryDetail.id ?
            <>
            <h1>Country:{countryDetail.name}</h1>
            <img src={`${countryDetail.image}`} alt="" />
            <h3>Continent:{countryDetail.continent}</h3>
            <h3>Capital:{countryDetail.capital}</h3>
            <h3>Subregion:{countryDetail.subregion}</h3>
            <h3>Area:{countryDetail.area}</h3>
            <h3>Papulation:{countryDetail.population}</h3>
            <h3>Activities:</h3>
            {
                countryDetail.activities.map(actDetail=>{
                    {console.log('obj', actDetail.name)}
                   return <AcivityDetail name={actDetail.name}  difficulty={actDetail.difficulty} duration={actDetail.duration} season={actDetail.season} />
                })
            }
            {/* <h3>{countryDetail.activities[1].name}</h3> */}
            
            </>
        : (<h1>Cargando</h1>)}

        </div>
    )
}