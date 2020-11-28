import React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {useGlobalContext} from './context'
const CartItem = ({id, title, price, img, amount, remove}) => {
    const {increase, decrease} = useGlobalContext()
    return (
    <div className="cart-item">
        <img src={img} alt="image" />
        <div>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
            <button className="remove-btn" onClick={()=> remove(id)}>remove</button>
        </div>
        <div className="btn-container">
            <button className="amount-btn" onClick={()=> increase(id)}>
                <FaAngleUp />
            </button>
            <p>{amount}</p>
            <button className="amount-btn" onClick={()=> decrease(id)}>
                <FaAngleDown />
            </button>
        </div>
    </div>
    )
}
export default CartItem