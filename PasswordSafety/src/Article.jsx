import React from "react";

import HeaderText from "./header";
import Highlight from "./highlight";
import Text from "./text";
import Subheader from "./subheader";

function Article(){
    return(
        <section>
            <HeaderText name="Passord Sikkerhet"/>

            <Highlight name="Husker du den forrige gangen du endret de viktigste passordene dine?"/>
            <Text txt="Passord-Sikkerhet er en viktig del av internettet, men en del som mange overser.
            Uten ordentlig passord-sikkerhet, så blir brukerkontoene dine puttet i unødvendig fare."/>
            <Text txt="Men hva kan du gjøre for å forbedre din passord-sikkerhet digitalt?"/>

            <Subheader name="Hva er et sterkt passord?"/>
        </section>
    )
}

export default Article;