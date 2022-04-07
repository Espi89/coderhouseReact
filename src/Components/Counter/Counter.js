import React from 'react'
/* import Button from '@mui/material/Button'; */

import './Counter.css'

const Counter = () => {
  return (
    <div className='counterBody'>
        <div>
          <button className='buttonUpDown'>-</button>
        </div>

        <div className='fieldNumber'>
          05
        </div>

        <div>
        <button className='buttonUpDown'>+</button>
        </div>
    </div>
  )
}

export default Counter;