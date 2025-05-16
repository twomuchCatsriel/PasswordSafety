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
    const SpecialCharacters = "~!@#$%^&*()_+=?/\"'¤`´¨;,:.-<>§|+"
    const commonPasswords = [
  "123456", "password", "12345678", "qwerty", "123456789",
  "12345", "1234", "111111", "1234567", "dragon",
  "123123", "baseball", "abc123", "football", "monkey",
  "letmein", "696969", "shadow", "master", "666666",
  "qwertyuiop", "123321", "mustang", "1234567890", "michael",
  "654321", "pussy", "superman", "1qaz2wsx", "7777777",
  "fuckyou", "121212", "000000", "qazwsx", "123qwe",
  "killer", "trustno1", "jordan", "jennifer", "zxcvbnm",
  "asdfgh", "hunter", "buster", "soccer", "harley",
  "batman", "andrew", "tigger", "sunshine", "iloveyou",
  "fuckme", "2000", "charlie", "robert", "thomas",
  "hockey", "ranger", "daniel", "starwars", "klaster",
  "112233", "george", "asshole", "computer", "michelle",
  "jessica", "pepper", "1111", "zxcvbn", "555555",
  "11111111", "131313", "freedom", "777777", "pass",
  "fuck", "maggie", "159753", "aaaaaa", "ginger",
  "princess", "joshua", "cheese", "amanda", "summer",
  "love", "ashley", "6969", "nicole", "chelsea",
  "biteme", "matthew", "access", "yankees", "987654321",
  "dallas", "austin", "thunder", "taylor", "matrix"
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
                        <p>{lengthOf} / 14</p>
                        <p>{special} / 1</p>
                        <p>{numbers} / 1</p>
                        <p>{capital} / 2</p>
                        <p>{lowercase} / 2</p>
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

        if(tar.length <= 4){ // Less than 4 characters
            points -= 1;
        }
        if(tar.length < 8){ // Less than 8 characters
            points -= 1;
        }
        
        if(tar.length >= 8){ // 8 or More 
            points += 1;
        }
        if(tar.length >= 14){ // 14 or More
            points += 1;
        }

        if(commonPasswords.includes(tar.toLowerCase())){ // If password is among the global top 100 most used passwords
            points = 0;
        }

        // Set Grade
        if(points < 2){
            setGrade("Farlig")
            
        }
        else if(points <= 4){
            setGrade("Litt Trygt")
        }
        else if(points == 5){
            setGrade("Trygt")
        }
        else if(points == 6){
            setGrade("Ekstremt Trygt")
        }



        

        // Update all the states simultaneously
        setNumbers(totalNumbers);
        setCapital(totalLetters[1])
        setLowercase(totalLetters[0])
        setSpecial(totalSpec);
    }
}

export default PasswordCheck;