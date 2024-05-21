import './Body.css';
import { data } from '../data.js';
import { searchByText } from '../data.js';
import Product from './Product.js';
import { useState, useEffect } from 'react';

import Iphone15 from '../iphone15.png';
import SamsungS23 from '../samsungs23.png';
import XiaomiRedmiNote12 from '../xiaomiredminote12.png';
import SamsungGalaxyA54 from '../samsunggalaxya54.png';
import MacBookAir13 from '../macbookair13.png';
import ASUSROGStrix17 from '../asusrogstrixg17.png';
import DellInspiron3511 from '../dellinspiron3511.png';
import AirPods2 from '../airpods2.png';
import SonyWH1000XM4 from '../sonywh-1000xm4.png';

const getProducts = async() => {
    const response = await fetch(`http://localhost:5000/api/product`);
    const data = await response.json();
    let dataSet = mapImages(data.products);
    return dataSet;
}

const getFilteredProducts = async(searchTerm) => {
    const response = await fetch(`http://localhost:5000/api/product/filter-by-name/${searchTerm}`);
    const data = await response.json();
    let dataSet = mapImages(data.products);
    return dataSet;
}

function mapImages(dataSet) {
    console.log(dataSet.length);
    for (let i = 0; i < dataSet.length; ++i) {
        console.log(dataSet[i].image);
        switch(dataSet[i].image) {
            case "iphone15":
                dataSet[i].image = Iphone15;
                break;  
            case "samsungs23":
                dataSet[i].image = SamsungS23;
                break;  
            case "xiaomiredminote12":
                dataSet[i].image = XiaomiRedmiNote12;
                break;  
            case "samsunggalaxya54":
                dataSet[i].image = SamsungGalaxyA54;
                break;
            case "macbookair13":
                dataSet[i].image = MacBookAir13;
                break;   
            case "asusrogstrix17":
                dataSet[i].image = ASUSROGStrix17;
                break; 
            case "dellinspiron3511":
                dataSet[i].image = DellInspiron3511;
                break;         
            case "airpods2":
                dataSet[i].image = AirPods2;
                break;  
            case "sonywh1000xm4":
                dataSet[i].image = SonyWH1000XM4;
                break;  
        }
    }
    return dataSet;
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
        <div className="product-container">
            {filteredData.map((product) => <Product image={product.image} name={product.name} price={product.price} id={product.id}/>)}
        </div>
    );
}

export default Body;