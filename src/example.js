import React from "react";

function Example(){
    return(
        <section id="Ejemplos_de_algunas_formulas_Fisicas" className="main-section">
        <header>Ejemplos de algunas formulas Fisicas</header>
        <ul>
            <li><strong>Movimiento rectilíneo uniforme</strong>
                <ul>
                    <li><code>S= S0 + V*t</code></li>
                    <li>S: posición final (m)</li> 
                    <li>So: posición inicial (m)</li>
                    <li>v: velocidad (m/s)</li>
                    <li>t: intervalo de tiempo</li>
                </ul>
            </li>
            <li><strong>Movimiento rectilíneo uniformemente variado</strong>
                <ul>
                    <li><code>S= S0 + V0*t + 1/2a*t2</code></li>
                    <li>S: posición final (m)</li> 
                    <li>s0: posición inicial (m)</li> 
                    <li>v0: velocidad inicial (m/s)</li>
                    <li>a: aceleración (m/s2)</li>
                    <li>t: intervalo de tiempo</li>
                    <li>ΔS: distancia recorrida</li>
                    <li>v: velocidad final (m/s)</li>
                    <li><code>V= V0 + a*t</code></li>
                    <li><code>V= V0 +2*a * ΔS</code></li>
                </ul>
            </li>
            <li><strong>Movimiento circular uniforme</strong>
                <ul>
                    <li><code>V= ω * R</code></li>
                    <li>v: velocidad (m/s)</li>
                    <li>ω: velocidad angular (rad/s)</li>
                    <li>R: radio de la curvatura de la trayectoria (m)</li>
                </ul> 
            </li>
        </ul>
    </section>
    )
}

export default Example;