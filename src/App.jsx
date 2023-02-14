import React from "react";
import { Boton } from "./boton";
import { MyContext } from "./contexto";
import { useContext } from "react";

export function App(props){
    const {texto}=useContext(MyContext);
    
    return(
        <div id="calculadora">
            <div id="display">
                {texto}
            </div>
            <div id="botones">
                <Boton valor="AC" clave="clear" clase="limpiar"/>
                <Boton valor="/" clave="divide" clase="operaciones"/>
                <Boton valor="*" clave="multiply" clase="operaciones"/>
                <Boton valor="7" clave="seven" clase="numeros"/>
                <Boton valor="8" clave="eight" clase="numeros"/>
                <Boton valor="9" clave="nine" clase="numeros"/>
                <Boton valor="-" clave="subtract" clase="operaciones"/>
                <Boton valor="4" clave="four" clase="numeros"/>
                <Boton valor="5" clave="five" clase="numeros"/>
                <Boton valor="6" clave="six" clase="numeros"/>
                <Boton valor="+" clave="add" clase="operaciones"/>
                <Boton valor="1" clave="one" clase="numeros"/>
                <Boton valor="2" clave="two" clase="numeros"/>
                <Boton valor="3" clave="three" clase="numeros"/>
                <Boton valor="=" clave="equals" clase="igual"/>
                <Boton valor="0" clave="zero" clase="numeros"/>
                <Boton valor="." clave="decimal" clase="numeros"/>
            </div>
        </div>
    );
}