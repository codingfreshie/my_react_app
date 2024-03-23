import './index.css';
import Card from "./card";
import { useState } from 'react';




function Byfantasy(event) {
    const [books,setbooks] = useState([]);
    const [toggle,settoggle] = useState(true);
  
    function Byrate1() {
      // const rate = ReactDOM.createRoot(document.querySelector('.rate'));
    // rate.render(
    //   <ByRating />
    // )
    const url = 'https://books-api7.p.rapidapi.com/books/find/genres?genres%5B%5D=fantasy&genres%5B%5D=fiction';
    fetch(url,{
      "method" : "GET",
      "headers":{
        "x-rapidapi-host": "books-api7.p.rapidapi.com",
        "x-rapidapi-key":'b564655ea0msh27f96c4fa384b4ep153e14jsn666b214c20b4'
      }
    })
    .then(Response => Response.json())
    .then(Response => {
      console.log(Response+ "hi");
      setbooks(Response);
      settoggle(!toggle);
    })
    .catch(err => {
      console.log(err+"hiiiiiii");
    });
    console.log(books)
    }
    
    return(
      <div className='booktype'>
      <button className='testing' onClick={Byrate1}>Fantasy Books</button> 
      <div className='results rate '  style={toggle?{display:"none"}:{}}>
      {
          books.map(e => {
            return( <Card plot={e.plot} genres={e.genres} id={e.book_id}  cover={e.cover} key={e.book_id} title={e.title} first_name={e.author.first_name} middle_name={e.author.middle_name} last_name={e.author.last_name} rating={e.rating}/>
            );
            
          })
        }
      </div>
      </div>
  
    )
    // return(
    //   <div className='results'>
    //     {
    //       books.map(e => {
    //         return( <Card title={e.title} first_name={e.author.first_name} middle_name={e.author.middle_name} last_name={e.author.last_name} rating={e.rating}/>
    //         );
            
    //       })
    //     }
    //   </div>
    // )
  
  
    
  }
  export default Byfantasy;