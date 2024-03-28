'use client';
import { createContext, useState } from "react";

export const CalcContext = createContext()
export const CalcProvider = ({children}) => {
    const [calc, setCalc] = useState({
        signe: "",
        nombre: 0,
        résultat: 0
    });

    const providerValue = {
        calc, setCalc
    }

    return (
        <CalcContext.Provider value={providerValue}>
            {children}
        </CalcContext.Provider>
    );
};