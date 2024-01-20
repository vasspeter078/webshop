import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBar() {
    const [inp, setInp] = useState("")
    const navigate = useNavigate();
    function click(e) {
        e.preventDefault();
        navigate(`/shopping?query=${encodeURIComponent(inp)}`);
    }
    return (
        <span>
            <form className='NavForm' onSubmit={click}>
                           
                <button type="submit">
                    <svg class="feather feather-search" fill="none" height="13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
                </button>
                
                <input type='text' placeholder='Search...' onChange={(e) => setInp(e.target.value)} value={inp}></input>
            </form>
        </span>
    );
}

export default SearchBar;