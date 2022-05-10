import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardCountry.module.css'


function CardCountry ({image, name, continent, id}){

    return(
        <>
        {/* <div className={style.container}>
             <div className={style.imgBox}>
                 <img className={style.img} src={`${image}`} alt="" />
             </div>

             
                 <h2>{continent}</h2>
             
             <Link to={`/home/country/${id}`}>
             <div> 
                 <p>{name}</p>
             </div>
             </Link> 
         </div> */}
     <div className={styles.profileCard}>

<div className={styles.header} >

<img className={styles.img} src={`${image}`} alt="" />


 <h1>{name}</h1>
  
<h2> Continen: {continent}</h2>
<Link to= {`/home/country/${id}`}>
    <button>More detail</button>
    </Link>
</div>





</div>
        </>
     )   


}
export default CardCountry
