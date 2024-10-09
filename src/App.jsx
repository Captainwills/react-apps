import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import buyimg from './assets/buy.png'
import sellimg from './assets/sell.png'
import stakeimg from './assets/pools.png'
import Markets from './Components/Markets.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 class="Goggi">GOGGI</h1>
      <h3 class="h3">Your One Stop Trusted Crypto Exchange for Meme coins!</h3>
    
    <div class= "market-items" > 
      
    <Markets className="buys"
      image ={buyimg}
      title="BUY"
      description="Bag some Goggi coins here"/>
     
      <Markets className="sell"
      image={sellimg}
      title="SELL"
      description="Sell of your Goggi Coins for stables"/>      
     
     <Markets className="stake"
      image={stakeimg} 
      title="STAKE"
      description="Stake to earn Goggi coins"/>

    
      
  
    </div>
    </>

  )
}

export default App
