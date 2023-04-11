import { useState } from 'react'
import Card from './card'
import './App.css'

function App() {
  const [card, setCard] = useState([{value: 9, color: 'yellow'},{value: 6, color: 'blue'},{value: 1, color: 'green'},{value: "r"}])

  return (
    <div className="App">
      {card.map((card) => {
        return <Card key={card.value + card.color} card={card} /> 
      })}
    </div>
  )
}

export default App
