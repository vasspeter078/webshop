import './Body.css';
import { data } from '../data.js';
import { searchByText } from '../data.js';
import Product from './Product.js';
import { useState, useEffect } from 'react';

const getProducts = async() => {
    const response = await fetch(`http://localhost:5000/api/product`);
    const data = await response.json();
    return data.products;
}

const getFilteredProducts = async(searchTerm) => {
    const response = await fetch(`http://localhost:5000/api/product/filter-by-name/${searchTerm}`);
    const data = await response.json();
    return data.products;
}

function Body(props) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const products = await getProducts();
                setFilteredData(products);
            }
            catch (error){
                console.log(error);
            }
        }
        fetchProducts();

    }, [])
    useEffect(() => {
        if (props.query != "") {
            const fetchProducts = async () => {
                try{
                    const products = await getFilteredProducts(props.query);
                    setFilteredData(products);
                }
                catch (error){
                    console.log(error);
                }
            }
            fetchProducts();
        } else {
            const fetchProducts = async () => {
                try{
                    const products = await getProducts();
                    setFilteredData(products);
                }
                catch (error){
                    console.log(error);
                }
            }
            fetchProducts();
        }
    }, [props.query])
    /*
    //let filteredData = [];
    if (props.query != "") {
        //filteredData = searchByText(props.query);
        
        fetch(`http://localhost:5000/api/product/filter-by-name/${props.query}`)
        .then(response => response.json())
        .then(data => {//console.log(data); 
            setFilteredData(data.products);})
        .catch(error => console.error(error));
        //console.log(filteredData);
        

    } else {
        //filteredData = data;
        
        fetch(`http://localhost:5000/api/product`)
        .then(response => {response.json(); console.log(response.json());})
        .then(data => {//console.log(data);
            setFilteredData(data.products);
            //console.log(filteredData);
        })
        .catch(error => console.error(error));
        
    }
    */
    console.log(filteredData);
    if (filteredData.length === 0 || !filteredData) {
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