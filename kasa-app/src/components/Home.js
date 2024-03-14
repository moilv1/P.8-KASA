import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Logements from "./Logements";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
        <Header></Header>
        <Intro></Intro>
        <Logements></Logements>
        <Footer></Footer>
        </>
    )
}