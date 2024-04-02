import '../styles/Footer.scss';
import React from 'react';
import logo from '../assets/LOGO_footer.png';

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt='logo footer'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

