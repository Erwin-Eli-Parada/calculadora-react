import { createContext, useState} from "react";

export const MyContext = createContext();

export function MyContextProvider(props){
    const [texto, setTexto] = useState("0");
    
    return(
        <MyContext.Provider value={{texto,setTexto}}>
            {props.children}
        </MyContext.Provider>
    );
} 