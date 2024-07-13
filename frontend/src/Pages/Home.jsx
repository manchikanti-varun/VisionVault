import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/New_collections";
import Newsletter from "../Components/NewsLetter/News_letter";

const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections /> 
            <Newsletter/>
        </div>
    );
}

export default Home;
