import logo from '../assets/LOGO.jpg';
import '../styles/Header.scss'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
    <header>
        <img src={logo} alt='Logo Kasa' className='logo-header' />
        <nav>
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to="/About" >A propos</NavLink> 
        </nav>
    </header>
    );
}

export default Header;