import React from 'react'
import {useGlobalContext} from './context'
import CartItem from './CartItem'
const CartItemsContainer = () => {
    const {cart, total, clearCart, remove} = useGlobalContext()
    if(cart.length === 0){
        return(
            <section className="cart">
                <header>
                    <h2>Your Shopping Bag</h2>
                    <h4 className="empty-cart">Your Cart is empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>Your Shopping Bag</h2>
            </header>
            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} remove={remove} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4> total <span>${total}</span></h4>
                </div>
                <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            </footer>
        </section>
    )
}

export default CartItemsContainer