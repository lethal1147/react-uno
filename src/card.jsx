import { useState } from 'react'
import './card.css'

function Card({card}) {

    function findColor() {
        switch(card.color) {
            case 'red':
                return 'card red'
                break;
            case 'blue':
                return 'card blue'
                break;
            case 'green':
                return 'card green'
                break;
            case 'yellow':
                return 'card yellow'
                break;
            default:
                return 'card'
                break;
        }
    }
    // console.log(typeof card.value)

    return (
        <div className={findColor()}>
            <p className='child left'>{card.value}</p>
            <div className='circle'>
                {typeof card.value === 'string' && <h2>{card.value}</h2>}
                {typeof card.value === 'number' && <h2>{card.value}</h2>}
            </div>
            <p className='child right'>{card.value}</p>
        </div>
      )
}

export default Card;