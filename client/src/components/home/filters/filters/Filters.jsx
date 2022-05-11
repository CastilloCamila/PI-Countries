
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"

import { getAllCountries, filtered, getAllActivities } from "../../../../redux/actions"

import style from "./Filters.module.css"

export default function Filters({paginate}) {
    //------- estados y variables----
    const dispatch = useDispatch()

    const filteredCountries = useSelector((state) => state.filteredCountries)
    const allActivities = useSelector(state => state.allActivities)

    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [alphabetical, setAlphabetical] = useState('')
    const [activity, setActivity] = useState('')
    //------------------------------

    useEffect(() => {
        dispatch(getAllActivities())
        
    }, [])
    useEffect(() => {
        if (population !== '') {
            if (population === 'DEFAULT') {
                setPopulation('')
            }
            if (population === 'asc') {

                const filterPopulation = filteredCountries.sort((a, b) => a.population - b.population)
                dispatch(filtered({}))
                dispatch(filtered(filterPopulation))

            } else if (population === 'desc') {

                const filterPopulation = filteredCountries.sort((a, b) => b.population - a.population)
                dispatch(filtered({}))
                dispatch(filtered(filterPopulation))
            }
        }

        if (continent !== '') {
            if (continent === 'DEFAULT') {
                dispatch(getAllCountries())
                paginate(1)
                setContinent('')
            }
            const filterContinent = filteredCountries.filter(country => country.continent === continent)
            setContinent('')
            dispatch(filtered({}))

            return dispatch(filtered(filterContinent))
        }



        if (alphabetical !== '') {
            if (alphabetical === 'DEFAULT') {
                setAlphabetical('')
            }
            if (alphabetical === 'asc') {
                console.log('entro asc')
                const filterAlphabetical = filteredCountries.sort((a, b) => {
                    if (a.name < b.name) return 1
                    if (a.name > b.name) return -1
                    return 0
                })

                dispatch(filtered({}))
                dispatch(filtered(filterAlphabetical))

            } else if (alphabetical === 'desc') {
                const filterAlphabetical = filteredCountries.sort((a, b) => {
                    if (a.name < b.name) return -1
                    if (a.name > b.name) return 1
                    return 0
                })

                dispatch(filtered({}))
                dispatch(filtered(filterAlphabetical))
            }
        }
        if (activity !== '') {
            if (activity === 'DEFAULT') {
                setActivity('')
            } else {
                const filterActivies = allActivities.find(act => act.id == activity)

                dispatch(filtered(filterActivies.countries))
            }
        }



    }, [null, population, continent, alphabetical, activity])

    function reset() {
        setPopulation('')
        setActivity('')
        setAlphabetical('')
        setContinent('')
        dispatch(getAllCountries())
        paginate(1)
    }
    return (
        
        <div className={style.conteinerFilters}>
            <div className={`${style.divsConteiners} ${style.label} ${style.select}`}>
            <label htmlFor="continent">Filter By Continent:</label>
            <select name="continent" onChange={e => setContinent(e.target.value)} id="">
                <option value="DEFAULT">Select a Continent</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
            </div>
            <div className={style.divsConteiners}>
            <label htmlFor="population">Filter By Population:</label>
            <select name="population" onChange={e => setPopulation(e.target.value)} id="">
                <option value="DEFAULT">Order...</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            </div>
            <div className={style.divsConteiners}>
            <label htmlFor="population">Filter By Alphabetical:</label>
            <select name="population" onChange={e => setAlphabetical(e.target.value)} id="">
                <option value="DEFAULT">Order...</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            </div>
            <div className={style.divsConteiners}>
            <label htmlFor="activity">Filter By Activity:</label>
            <select name="activity" id='laAC' value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option value="DEFAULT">Select an Activity</option>
                {
                    allActivities.map((act) => {

                        return <option value={act.id}>{act.name}</option>
                    })

                }
            </select>
            </div>
             <button className={style.button} onClick={() => reset()}>RESET FILTERS</button>
        </div>

    )
}