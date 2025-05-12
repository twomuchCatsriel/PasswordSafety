import React from "react";

import HeaderText from "./header";
import Highlight from "./highlight";
import Text from "./text";
import Subheader from "./subheader";
import URL from "./url";

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
            
            <Text txt="1 - Passordet burde være 16 karakterer eller lenger."></Text>
            <Text txt="2 - Passordet burde være unikt for hver eneste nettside."></Text>
            <Text txt="3 - Passordet burde ha både tall, spesialsymboler og en blanding av store og små bokstaver."></Text>
        </section>
    )
}
export default Article;