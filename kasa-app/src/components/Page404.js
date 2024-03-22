import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Image404 from "../assets/404.png";
import'../styles/Page404.scss';

export default function Page404() {
    return (
        <>
            <Header />
            <img className="Img-404" src={Image404} alt="404"></img>
            <div className='Texte404'>Oups! La page que vous demandez n'existe pas.</div>
            <Link to="" className='Link404'>Retourner sur la page d'accueil</Link>
            <Footer />
        </>
    )
}