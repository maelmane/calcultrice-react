'use client';
import { useContext } from "react";
import { CalcContext } from "../context/CalculContext";
import { Textfit } from 'react-textfit';

export const Écran = () => {
    const {calc} = useContext(CalcContext);
    return (
        <Textfit className="screen bg-white" max={70} mode="single">
            {calc.nombre ? calc.nombre: calc.résultat}
        </Textfit>
    );
};