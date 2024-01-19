import './Shopping.css';
import Header from '../components/Header.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import Body from '../components/Body.js';
import { useLocation } from 'react-router-dom';

function Shopping() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const decodedQuery = decodeURIComponent(query || '');
    return(
        <>
            <Header/>
            <Nav/>
            <Body query={decodedQuery}/>
            <Footer/>
        </>
    );
}

export default Shopping;