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
            <div class="container">
                <h1 id="slogan"><b>Best phones ever</b></h1>
                <img src={home} id="homeImage"/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;