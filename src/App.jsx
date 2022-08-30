import { useState } from 'react'
import Quotes from "./Frases.json"
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

const randomQuotes= Math.floor(Math.random() * Quotes.length)
const [ news, setNews] = useState(randomQuotes)

const changeButton = () => {
 const randomFunction = Math.floor(Math.random() * Quotes.length)
 setNews(randomFunction) 

}
 
const eachColors = ["#A62349", "#D07000", "#C55300", "#96E5D1", "#355764", "#5A8F7B", "#81CACF, FFEA11", "#2A0944","#3FA796","#FEC260", 
"#FFF89A","#FFC900", "#086E7D","#1A5F7A","#A10035"]

const reformColors = Math.floor(Math.random() * eachColors.length)
document.body.style = `background: ${eachColors[reformColors]}`


 return (
   <div className="App">
     <div className='card' style={{color: eachColors[reformColors] }}>
       
     <p> <i class="fa-solid fa-comment-dots"></i> {Quotes[news].quote} </p>
     <h3> {Quotes[news].author} </h3>
     <button onClick={changeButton}><i class="fa-solid fa-angle-right"></i> </button>

     </div>


   </div>
 )
}

export default App