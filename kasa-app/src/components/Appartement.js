import React from "react";
import LogementJson from '../logementsDATA/logements.json';
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Page404 from "./Page404";

export default function Appartement() {
    const { id } = useParams();
    const Data = LogementJson.find((element) => element.id === id)
    if (!Data) return <Page404 />

    return (

        <>
        <Header></Header>





        <Footer></Footer>
        </>
    )
}