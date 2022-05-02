import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../redux/actions'

export default function Search() {
    const dispatch = useDispatch()
    let [search,setSearch]=useState(
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
    }
    return(
        <div>
            <input type="text" name="search" value={search.search} onChange={handleOnChange} />
            <button onClick={handleOnsubmit}>Buscar</button>
        </div>
    )
}