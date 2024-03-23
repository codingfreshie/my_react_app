import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Top_part from "./top_part";
// import ByRating from "./ByRating";
import Card from "./card";
import { useEffect } from 'react';
import { useState } from 'react';
import Byrate from './Byrate';
import ByFantasy from './Byfantasy';
import BookDetails from './BookDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // // <App />
  <div>
    {/* <h1>hiii</h1>
    <App /> */}
    <Top_part />
    {/* <Card title={title} first_name={first_name} middle_name={middle_name} last_name={last_name} rating={rating}/> */}
  </div>
);




root.render(
  <div>
    <Top_part />
    {/* <h1 className='testing'>Top Rated Books</h1>  */}
    <div className='peach'>
    <Byrate />
    <ByFantasy />
    </div>
    {/* <BookDetails /> */}
    
    {/* <div className='results'>
      <ByRating />
    </div> */}
    {/* <h1>Fantasy Related Books</h1> */}
    <div className='results fant'>
      {/* <ByFantasy /> */}
    </div>
    
    <h1></h1>
    {/* <First_card /> */}
    {/* {
      result.map((e) => {
        var title = e.title;

      })
    } */}
  </div>

)
// var testing = document.querySelector(".testing");





