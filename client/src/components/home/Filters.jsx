
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"

import { getAllCountries, filtered, getAllActivities } from "../../redux/actions"



export default function Filters() {
    const dispatch = useDispatch()


    const filteredCountries = useSelector((state) => state.filteredCountries)
    const allActivities = useSelector(state=>state.allActivities)

    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [alphabetical, setAlphabetical] = useState('')
    const [activity, setActivity] = useState('')

    useEffect(() => {
        dispatch(getAllActivities())
    }, [])
    useEffect(() => {
        if (population !== '') {
            if (population === 'DEFAULT') {
                    setPopulation('')
                    dispatch(getAllCountries())   
                }

            if (population === 'asc') {

                const filterPopulation = filteredCountries.sort((a, b) => a.population - b.population)
                dispatch(filtered({}))
                dispatch(filtered(filterPopulation))
                 
            } else if (population === 'desc') {

                const filterPopulation = filteredCountries.sort((a, b) =>  b.population-a.population )
                dispatch(filtered({}))
                
                dispatch(filtered(filterPopulation))
            }    
        }

        if (continent !== '') {
            if (continent === 'DEFAULT')  { 
                
                dispatch(getAllCountries())
                setContinent('')
            }
            const filterContinent = filteredCountries.filter(country => country.continent === continent)
            setContinent('')
            dispatch(filtered({}))
            
            return dispatch(filtered(filterContinent))

        }

        
        
        if (alphabetical !== '') {
           if (alphabetical === 'DEFAULT') {
               
                dispatch(getAllCountries())
                setAlphabetical('')
            }
            if (alphabetical === 'asc') {
                console.log('entro asc')
                const filterAlphabetical = filteredCountries.sort((a, b) => {
                    if (a.name < b.name)return 1
                    if (a.name > b.name)return -1
                    return 0
                })
                
                dispatch(filtered({}))
                 dispatch(filtered(filterAlphabetical))
               
            } else if (alphabetical === 'desc') {

                const filterAlphabetical = filteredCountries.sort((a, b) => {
                    if (a.name < b.name)return -1
                    if (a.name > b.name)return 1
                    return 0
                })
                
                dispatch(filtered({}))
                 dispatch(filtered(filterAlphabetical))
                
            }
        }
        if(activity!==''){
            const filterActivies=allActivities.find(act=>act.id==activity)
            console.log(filterActivies.countries)
            dispatch(filtered(filterActivies.countries))
        }
    


    }, [null, population, continent, alphabetical, activity])

    function reset() {
        setPopulation('')
        dispatch(getAllCountries())
    }
    return (
        <div>

            <label htmlFor="continent">Continent</label>
            <select name="continent" onChange={e => setContinent(e.target.value)} id="">
                <option value="DEFAULT">Select Continent</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
            <br />
            <label htmlFor="population">Population</label>
            <select name="population" onChange={e => setPopulation(e.target.value)} id="">
                <option value="DEFAULT">Select Type</option>
                <option value="asc">asc</option>
                <option value="desc">des</option>
            </select>
            <br />
            <label htmlFor="population">Alphabetical</label>
            <select name="population" onChange={e => setAlphabetical(e.target.value)} id="">
                <option value="DEFAULT">Select Type</option>
                <option value="asc">asc</option>
                <option value="desc">des</option>
            </select>
            <br />
            
            <label htmlFor="activity">Seleccione los ActividD</label>
            <select  name="activity" id='laAC' value={activity} onChange={(e)=> setActivity(e.target.value)}>
            <option value="DEFAULT">Select Activity</option>
                {
                    allActivities.map((act) => {

                        return <option value={act.id}>{act.name}</option>
                    })

                }
            </select>
            <br /> <button onClick={()=>reset()}>RESET</button>
        </div>

    )
}