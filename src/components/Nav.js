import './Nav.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigate = useNavigate();
    function clickMobile(e) {
        e.preventDefault();
        navigate(`/shopping?query=${encodeURIComponent("mobile")}`);
    }
    function clickLaptop(e) {
        e.preventDefault();
        navigate(`/shopping?query=${encodeURIComponent("laptop")}`);
    }
    function clickEarphones(e) {
        e.preventDefault();
        navigate(`/shopping?query=${encodeURIComponent("earphones")}`);
    }
    function clickAccessory(e) {
        e.preventDefault();
        navigate(`/shopping?query=${encodeURIComponent("accessory")}`);
    }
    return (
        <nav className='Nav'>
            <button className='NavItem' onClick={clickMobile}>Mobile</button>
            <button className='NavItem' onClick={clickLaptop}>Laptop</button>
            <button className='NavItem' onClick={clickEarphones}>Headphones, earphones</button>
            <button className='NavItem' onClick={clickAccessory}>Accessory</button>
            <SearchBar/>
            <Link to='/cart'>
                <svg data-name="Capa 1" id="Capa_1" height="50" viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="0.75"><path d="M15.12,8.28a2,2,0,0,0-1.36-.68h-.52L11.8,4a.4.4,0,1,0-.74.28L12.39,7.6H6.17L7.49,4.24A.39.39,0,1,0,6.76,4L5.32,7.6H4.83a1.45,1.45,0,0,0-.28,0A1.94,1.94,0,0,0,3.09,10l.74,4.42A1.85,1.85,0,0,0,5.6,16h7.45a1.84,1.84,0,0,0,1.74-1.63L15.53,10a2.51,2.51,0,0,0,0-.27A2,2,0,0,0,15.12,8.28Zm-.37,1.54L14,14.28a1.08,1.08,0,0,1-1,1H5.62a1.07,1.07,0,0,1-1-1L3.87,9.79a1.14,1.14,0,0,1,.85-1.37l.14,0h8.87a1.16,1.16,0,0,1,1,1.24A.74.74,0,0,1,14.75,9.82Z"/><path d="M6.8,10.2a.4.4,0,0,0-.39.4v2.65a.4.4,0,1,0,.79,0V10.6A.4.4,0,0,0,6.8,10.2Z"/><path d="M9.27,10.2a.39.39,0,0,0-.39.4v2.65a.39.39,0,0,0,.39.4.4.4,0,0,0,.4-.4V10.6A.4.4,0,0,0,9.27,10.2Z"/><path d="M11.74,10.2a.4.4,0,0,0-.4.4v2.65a.4.4,0,0,0,.4.4.39.39,0,0,0,.39-.4V10.6A.39.39,0,0,0,11.74,10.2Z"/></svg>
            </Link>
        </nav>
    );
}

export default Nav;