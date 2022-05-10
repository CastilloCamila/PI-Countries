import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import style from './Search.module.css'
import { filtered } from '../../../../redux/actions'
import helpCall from '../../../../helpers/HelpCall'
export default function Search() {
    const dispatch = useDispatch()

    const [errors,setErrors]=useState('')
    const [search,setSearch]=useState({search:''})
    function handleOnChange(e) {
        setSearch({...search,search:e.target.value})
        setErrors('')
        
    }

    function handleOnsubmit(event){
        event.preventDefault()
        console.log('submitt')
        helpCall(`/countries?name=${search.search}`)
        .then(res=>dispatch(filtered(res)))
        .catch(error=>
            {setErrors(error.response.data.msg);
            
            })
        setErrors('')
        setSearch({...search,searchs:''})

    }
    return(
        <div className={style.form}>
            <input className={style.input} placeholder='Search a Country' type="text" name="search" value={search.search} onChange={(e) => handleOnChange(e) } />
            <button className={style.button} onClick={handleOnsubmit}>Search</button>
            {errors &&
                <p>{errors}</p>
            }
        </div>
    )
}