import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddActivity } from "../redux/actions";
import { getAllActivities } from "../redux/actions";



function findCountries(countries) {
    let countriesname = countries.map(country => {
        return { id: country.id, name: country.name }
    })
    return countriesname

}
const dificultiesValues = [1, 2, 3, 4, 5]

export default function Addactivity() {
    
    const dispatch = useDispatch();

    let countries = useSelector((state) => state.countries);
    const allActivities= useSelector((state)=>state.allActivities)

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "DEFAULT",
        duration: "DEFAULT",
        season: "DEFAULT",
        country: ''
    })
    let [errors, setErrors] = useState({})
    let [addedCountries, setAddedCountries] = useState(['BWA', 'ARG'])

    countries = findCountries(countries)
   
    useEffect(()=>{
       dispatch(getAllActivities())
    },[dispatch])
    function validate(activity) {
        let errors = {}
    
        if (/[`~,.<>;':"/[\]|{}()=_+-?¡!¿*{}´´¨´&%$#°]/.test(activity.name)) errors.name = 'Name not allowed especials characters or numbers'
        if (activity.difficulty === 'DEFAULT') errors.difficulty = 'You must to select a difficulty'
        if (activity.duration === 'DEFAULT') errors.duration = 'You must to select a duration'
        if (activity.season === 'DEFAULT') errors.season = 'You must to select a seasson'
        if (activity.country === '') errors.country = 'You must to select a country'
        return errors
    
    }

    function addCountry() {
        if (addedCountries.includes(activity.country)) {
            setErrors({ ...errors, country: 'You are already selected this country' })
            setActivity({
                ...activity,
                country: ''
            })
        }
        else {
            setAddedCountries([...addedCountries, activity.country])
            setActivity({
                ...activity,
                country: ''
            })
        }
    }

    function quitCountry(id) {
        let filteredCountries = addedCountries.filter(country => country !== id)
        setAddedCountries(filteredCountries)

    }


    function handleOnChange(e) {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
        setErrors(validate(
            {
                ...activity,
                [e.target.name]: e.target.value
            }
        ))
    }
    function handleOnSubmit(event) {
        event.preventDefault()
        console.log("actividad encontrada",allActivities.find(act=>act.name == activity.name))
        if(allActivities.find(act=>act.name == activity.name)) return setErrors({ ...errors, name: "This activity already exist" })
        else{
        const activitytoSend = {
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season,
            countries: addedCountries
        }
        dispatch(AddActivity(activitytoSend))}
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={activity.name} onChange={handleOnChange} />

                {errors.name &&
                    <p>{errors.name}</p>
                }
                <br />

                <label htmlFor="difficulty">Dificulty</label>

                <select name="difficulty" id="" value={activity.difficulty} onChange={handleOnChange}>
                    <option value="DEFAULT">Select Duration</option>
                    {
                        dificultiesValues.map((dificulty) => {
                            return <option value={dificulty}>{dificulty}</option>
                        })
                    }
                </select>
                {errors.difficulty &&
                    <p>{errors.difficulty}</p>
                }
                <br />
                <label htmlFor="duration">Duration</label>

                <select name="duration" id="" value={activity.duration} onChange={handleOnChange}>
                    <option value="DEFAULT">Select Duraction</option>
                    <option value="1 Hour">1 Hour</option>
                    <option value="2 Hours">2 Hours</option>
                    <option value="3 Hours">3 Hours</option>
                    <option value="4 Hours">4 Hours</option>
                    <option value="5 Horas">5 or more hours</option>
                </select>
                {errors.duration &&
                    <p>{errors.duration}</p>
                }
                <br />
                <label htmlFor="season">Season</label>

                <select name="season" id="" value={activity.season} onChange={handleOnChange}>
                    <option value="DEFAULT">Select Seasson</option>
                    <option value="Summer">Summer</option>
                    <option value="Spring">Spring</option>
                    <option value="Autum">August</option>
                    <option value="Winter">Winter</option>
                </select>
                {errors.season &&
                    <p>{errors.season}</p>
                }
                <br />

                <label htmlFor="">Seleccione los paises
                    <input list="countries" name='country' type="search" value={activity.country} onChange={handleOnChange} />
                </label>
                <datalist id='countries'>
                    {
                        countries.map((country) => {

                            return <option value={country.id}> {country.name}</option>
                        })

                    }
                </datalist>
                <button onClick={() => !errors.country && addCountry()}>Add country</button>
                {errors.country &&
                    <p>{errors.country}</p>
                }
                {
                    addedCountries.map((country) => {
                        return <>
                            <p>{country}</p>
                            <button onClick={() => quitCountry(country)}> Quit country</button>
                        </>
                    })
                }
                <br />
                <button type="submit" >Add Acivity</button>
            </form>
        </div>
    )
}