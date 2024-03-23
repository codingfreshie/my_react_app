import './index.css';
import Card from "./card";
import { useState } from 'react';
var unique = 0;
function nodetails(e){
    console.log(e.target.parentElement);
    e.target.parentElement.style.display = "none";
    
}
 function BookDetails(props){
    unique = props.id;
    return(
        <div className='details'>
            <button onClick={nodetails}>Close</button>
            <p>Title: {props.title}</p>
            <p>Author: {props.first_name}{" "}{props.middle_name}{" "}{props.last_name}</p>
            <p>Rating: {"  "} {props.rating}</p>
            <p>Genres: {"  "} {props.genres.map((e) => e+" . ")}</p>
            <p>{"plot:  "}{props.plot.slice(0,500)}</p>

        </div>
    )
 }
 export default BookDetails;