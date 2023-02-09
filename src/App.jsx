import './App.css'

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    margin: "2rem", 
    padding: "1rem", 
  },
  button: {
    width: 80,
  }
}

export default function App() {
  return (
    <main >
      <div id="quote-box" style={styles.wrapper}>
        <p id="text">Lorem ipsum</p>
        <span id="author">-someone</span>
        <button id="new-quote" style={styles.button}>New Quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" >Share on twitter</a>
      </div>
      
    </main>
  )
}
