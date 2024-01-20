import './Cart.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App.js';
import PurchaseProduct from '../components/PurchaseProduct.js';

function Cart() {
    const [updateState, setUpdateState] = useState(false);
    const cart = useContext(CartContext);
    
    function calculateCost() {
        let totalCost = 0;
        for (let i = 0; i < cart.length; ++i) {
            totalCost += cart[i].price;
        }
        return totalCost;
    }
    useEffect(
        () => {
            setUpdateState(false);
        },
        [updateState]
    );
    if (cart.length == 0) {
        return (
            <>
                <Header/>
                <p id="nothingFound">There are no items in the cart</p>
                <h2>Total cost: {calculateCost()}Ft</h2>
                <Footer/>
            </>
        );
    }
    return (
        <>
            <Header/>
            {cart.map((product) => <PurchaseProduct image={product.image} name={product.name} price={product.price} id={product.id} setUpdateState={setUpdateState}/>)}
            <h2>Total cost: {calculateCost()}Ft</h2>
            <button id="paymentButton">Pay</button>
            <Footer/>
        </>
    );
}

export default Cart;