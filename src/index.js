import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyContextProvider } from './contexto';
import { App } from './App';
import "./index.css"

const root=ReactDOM.createRoot(document.getElementById('root'));

//Contexto y root
    //Calculadora
        //Display
        //botones
            //bnt1
            //bnt2
            //bnt3
            //bnt4

root.render(
    <MyContextProvider>
        <App/>
    </MyContextProvider>
);