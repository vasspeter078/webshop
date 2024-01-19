import './Header.css';
import { Link } from 'react-router-dom';
import GSMLogo from '../gsmlogo.png';

function Header() {
    return (
        <header className='Header'>
            <Link to="/">
                <img src={GSMLogo}/>
            </Link>
        </header>
    );
}

export default Header;