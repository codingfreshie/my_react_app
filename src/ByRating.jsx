import './index.css';
import Card from "./card";
import { useState } from 'react';





function ByRating(){
    const [books,setbooks] = useState([])
    const url = 'https://books-api7.p.rapidapi.com/books/find/rating?lte=5&gte=3.5&p=1';
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': 'b564655ea0msh27f96c4fa384b4ep153e14jsn666b214c20b4',
  // 		'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
  // 	}
  // };
  fetch(url,{
    "method" : "GET",
    "headers":{
      "x-rapidapi-host": "books-api7.p.rapidapi.com",
      "x-rapidapi-key":'b564655ea0msh27f96c4fa384b4ep153e14jsn666b214c20b4'
    }
  })
  .then(Response => Response.json())
  .then(Response => {
    // console.log(Response+ "hi");
    setbooks(Response);
    // console.log(books)
    // result = Response;
    // const new_result = Response.map((e) => {
    //   const {book_id,title}=e
    //   return{
    //           id:book_id,
    //           title:title
    //         }
  
    // })
    // console.log(new_result)
    // setbooks(new_result);
    // console.log(books);
    
    // console.log(Response);
    // console.log(result)
    // console.log(Response.text);
  })
  // .then(() =>{
  //   var card= []
  //   const new_result = result.map((e) => {
  //     // console.log("hi")
  //     // var i =0;
  //     // var title = e.title;
  //     // var first_name = e.author.first_name;
  //     // var middle_name = e.author.middle_name;
  //     // var last_name = e.author.last_name;
  //     // var rating = e.rating;
  //     // console.log(title);
  //     // card[i] =  <Card title={title} first_name={first_name} middle_name={middle_name} last_name={last_name} rating={rating}/>
  //     // i++
  
  //     // return(
  //     //   <Card title={title} first_name={first_name} middle_name={middle_name} last_name={last_name} rating={rating}/>
        
  //     // )
  //     const {book_id,title}=e
  //     return{
  //       id:book_id,
  //       title:title
  //     }
      
  //     })
  //     setbooks(new_result);
  //     // console.log(books)
      
  //       books.map((e)=>{
  //         return (
  //         <Card title={e.title} />
  //         )
  //       })
      
    
  // })
  .catch(err => {
    console.log(err);
  });
  
      //   function First_card(){
      
      //     result.map((e) => {
      //       console.log("hi")
      //       var title = e.title;
      //       var first_name = e.author.first_name;
      //       var middle_name = e.author.middle_name;
      //       var last_name = e.author.last_name;
      //       var rating = e.rating;
      //       console.log(title);
      //       return 0;
      //       // return(
      //       //   <Card title={title} first_name={first_name} middle_name={middle_name} last_name={last_name} rating={rating}/>
              
      //       // )
            
      
      //     })
    
      // }
      // First_card()
      console.log(books)
  return(
    <div className='results'>
      {
        books.map(e => {
          return( <Card plot={e.plot} genres={e.genres} title={e.title} first_name={e.author.first_name} middle_name={e.author.middle_name} last_name={e.author.last_name} rating={e.rating}/>
          );
          
        })
      }
    </div>
  
      
    
  );
  
  
  
  }
  
  export default ByRating;