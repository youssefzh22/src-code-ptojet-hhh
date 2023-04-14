import React from "react";

import { Route, Routes } from "react-router-dom";
import Features from "./Features";
import Contact from "./Contact";
import Nav from "./Nav";


function AppRouting(){
    return(
        <React.Fragment>
            <h1>Bonjour</h1>
            <h2>WINNERS </h2>
            <Nav/>
            <Routes>
               
                <Route path="/features" element={< Features />}></Route>
                <Route path="/contact" element={< Contact />}></Route>



            </Routes>

        </React.Fragment>








    )






}
export default AppRouting
