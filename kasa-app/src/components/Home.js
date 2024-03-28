import React from "react";
import Header from "./Header";
import Logements from "./Logements";
import Footer from "./Footer";
import '../styles/index.scss';
import Banniere from "./Banniere";

export default function Home() {
    return (
        <>
        <Header></Header>
        <Banniere></Banniere>
        <Logements></Logements>
        <Footer></Footer>
        </>
    )
}