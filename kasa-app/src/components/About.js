import Img_About from '../assets/Logo_About.jpg';
import Header from "./Header";
import Footer from "./Footer";
import '../styles/About.scss';


export default function About(){
    return(
        <>
         <Header></Header>
         <img className='Img-About' src={Img_About} alt='Paysage de la page "About"'></img>
         <Footer></Footer>
        </>
    )
}