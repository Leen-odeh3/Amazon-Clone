import React from 'react'
import './Subtotal.scss'
import { basket } from '../../data/cart'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {

    const navigate =useNavigate();

  return (
    <div className='all-pro'>
     <div>
        <span>Subtotal </span>
        <span>({basket.length}) items :</span>
        <span>{basket.reduce((acc,cur)=> acc + cur.price, 0)}</span>
     </div>
     <div>
        <input type="checkbox" id="label"/>
        <label for="label">This order contains a gift</label>
        <button onClick={()=>navigate("/payment")}>Proceed to Checkout</button>
     </div>
    </div>
  )
}

export default Subtotal
