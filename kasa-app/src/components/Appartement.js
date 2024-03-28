import React from "react";
import '../styles/Appartement.scss';
import Dropdown from './Dropdown';
import LogementJson from '../logementsDATA/logements.json';
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Page404 from "./Page404";
import Caroussel from "./Caroussel";
import InfoLogement from "./InfoLogement";

export default function Appartement() {
    const { id } = useParams();
    const Data = LogementJson.find((element) => element.id === id)
    if (!Data) return <Page404 />

    return (

        <>
        <Header></Header>
        <Caroussel pictures={Data.pictures}></Caroussel>
        <InfoLogement></InfoLogement>
        <article className='LogementDropDownContainer'>
                <Dropdown title={"Description"} description={Data.description} />
                <Dropdown title={"Équipements"} description={
                    Data.equipments &&
                    Data.equipments.map((equipement, index) => {
                        return (
                            <ul className='equipements' key={equipement + index}>
                                <li>{equipement}</li>
                            </ul>
                        )
                    })
                } />
        </article>
        <Footer></Footer>
        </>
    )
}