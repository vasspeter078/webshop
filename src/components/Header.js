import './Header.css';
import { Link } from 'react-router-dom';
import GSMLogo from '../gsmlogo.svg';

function Header() {
    return (
        <header className='Header'>
            <Link to="/">
                <img src={GSMLogo} class="logo"/>
            </Link>
        </header>
    );
}

export default Header;