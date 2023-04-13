import { useState } from 'react'
import Card from './card'
import './App.css'

function App() {
  const [card, setCard] = useState([{value: 9, color: 'yellow'},{value: 6, color: 'blue'},{value: 1, color: 'green'},{value: "r"}])

  function randomCard() {
    let num = (Math.floor(Math.random() * 9) + 1)
    let color = (Math.floor(Math.random() * 4) + 1)

    function colorPick() {
    switch(color) {
        case 1 :
          return 'red'
          break;
        case 2 :
          return 'blue'
          break;
        case 3 :
          return 'yellow'
          break;
        case 4 :
          return 'green'
          break;
        default:
          return 'something went wrong'
      }
    }

    let newCard = {
      value: num,
      color: colorPick()
    }

    // const newSetOfCard = card.push(newCard)
    setCard([...card, newCard])
    // return newCard;
  }
  // randomCard()
  // console.log(...card)

  return (
    <>
    <button onClick={() => randomCard()}>Pick a card</button>
    <div className="App first">
      <div className='player'>
        {card.map((card) => {
          return <Card key={card.value + card.color} card={card} /> 
        })}
      </div>
    </div>
    </>
  )
}

export default App
