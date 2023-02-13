import React, {useState, useEffect} from 'react';
// import axios from 'axios';

import './App.css'
import { generateQuote } from './components/quotegenerator'
import { styles } from './components/styles'


export default function App() {

  const [quote, setQuote] = useState('');

  useEffect(() => {
    generateQuote()
  });


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

