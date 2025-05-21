import React from "react";

import HeaderText from "./header";
import Highlight from "./highlight";
import Text from "./text";
import Subheader from "./subheader";
import URL from "./url";
import Bold from "./boldText";

function Article(){
    return(
        <div>
            <section id="main">
                <HeaderText name="Passord Sikkerhet"/>

                <Highlight name="Husker du den forrige gangen du endret de viktigste passordene dine?"/>
                <Text txt="Passord-Sikkerhet er en viktig del av internettet, men en del som mange overser.
                Uten ordentlig passord-sikkerhet, så blir brukerkontoene dine puttet i unødvendig fare."/>
                <Text txt="Men hva kan du gjøre for å forbedre din passord-sikkerhet digitalt?"/>

                <Subheader name="Hva kan jeg gjøre for å lage et sterkere passord?"/>
                <Text txt="Et passord er laget for å sikre at bare den riktige brukeren kan logge inn på en brukerkonto."></Text>
                <Text txt="Det er derfor viktig å ha et sterkt passord, slik at ingen kan gjette seg inn på brukerkontoen din.
                Heldigvis så er det veldig enkelt å lage et sikkert passord."></Text>
                
                
                <div className="Paragraphs">
                    <Highlight name="Passordet burde følge disse reglene:"></Highlight>

                    <ul id="list">
                        <li>Passordet burde være 16 tegn eller lenger.</li>
                        <li>Passordet burde være unikt for hver eneste nettside.</li>
                        <li>Passordet burde ha både tall, spesialsymboler og en blanding av store og små bokstaver.</li>
                        <li>Passordet burde ikke ha ord eller tall som er koblet til deg. (Fødselsdato, Navn, Adresse osv.)</li>
                    </ul>
                </div>

                <div className="Paragraphs">
                    <Bold name="Eksempler på gode passord:"></Bold>
                    <Text txt="%z!iNzgK2SZZftkCo7S$"></Text>
                    <Text txt="Venus_Quota_Driver_Extraterrestrial_Miscarriage967@"></Text>
                    <Text txt="PaintStoolLeader472^2"></Text>

                    <Bold name="Eksempler på dårlige passord:"></Bold>
                    <Text txt="Passord1234"></Text>
                    <Text txt="12345"></Text>
                    <Text txt="skateboard1"></Text>
                    <Text txt="StrongPassword"></Text>
                </div>

                <Subheader name="Hvordan skal jeg huske et sterkt passord?"></Subheader>
                <Text txt="Et sterkt passord kan være vanskelig å huske, hvertfall hvis du bruker et forksjellig passord overalt. Så, hva gjør man da?"></Text>
                <Text txt="Den enkleste og mest populære løsningen er å bruke et Passordhåndteringsprogram (Password Manager)."/>
                <Text txt="Et Passordhåndteringsprogram er et sikkert program som lagrer passordene dine i en sikker, kryptert sky."></Text>
                <Text txt="Alt du trenger å huske er ett mesterpassord, som burde skrives ned og lagres på et sikkert sted."></Text>
                <p className="textObject">Det finnes mange gode passordhåndteringsprogrammer. Noen programmer er også gratis å bruke, slik som 
                    <URL link="https://bitwarden.com" display=" Bitwarden."/></p> 


                <Subheader name="To-Trinnsbekreftelse"></Subheader>
                <Text txt="To-Trinnsbekreftelse, eller 2FA (2 Factor Authentication) er et ekstra sikkerhetsnivå som krever at brukeren skriver inn en midlertidig tallkode
                generert av en app hver gang man logger inn på en konto."></Text>
                <Text txt="2FA øker sikkerheten på en konto og gjør det mye vanskeligere for hackere å komme inn på brukerne dine, selv hvis de har tilgang til passordet ditt."></Text>
                <Text txt="Mange steder støtter 2FA innlogging, og det er anbefalt å aktivere dette når mulig."></Text>

                <Subheader name="Andre sikkerhetstiltak"/>
                <Text txt="Mange nettlesere har sine egne alternativer til passordhåndteringsprogrammer som er bygget inn.
                Det er ikke anbefalt å bruke disse, siden disse er ofte ikke enkryptert til samme standard som vanlige passordhåndteringsprogrammer."></Text>
                <Text txt="Hvis du blir spurt om å lagre passordene dine av nettleseren, alltid takk nei og gjør det heller selv med et annet passordshåndteringsprogram. "></Text>
                
                <Subheader name="Hvorfor burde jeg ikke gjenbruke passordet mitt?"></Subheader>
                <Text txt="Det er ganske vanlig for folk å gjenbruke et enkelt passord. Men dette er ikke en veldig god ide. Hvorfor?"></Text>
                <Text txt="Det er flere mulige måter for et passord å bli lekket på, men den vanligste måten er hvis et selskap opplevde en datalekasje."></Text>
                <Text txt="Hvis et passord kommer på avveie, så er det mye enklere å bytte ut ett passord enn å bytte ut mange passord med et nytt et. "></Text>
                <Text txt="Ved å bruke forskjellige passord, så øker du sikkerheten din digitalt."></Text>

                <Subheader name="Have I Been Pwned?"></Subheader>
                <Text txt="Have I Been Pwned er en nettservice som lar brukere søke etter passord og email-adresser i kjente datalekasjer."></Text>
                <Text txt="Hvis din informasjon er funnet på Have I Been Pwned, så betyr det at din informasjon var påvirket av en datalekasje."></Text>
                <Text txt="Da er det anbefalt å bytte ut passordet med ett nytt, sikkert passord."></Text>
                <URL display="Have I Been Pwned?" link="https://haveibeenpwned.com/"></URL>
            </section>
        </div>
    )
}
export default Article;