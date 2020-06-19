import React from "react";
import FisicaClasica from "./components/fisicaClasica";
import Acustica from "./acustica";
import FisicaModerna from "./fisicaModerna";
import FisicaCuantica from "./fisicaCuantica";
import Example from "./example";
import Matematica from "./matematica";

function Main(){
    return(
        <main id="main-doc">
            <FisicaClasica/>
            <Acustica/>
            <FisicaModerna/>
            <FisicaCuantica/>
            <Example/>
            <Matematica/>
      </main>
    )
}

export default Main;