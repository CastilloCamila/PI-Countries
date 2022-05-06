import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions'

export default function Search() {
    const dispatch = useDispatch()
    const [errors,setErrors]=useState('')
    const [search,setSearch]=useState({search:''})


    function handleOnsubmit(event){
        event.preventDefault()
        console.log('submitt')
        setErrors('')
        setSearch({...search,search:''})
        dispatch(searchCountry(search.search))
        .catch(error=>setErrors(error.response.data.msg))
        //.catch(error=>console.log(error))

    }
    return(
        <div>
            <input type="text" name="search" value={search.search} onChange={(e) => setSearch({...search,search:e.target.value})} />
            <button onClick={handleOnsubmit}>Buscar</button>
            {errors &&
                <p>{errors}</p>
            }
        </div>
    )
}