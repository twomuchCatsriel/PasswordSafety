import { useState } from "react";

import Text from "./text";
import Subheader from "./subheader";

function PasswordCheck(){
    return (
        <section id="passwordCheckSect">
            <Subheader name="Sjekk Passordene Dine"></Subheader>
            <Text txt="Nettvett har utviklet en passordsjekker, som gir en karakter tilbake basert på hvor sterkt passordet er, og hva som kan gjøres bedre."></Text>

            <div id="Checker">
                
                <Subheader name="Analyser et Passord" id="subheaderAnalyze"></Subheader>

                <div id="passwordField">
                    <input type="text" placeholder="Passord"></input>
                    <p>Farlig Usikkert Passord</p>
                </div>
                
                <div id="outerbox">
                    <div className="leftField box">

                    </div>

                    <div className="rightField box">
                        <p>test</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PasswordCheck;