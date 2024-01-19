import './Product.css';
import { useContext } from 'react';
import { CartContext } from '../App.js';

function Product(props) {
    const cart = useContext(CartContext);
    function click(e) {
        cart.push(props);
    }
    return (
        <div>
            <img src={props.image}></img>
            <p>{props.name}</p>
            <p><b>{props.price} Ft</b></p>
            <button type='button' id="purchaseButton" onClick={click}>Purchase</button>
        </div>
    );
}

export default Product;