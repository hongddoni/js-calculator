import React, {useState} from "react";
import {CalculatorContext} from "../context/calculatorContext.ts";

interface Props {

}

const CalculatorProvider: React.FC<React.PropsWithChildren<Props>> = ({children}) => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0)
    const [total, setTotal] = useState('0');

    const onChangeFirstNumber = (num: number) => {
        setFirstNumber(num);
        setTotal(total + String(num));
    }

    const onChangeSecondNumber = (num: number) => {
        setSecondNumber(num);
        setTotal(total + String(num));
    }

    return (<CalculatorContext.Provider
        value={{total, firstNumber, secondNumber, onChangeFirstNumber, onChangeSecondNumber,}}>
        {children}
    </CalculatorContext.Provider>)
}

export default CalculatorProvider;