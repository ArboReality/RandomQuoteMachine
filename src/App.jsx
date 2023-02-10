import React from 'react';
// import axios from 'axios';

import './App.css'




export default function App() {
 
  
  const styles = {
    main: {
      backgroundColor: "black",
      color:"white"
    },
    wrapper: {
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "stretch",
      margin: "2rem", 
      padding: "1rem", 
    },
    button: {
      backgroundColor: "darkBlue", 
      color: "white",
      
    }
  }

  const QUOTES = [
    {
      quote: "Try not. Do or do not. There is no try.", 
      author: "Yoda",
      source: "Star Wars Episode V: The Empire Strikes Back"
    },{
      quote: "The ability to speak does not make you intelligent.", 
      author: "Qui-Gon Jinn",
      source: "The Phantom Menace"
    },{
      quote: "Many of the truths that we cling to depend on our viewpoint.", 
      author: "Obi-Wan Kenobi",
      source: "Star Wars Episode VI: Return Of The Jedi"
    },
  ]
  
  const generateQuote = () => {
  
    let quoteSize = QUOTES.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTES[randomIndex];
  
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=RandomQuoteMachine&related=freecodecamp&text=%22"
  
    //Add quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat
    //Add author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += "%22 - " + authorInApiFormat
  
    // let sourceInApiFormat = randomQuoteData.source.replace(/ /g, "%20")
  
    let shareTweetBtn = document.getElementById("tweet-quote")
    let quote = document.getElementById("text")
    let author = document.getElementById("author")
    // let source = document.getElementById("source")
  
  
    shareTweetBtn.href = twitterLink;
    quote.innerText = randomQuoteData.quote + "\n";
    author.innerText = " - " + randomQuoteData.author;
    // source.innerText = randomQuoteData.source;
  
  }

  
  
  return (
    <main style={styles.main} >
      <div id="quote-box" className="wrapper" style={styles.wrapper}>
        <p id="text"></p>
        <span id="author"></span> <br/>
        <button id="new-quote" onClick={generateQuote} style={styles.button}>New Quote</button>
        <a target="_blank" id="tweet-quote" href="#" className="twitter-share-button" data-show-count="false" data-size="large">Tweet</a> 
      </div>
    </main>
  )
}

