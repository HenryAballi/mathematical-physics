import React from "react";

function Nav(){
    return(
        <nav id="navbar">
        <header>Clasificación De Física</header>
        <div class="navbar">
            <ul>
                <li><a class="nav-link" href="#Física_Clásica">Física Clásica.</a></li><hr/>
                <li><a class="nav-link" href="#Acústica">Acústica.</a></li><hr/>
                <li><a class="nav-link" href="#Física_Moderna">Física Moderna.</a></li><hr/>
                <li><a class="nav-link" href="#Física_Cuántica">Física Cuántica.</a></li><hr/>
                <li><a class="nav-link" href="#Ejemplos_de_algunas_formulas_Fisicas">Ejemplos de algunas formulas Fisicas</a></li><hr/>
                <li><a class="nav-link" href="#Matemáticas">Matemáticas.</a></li><hr/>
            </ul>
        </div>
      </nav>
    )
}

export default Nav;