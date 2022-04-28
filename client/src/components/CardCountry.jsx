import React from 'react';
import { Link } from 'react-router-dom';


function CardCountry ({image, name, continent, id}){

    return(
        <div>
            <Link to={`/countries/${id}`}>
            <div> 
                <h2>{name}</h2>
            </div>
            </Link>
            <div>
                <img src={`${image}`} alt="" />
            </div>
            <div>
                <h4>{continent}</h4>
            </div>
        </div>
    )


}
export default CardCountry
