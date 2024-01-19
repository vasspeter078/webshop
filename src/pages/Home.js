import './Home.css';
import Header from '../components/Header.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import home from '../home.jpg';

function Home() {
    return(
        <>
            <Header/>
            <Nav/>
            <img src={home}/>
            <Footer/>
        </>
    );
}

export default Home;