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
    const SpecialCharacters = "~!@#$%^&*()_+=?/\"'¤`´¨;,:.-<>§|"

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
        let tar = e.target.value;
        setInput(tar);
        setLength(tar.length)
        
        let totalNumbers = 0; // Check for numbers
        let totalLetters = [0/* lowerCase */, 0 /* upperCase */]
        let totalSpec = 0;
        for(let i = 0; i < tar.length; i++){ // Loop through the string to find special characters
            if(!isNaN(tar[i])){ // If the Character of i is a number, add to the totalNums variable.
                totalNumbers += 1; // add to the variable
            } 
            else // if the character isn't a number 
            {
                if(SpecialCharacters.indexOf(tar[i]) !== -1) // check if the character is a special character
                {
                    totalSpec += 1;
                }
                else if(tar[i] === tar[i].toUpperCase()) // if the character is text and uppercase
                {
                    totalLetters[1] += 1;
                }
                else{
                    totalLetters[0] += 1; // If the character is text and lowercase
                }
            }

        }

        // Update all the states simultaneously
        setNumbers(totalNumbers);
        setCapital(totalLetters[1])
        setLowercase(totalLetters[0])
        setSpecial(totalSpec);
    }
}

export default PasswordCheck;