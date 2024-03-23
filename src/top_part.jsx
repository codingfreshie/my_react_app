import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';
import Card from "./card";

import './index.css';
import { FaSearch } from "react-icons/fa";
// var title = "BLAH";
function Top_part(){
    const [search_res,set_search]=useState([]);
    const [bool,set_bool]=useState(true);
    
    async function search_fun(e){
        console.log(document.querySelector("#search_val").value);
        var val = document.querySelector("#search_val").value;
        const url = 'https://books-api7.p.rapidapi.com/books/find/title?title='+val;
        // const url = 'https://books-api7.p.rapidapi.com/books/find/title?title=Wuthering%20heights';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b564655ea0msh27f96c4fa384b4ep153e14jsn666b214c20b4',
                'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            console.log(result);
            set_bool(true);
            if(result.length != 0){
                // bool = true;
                set_bool(true)
                // result.json();
                // console.log(result)
                console.log(true)
            }else{
                // bool = false;
                set_bool(false)
                console.log(false)
                // response = [];
            }
            if(bool){
                // bool = false;
                set_bool(false)
                console.log("ERROR!!!")
                
            }
            else{
                
                // console.log(await result[0].title);
                await set_search(result);

            }
            // await set_search(result);
        } catch (error) {
            console.error(error);
        }
        document.querySelector("#search_val").value = "";
        

        
    }
    return(
        <div>
        <div className='top_part'>
                    <div className="background"></div>
        <div className="container">
            <h1 className="main_heading">Book Keeping App</h1>
            <div className="search_box">
                <input type="text" placeholder="search by title" id="search_val"/>
                <div className='search_button'>
                    <button onClick={search_fun}><FaSearch style={{ color: 'peachpuff', fontSize: '30px' ,fontWeight: '100'}} /></button>
                </div>
                {/* <i id="search_icon" className="fa-solid fa-magnifying-glass search_icon"></i> */}
            </div>
            {/* <button onclicsk="clicked()" id="fetchDataBtn">Fetch Data</button>  */}
            {/* <div id="dataContainer"></div> */}

        </div>
        </div >
            <div className='results'>
                {
                    bool?search_res.map(e => {
                        // console.log(e.plot)
                        return( <Card plot={e.plot} genres={e.genres} cover={e.cover} id={e.book_id} key={e.book_id} title={e.title} first_name={e.author.first_name} middle_name={e.author.middle_name} last_name={e.author.last_name} rating={e.rating}/>
                        );
                        
                    }):null
                }
                {!bool?<div style={{fontSize:"50px", color:"peachpuff"}}>No Results Found</div>:null}

            </div>
        </div>

    )
}
export default Top_part;