import { useState,useEffect } from 'react';
import './App.css';

function App() {

    const [a,setA] = useState();

  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then((res)=>{
          
        })
        

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
