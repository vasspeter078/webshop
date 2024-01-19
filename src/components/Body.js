import './Body.css';
import { data } from '../data.js';
import { searchByText } from '../data.js';
import Product from './Product.js';

function Body(props) {
    
    let filteredData = [];
    if (props.query != "") {
        filteredData = searchByText(props.query);
    } else {
        filteredData = data;
    }
    if (filteredData.length == 0) {
        return (
            <p id="nothingFound">We could not find anything for "{props.query}"</p>
        );
    }
    return (
        <>
            {filteredData.map((product) => <Product image={product.image} name={product.name} price={product.price} id={product.id}/>)}
        </>
    );
}

export default Body;