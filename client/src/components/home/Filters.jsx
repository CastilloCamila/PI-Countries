
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { filtered } from "../../redux/actions"
import { getAllCountries } from "../../redux/actions"
import helpCall from "../../helpers/helpCall"


export default function Filters({ currentPage, setCurrentPage, nextPage }) {
    const dispatch = useDispatch()

    const countries = useSelector((state) => state.countries)
    const filteredCountries = useSelector((state) => state.filteredCountries)

    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [alphabetical, setAlphabetical] = useState('')

    useEffect(() => {
        dispatch(getAllCountries())
    }, [])
    useEffect(() => {

        if (population !== '') {
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
            const filterContinent = countries.filter(country => country.continent === continent)
            dispatch(filtered(filterContinent))
        }
        if (alphabetical !== '') {
            console.log('entro alfabetical')
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


    }, [null, population, continent, alphabetical])


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
        </div>

    )
}