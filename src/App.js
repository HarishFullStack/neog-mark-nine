import "./styles.css";
import './App.css';
import React, { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

function App() {
  const [selectedGenre, setGenre] = useState("javascript");

  function emojiInputHandler(value) {
    setGenre(value);
  }

    return (
      <div className="App">
        <div>
          <h1 style={{textAlign: "center"}}> 📚 goodbooks</h1>
          <p style={{fontSize: "smaller", textAlign: "center"}}>Checkout my favorite books. Select a genre to get started.</p>
        </div>
        <div className="row col-md-12">
          <div className="col-md-2">
            {Object.keys(bookDB).map((genre)=>(
              <button className='btn btn-primary' onClick={()=>emojiInputHandler(genre)}>{genre}</button>
            ))}
          </div>
          <div className="col-md-1 vl"></div>
          <div className="col-md-8" style={{textAlign: "left"}}>
            <ul >
              {bookDB[selectedGenre].map((book)=>(
                <li className="row d-inline-flex" style={{listStyle: "none"}}>
                <div className="m-0" style={{fontSize: "larger"}}>{book.name}</div>
                <div style={{ fontSize: "smaller" }}>{book.rating} </div>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default App;
