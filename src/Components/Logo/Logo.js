import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Img/logoImg.png'

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img src={img} alt="logo" width={40} />
      </Link>
        
    </div>
  )
}

export default Logo