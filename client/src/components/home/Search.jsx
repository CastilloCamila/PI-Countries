import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions'

export default function Search() {
    const dispatch = useDispatch()
    const [errors,setErrors]=useState('')
    const [search,setSearch]=useState(
        {country:''}
    )

    function handleOnChange(e){
        setSearch(
            {
                ...search,
                country:e.target.value
            }
        )
        
    }
    function handleOnsubmit(event){
        event.preventDefault()
        console.log('submitt')
        
        dispatch(searchCountry(search.country))
        .catch(error=>setErrors(error.response.data.msg))

    }
    return(
        <div>
            <input type="text" name="search" value={search.search} onChange={handleOnChange} />
            <button onClick={handleOnsubmit}>Buscar</button>
            {errors &&
                <p>{errors}</p>
            }
        </div>
    )
}