import { useState } from "react";

import Text from "./text";
import Subheader from "./subheader";

function PasswordCheck(){
    const [special, setSpecial] = useState(0); // special character amount
    const [numbers, setNumbers] = useState(0); // number amount
    const [capital, setCapital] = useState(0); // capital letter amount
    const [lowercase, setLowercase] = useState(0);// lowercase amount
    const [lengthOf, setLength] = useState(0); // password length
    const [finalGrade, setGrade] = useState("Farlig"); // Final Password Grade
    const [showPoints, setPoints] = useState(0); // points
    const [warningMessage, setWarning] = useState("");
    const [lengthToAccept, setAcceptableLength] = useState(16)

    const SpecialCharacters = "~!@#$%^&*()_+=?/\"'¤`´¨;,:.-<>§|+{}\\"
    const commonPasswords = [
  "pass", "1234", "1235", "1111", "6969", "fuck", "1111",
  "0000", "aaaa", "love", "fuck", "biteme", "killer", "master", "monkey",
  "shadow", "dragon", "baseball", "football", "sunshine", "charlie", "computer",
  "password", "michelle", "freedom", "chelsea", "summer", "ginger", "maggie",
  "jessica", "amanda", "princess", "ashley", "nicole", "pepper", "soccer",
  "batman", "andrew", "tigger", "harley", "buster", "hunter", "jordan",
  "jennifer", "thomas", "robert", "daniel", "ranger", "george", "matrix",
  "austin", "dallas", "taylor", "access", "yankees", "thunder", "klaster",
  "starwars", "mustang", "michael", "letmein", "trustno1", "1qaz2wsx", "123qwe",
  "zxcvbnm", "asdfgh", "qazwsx", "qwerty", "zxcvbn", "131313", "121212", "123123",
  "123321", "112233", "777777", "666666", "696969", "555555", "159753", "111111",
  "7777777", "11111111", "123456", "1234567", "12345678", "123456789", "1234567890",
  "qwertyuiop", "abc123", "1qaz2wsx", "987654321", "654321", "123123", "123321",
  "qwerty", "asdfgh", "zxcvbn", "fuckyou", "fuckme", "pussy", "asshole", "superman",
  "iloveyou"
];



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
                    <p id="finalGradeBox">{finalGrade}</p>
                </div>
                <p className="forceRed" id="warningText">{warningMessage}</p>
                <div id="outerbox">
                    <div className="leftField box">
                        <p>Lengde: {lengthOf}</p>
                        <p>Symboler {special}</p>
                        <p>Tall: {numbers}</p>
                        <p>Store Bokstaver: {capital}</p>
                        <p>Små Bokstaver: {lowercase}</p>
                        <p>Total Poeng: {showPoints}</p>

                    </div>

                    <div className="rightField box">
                        <p>{lengthOf} / {lengthToAccept}</p>
                        <p>{special} / 1</p>
                        <p>{numbers} / 1</p>
                        <p>{capital} / 2</p>
                        <p>{lowercase} / 2</p>
                        <p>{showPoints} / 6</p>
                    </div>
                </div>
            </div>
        </section>
    )

    function HandleTyping(e){
        const finalGradeBox = document.getElementById("finalGradeBox");

        let tar = e.target.value;
        setLength(tar.length)
        setWarning("")
        
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

        // Set the final grade
        let points = 0;

        if(totalSpec > 0){ // Special Characters
            points += 1;
        }

        if(totalNumbers > 0){  // numbers 
            points += 1;
        }

        if(totalLetters[0] >= 2){ // LowerCase Letters
            points += 1;
        }
        if(totalLetters[1] >= 2){ // UpperCase Letters
            points += 1;
        }


        if(tar.length == 0){ // If the length is 0, display 0 Points
            points = 0;
        } 
        else{ // If the password is not 0 characters, then the normal password rules apply
            if(tar.length <= 6){ // If length is less than or equal to 6
                points -= 2; 
            } 
            else if(tar.length <= 8){ // Else if Password is shorter than or equal to 8 (7 or 8)
                points -= 1;
            } 
            else if(tar.length < 16){ // Else if Password is between the range of 9-15
                points += 1;
            }
            else if(tar.length >= 16){ // Else if Password is greater than or equal to 16 characters in length
                points += 2;
            }
        }

        if(tar.length < 20){
            for(let i = 0; i < commonPasswords.length; i++){ // Test if the password is in the most common used passwords
                let word = tar.toLowerCase();

                if(word.indexOf(commonPasswords[i]) !== -1) // If one of the common passwords are found in the password
                {
                    points = -50;
                    setWarning("Ditt passord inneholder minst et ord som ligger på listen av verdens mest brukte passord. Vurder å endre lengden av passordet, eller å bytte passord. (" + commonPasswords[i] + ")")
                    setAcceptableLength(20) // Bug : Break causes loop to end if any version of the word is found.
                }
                else{
                    setAcceptableLength(16)
                }
            }
        }

        // Set Grade
        if(points < 2){
            setGrade("Farlig")
            finalGradeBox.style.backgroundColor="#ff1e1e"; // Set to red
        }
        else if(points <= 4){
            setGrade("Litt Trygt")
            finalGradeBox.style.backgroundColor="orange" // Set to Orange 
        }
        else if(points == 5){
            setGrade("Trygt")
            finalGradeBox.style.backgroundColor="gold" // Set to Gold 
        }
        else if(points == 6){
            setGrade("Ekstremt Trygt")
            finalGradeBox.style.backgroundColor="#8dc63f" // set to Green
        }

        // Update all the states simultaneously
        setPoints(points);
        setNumbers(totalNumbers);
        setCapital(totalLetters[1])
        setLowercase(totalLetters[0])
        setSpecial(totalSpec);
    }
}

export default PasswordCheck;