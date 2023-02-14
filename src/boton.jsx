import React from "react";
import { MyContext } from "./contexto";
import { useContext } from "react";

export function Boton({valor, clave, clase}){
    const {texto,setTexto}=useContext(MyContext);
    
    return(
        <button id={clave} className={clase} onClick={e=>{
            if(e.target.className==="limpiar"){
                setTexto("0");
            }else if(e.target.className==="igual"){
                let texto2=texto.replace("--","+");
                setTexto(""+eval(texto2));
            }else if(e.target.className==="numeros"){
                if(e.target.id==="decimal"){
                    texto.slice(-1)!="." ? setTexto(texto+valor) : setTexto(texto);
                }else if(texto==="0"){
                    setTexto(valor);
                }else{
                    setTexto(texto+valor);
                }
            }else{
                let iden=e.target.id;
                setTexto(evaluador(iden,texto)+valor);
            }
        }}>
            {valor}
        </button>
    );
}

function evaluador(iden,textoEval){
    if((iden == 'add' || iden == 'multiply' || iden == 'divide') && (textoEval.slice(-1)=="*" || textoEval.slice(-1)=="/" || textoEval.slice(-1)=="+" || textoEval.slice(-1)=="-")){ 
        return evaluador(iden,textoEval.substring(0,textoEval.length-1))
    }else{
        return textoEval;
    }
}