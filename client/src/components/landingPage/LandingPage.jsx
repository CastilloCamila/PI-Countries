
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return(
        <div>
            <h1>Landing page

            </h1>
            <Link to={'/home'}>
            <h2>home</h2>
            </Link>
        </div>
    )
}