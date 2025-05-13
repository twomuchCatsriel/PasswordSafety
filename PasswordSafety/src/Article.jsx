import React from "react";

import HeaderText from "./header";
import Highlight from "./highlight";
import Text from "./text";
import Subheader from "./subheader";
import URL from "./url";
import Bold from "./boldText";

function Article(){
    return(
        <section>
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
                <Text txt="1 - Passordet burde være 16 karakterer eller lenger."></Text>
                <Text txt="2 - Passordet burde være unikt for hver eneste nettside."></Text>
                <Text txt="3 - Passordet burde ha både tall, spesialsymboler og en blanding av store og små bokstaver."></Text>
                <Text txt="4 - Passordet burde ikke ha ord eller tall som er koblet til deg. (Fødselsdato, Navn, Adresse osv.)"></Text>
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


            <Subheader name="Totrinnsbekreftelse"></Subheader>
            <Text txt="ToTrinnsbekreftelse, eller 2FA (2 Factor Authentication) er et ekstra sikkerhetsnivå som krever at brukeren skriver inn en midlertidig tallkode
            hver gang man logger inn på en konto."></Text>
            <Text txt="2FA øker sikkerheten på en konto og gjør det mye vanskeligere for hackere å komme inn på brukerne dine, selv hvis de har tilgang til passordet ditt."></Text>
            <Text txt="Mange steder støtter 2FA innlogging, og det er derfor anbefalt å aktivere dette når mulig."></Text>
        </section>
    )
}
export default Article;