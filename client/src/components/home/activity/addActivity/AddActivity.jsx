import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddActivity } from "../../../../redux/actions";
import { getAllActivities } from "../../../../redux/actions";
import style from './AddActivity.module.css'


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
    const [activityAdded, setActivityAdded] = useState('')

    const allActivities = useSelector((state) => state.allActivities)

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "DEFAULT",
        duration: "DEFAULT",
        season: "DEFAULT",
        country: ''
    })
    let [errors, setErrors] = useState({})
    let [addedCountries, setAddedCountries] = useState([])

    countries = findCountries(countries)

    useEffect(() => {
        dispatch(getAllActivities())
        return () => {
            setAddedCountries([])
            setActivity({
                name: "",
                difficulty: "DEFAULT",
                duration: "DEFAULT",
                season: "DEFAULT",
                country: ''
            })
            setActivityAdded('')
        }
    }, [dispatch])

    function validate(activity) {
        let errors = {}
        if (activity.name === "") errors.name = 'A name is required'
        if (/[`~,.<>;':"/[\]|{}()=_+-?¡!¿*{}´´¨´&%$#°]/.test(activity.name)) errors.name = 'Name not allowed especials characters or numbers'
        if (activity.difficulty === 'DEFAULT') errors.difficulty = 'You must to select a difficulty'
        if (activity.duration === 'DEFAULT') errors.duration = 'You must to select a duration'
        if (activity.season === 'DEFAULT') errors.season = 'You must to select a seasson'
       
        return errors

    }

    function addCountry() {
        if (activity.country === "") setErrors({ ...errors, country: 'You must to select a country' })
        else {
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
        if (Object.keys(errors).length === 0) {
            if (allActivities.find(act => act.name === activity.name)) return setErrors({ ...errors, name: "This activity already exist" })
            else {
                const activitytoSend = {
                    name: activity.name,
                    difficulty: activity.difficulty,
                    duration: activity.duration,
                    season: activity.season,
                    countries: addedCountries
                }
                setActivityAdded('The activity was created successfully')
                setAddedCountries([])
                setActivity({
                    name: "",
                    difficulty: "DEFAULT",
                    duration: "DEFAULT",
                    season: "DEFAULT",
                    country: ''
                })
                dispatch(AddActivity(activitytoSend))

            }
        } else {
            setActivityAdded('The activity can not be created')
        }
    }
    return (
        <>
            <div className={style.background}>
                <div className={style.divform}>
                    <form className={style.form} onSubmit={handleOnSubmit}>
                        <div className={style.name}>
                            <label htmlFor="name">Name</label>
                            <input placeholder="Name of the activity" type="text" name="name" value={activity.name} onChange={handleOnChange} />

                            {errors.name &&
                                <p className={style.p}>{errors.name}</p>
                            }
                        </div>
                        <div className={style.difficulty}>
                            <label htmlFor="difficulty">Dificulty</label>

                            <select className={style.select} name="difficulty" id="" value={activity.difficulty} onChange={handleOnChange}>
                                <option value="DEFAULT" >Select Duration</option>
                                {
                                    dificultiesValues.map((dificulty) => {
                                        return <option value={dificulty}>{dificulty}</option>
                                    })
                                }
                            </select>
                            {errors.difficulty &&
                                <p className={style.p}>{errors.difficulty}</p>
                            }
                        </div>
                        <div className={style.duration}>
                            <label htmlFor="duration">Duration</label>

                            <select className={style.select} name="duration" id="" value={activity.duration} onChange={handleOnChange}>
                                <option value="DEFAULT">Select Duraction</option>
                                <option value="1 Hour">1 Hour</option>
                                <option value="2 Hours">2 Hours</option>
                                <option value="3 Hours">3 Hours</option>
                                <option value="4 Hours">4 Hours</option>
                                <option value="5 Horas">5 or more hours</option>
                            </select>
                            {errors.duration &&
                                <p className={style.p}>{errors.duration}</p>
                            }
                        </div>

                        <div className={style.season}>
                            <label htmlFor="season">Season</label>
                            <select className={style.select} name="season" id="" value={activity.season} onChange={handleOnChange}>
                                <option value="DEFAULT">Select a Seasson</option>
                                <option value="Summer">Summer</option>
                                <option value="Spring">Spring</option>
                                <option value="Autum">August</option>
                                <option value="Winter">Winter</option>
                            </select>
                            {errors.season &&
                                <p className={style.p}>{errors.season}</p>
                            }
                        </div>
                        <div className={style.country}>
                            <label htmlFor="country">Select Countries</label>
                            <input placeholder="Select Countries" list="countries" name='country' type="search" value={activity.country} onChange={handleOnChange} />

                            <datalist id='countries'>
                                {
                                    countries.map((country) => {

                                        return <option value={country.id}> {country.name}</option>
                                    })

                                }
                            </datalist>
                            <button className={`${style.buttonCountry} ${style.add}`} type="button" onClick={()=>!errors.country && addCountry()}>Add country</button>
                            {errors.country &&
                                <p className={style.p}>{errors.country}</p>
                            }
                        </div>
                        <label htmlFor="countriesAdded">Added countries</label>
                        <div className={style.addCountries}>

                            {
                                addedCountries.map((country) => {
                                    return <>
                                        <div className={style.countryAdd}>
                                            <p>{country}</p>
                                            <button className={`${style.buttonCountry} ${style.quit}`} name='countriesAdded' type="button" onClick={() => quitCountry(country)}> Quit country</button>
                                        </div>
                                    </>
                                })
                            }</div>

                        <button className={style.buttonActivity} type="submit" >Add Acivity</button>
                        <div className={style.alert}>
                            {activityAdded &&
                                <p>{activityAdded}</p>
                            }

                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}