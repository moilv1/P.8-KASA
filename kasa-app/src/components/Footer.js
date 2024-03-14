import '../styles/Footer.scss';


import logo from '../assets/LOGO_footer.png';

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt='logo footer'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer