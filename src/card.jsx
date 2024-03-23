import './index.css';
import BookDetails from './BookDetails';
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
var count = 0;

const favs =[];
function yesdetails(e){
    console.log(e.target.parentElement.parentElement.getElementsByClassName("details")[0])
    // e.target.parentElement.parentElement.querySelector("details").style.display="block";
    e.target.parentElement.parentElement.getElementsByClassName("details")[0].style.display="block"


}



function Card(props){
    // console.log(props.plot)
    // var [favs,setfav] = useState([]);
    var fav = {id: props.id};
    // favs=[fav];

    function Addfav(e){
        // console.log(favs);
        // console.log("hi");
        // var newfav = favs.push(fav);
        // favs.push(fav)
        // setfav(newfav);
        
        // setfav(favs => [... favs,fav]);
        
        favs[count] = fav;
        count=count + 1;
        console.log(count)


        console.log(favs);
        console.log(e.target.parentElement.querySelectorAll("button")[0])
        e.target.parentElement.querySelectorAll("button")[0].classList.toggle("favvv")
    
    }
    return (
        
        // <div id="results">
            <div className="book">
                <h1>{props.title}</h1>
                <img className='pic_size' src={props.cover} />
                <p>{props.first_name}{" "}{props.middle_name}{" "}{props.last_name}</p>
                {/* <p>rating: {props.rating}</p> */}
                <div className='card_button'>
                    <button  ><FaHeart style={{fontSize: "25px"}} /></button>
                    {/* onClick={Addfav} */}
                    <button onClick={yesdetails}>Learn More..</button>

                </div>
                {/* <i id="heart" className="fa-solid fa-heart"></i> */}
                <BookDetails title={props.title} first_name={props.first_name} middle_name={props.middle_name} last_name={props.last_name} key={props.id} rating={props.rating} genres={props.genres} plot={props.plot}/>
                
            </div>
            

        // </div>
    )
}
export default Card;