import { useState,useEffect } from 'react'
import { Navbar, Quotes, GenerateQuote, Footer } from './components'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([{
    quote:"",
    author:"",
    category:""
  }]);
  const apiKey =import.meta.env.VITE_API_KEY;

    const fetchQuote=async()=>{
    const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      console.log(response);
      const result = await response.json();
      

       setQuotes(result);

       console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
  <main className='flex flex-col p-10 items-center justify-center'>
    <Navbar />
    <Quotes quote={quotes[0].quote} author={quotes[0].author}/>
    <GenerateQuote handleClick={fetchQuote} />
    <Footer/>
  </main>
  )
}

export default App
