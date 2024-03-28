import Img_About from '../assets/Logo_About.jpg';
import Header from "./Header";
import Footer from "./Footer";
import Dropdown from './Dropdown';
import '../styles/About.scss';


export default function About(){
    return(
        <>
         <Header></Header>
         <img className='Img-About' src={Img_About} alt='Paysage de la page "About"'></img>
         
         <article className='test'>
         <Dropdown 
         title={"Fiabilité"} 
         description={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}
         />

         <Dropdown 
         title={"Respect"}
         description={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
         />

         <Dropdown
         title={"Service"}
         description={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
         />

         <Dropdown
         title={"Sécurité"}
         description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
         />
         </article>
    
         <Footer></Footer>
        </>
    )
}