'use client'
import { useContext } from "react";
import { CalcContext } from "../context/CalculContext";

const getStyleName = btn => {
    const className = {
        '=': 'btn_égale',
        '/': 'btn_opérations',
        '+': 'btn_opérations',
        '-': 'btn_opérations',
        'x': 'btn_opérations',
        'AC': 'btn_top',
        '+/-': 'btn_top',
        '%': 'btn_top'
    }
    return className[btn]
}

export const Bouton = ({value}) => {
    const {calc, setCalc} = useContext(CalcContext)
    
    //Quand l'utilisateur clique sur le point décimal
    const pointClick = () => {
        setCalc({
            ...calc,
            nombre: !calc.nombre.toString().includes('.') ? calc.nombre + value : calc.nombre //si pas de point dans le nombre, on l'ajoute
        });
    }

    //Quand l'utilisateur clique sur le A/C 
    const resetClick = () => {
        setCalc({
            signe: '',
            nombre: 0,
            résultat: 0
        });
    }

    //Quand l'utilisateur clique sur les chiffres
    const handleClickBouton = () => {
        const nombre_string = value.toString()

        let nombre_valeur;

        if (nombre_string === '0' && calc.nombre === 0) {
            nombre_valeur = "0"
        }else {
            nombre_valeur = Number(calc.nombre + nombre_string)
        }

        setCalc({
            ...calc,
            nombre: nombre_valeur
        });
    }

    //QUand l'utilisateur clique sur un des signes d'opérations mathématiques
    const signeClick = () => {
        setCalc({
            signe: value,
            résultat:!calc.résultat && calc.nombre ? calc.nombre : calc.résultat,
            nombre: 0
        });
    }

    //Quand l'utilisateur clique sur égale
    const égaleClick = () => {
        if (calc.résultat && calc.nombre){
            const math = (a, b, signe) => {
                const résultat = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return résultat[signe](a, b);
            }
            setCalc({
                résultat : math(calc.résultat, calc.nombre, calc.signe),
                signe : '',
                nombre : 0
            });
        }
    }

    //Quand l'utilisateur clique sur %
    const pourcentClick = () => {
        setCalc({
            nombre : (calc.nombre / 100),
            résultat : (calc.résultat / 100),
            signe: ''
        });
    }

    const inverseClick = () => {
        setCalc({
            nombre: calc.nombre ? calc.nombre * -1 : 0,
            résultat: calc.résultat ? calc.résultat * -1 : 0,
            signe: ''
        })
    }
    
    const handleBtnClick = () =>{
        const résultats = {
            '.': pointClick,
            'AC': resetClick,
            '/': signeClick,
            '+': signeClick,
            '-': signeClick,
            'x': signeClick,
            '=': égaleClick,
            '%': pourcentClick,
            '+/-': inverseClick

        }
        if (résultats[value]) {
            return résultats[value]()
        } else {
            return handleClickBouton()
        }
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    );
};