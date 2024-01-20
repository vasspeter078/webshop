import './PurchaseProduct.css';
import { useContext, useEffect } from 'react';
import { CartContext } from '../App.js';

function PurchaseProduct(props) {
    const cart = useContext(CartContext);
    useEffect(
        () => {
            console.log("product deleted");
        },
        [cart]
    );
    function click(e) {
        let index = -1;
        for (let i = 0; i < cart.length; ++i) {
            if (cart[i].id === props.id) {
                index = i;
            }
        }
        if (index != -1) {
            cart.splice(index, 1);
        }
        props.setUpdateState(true);
    }
    return (
        <div>
            <img src={props.image}></img>
            <p>{props.name}</p>
            <p><b>{props.price} Ft</b></p>
            <button type='button' id="deleteButton" onClick={click}>Delete</button>
        </div>
    );
}

export default PurchaseProduct;