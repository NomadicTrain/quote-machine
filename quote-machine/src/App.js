import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

function App() {
  const [quote, setQuote] = useState(quotes[0].text);
  const [author, setAuthor] = useState(quotes[0].author);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div id="quote-box" style={{textAlign: 'center', width: '450px', padding: '40px', borderRadius: '10px', backgroundColor: '#f9f9f9'}}>
        <div id="text" style={{fontSize: '1.5em', marginBottom: '20px'}}>"{quote}"</div>
        <div id="author" style={{fontSize: '1.2em', marginBottom: '30px'}}>- {author}</div>
        <button id="new-quote" onClick={getNewQuote} style={{padding: '10px 20px', fontSize: '1em', cursor: 'pointer'}}>New Quote</button>
        <a 
          id="tweet-quote" 
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{marginLeft: '10px', padding: '10px 20px', fontSize: '1em', textDecoration: 'none', color: 'blue'}}
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;