import { useState } from "react";

import Text from "./text";
import Subheader from "./subheader";

function PasswordCheck(){
    const [inputfield, setInput] = useState(""); // user input
    const [special, setSpecial] = useState(0); // special character amount
    const [numbers, setNumbers] = useState(0); // number amount
    const [capital, setCapital] = useState(0); // capital letter amount
    const [lowercase, setLowercase] = useState(0);// lowercase amount
    const [lengthOf, setLength] = useState(0); // password length
    const [finalGrade, setGrade] = useState("Farlig Usikkert Passord");

    return (
        <section id="passwordCheckSect">
            <Subheader name="Sjekk Passordene Dine"></Subheader>
            <Text txt="Nettvett har utviklet en passordsjekker, som gir en karakter tilbake basert på hvor sterkt passordet er, og hva som kan gjøre passordet sterkere."></Text>

            <div id="Checker">
                
                <Subheader name="Analyser et Passord" id="subheaderAnalyze"></Subheader>

                <div id="passwordField">
                    <input 
                    type="text"
                    placeholder="Passord"
                    onChange={HandleTyping}></input>
                    <p>{finalGrade}</p>
                </div>
                
                <div id="outerbox">
                    <div className="leftField box">
                        <p>Lengde: {lengthOf}</p>
                        <p>Symboler {special}</p>
                        <p>Tall: {numbers}</p>
                        <p>Store Bokstaver: {capital}</p>
                        <p>Små Bokstaver: {lowercase}</p>

                    </div>

                    <div className="rightField box">
                        <p>test</p>
                    </div>
                </div>
            </div>
        </section>
    )

    function HandleTyping(e){
        let tar = e.target
        setInput(tar.value);
        setLength(tar.value.length)
    }
}

export default PasswordCheck;