import NavBar from './NavBar'
import AllCards from './AllCards'
import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <div>
            <h1>Home</h1>
            <NavBar/>
            <AllCards/>
            
        </div>
    )
}