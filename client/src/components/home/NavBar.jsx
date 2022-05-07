import React from "react";

import Search from "./filters/Search";
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <div>
            <Search/>
            <Link to='/home/activity'>
                    <p>actividades</p>
                </Link>
        </div>
    )
}