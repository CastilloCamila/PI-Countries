import React from 'react';
import { Link } from 'react-router-dom';
import style from './CardCountry.module.css'


function CardCountry ({image, name, continent, id}){

    return(
        <>
        <div className={style.container}>
             <div className={style.imgBox}>
                 <img className={style.img} src={`${image}`} alt="" />
             </div>

             
                 <h2>{continent}</h2>
             
             <Link to={`/home/country/${id}`}>
             <div> 
                 <p>{name}</p>
             </div>
             </Link> 
         </div>
     
        </>
     )   


}
export default CardCountry
