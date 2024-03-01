import {createContext} from "react";

export interface calculatorContext {
    firstNumber?: number;
    secondNumber?: number;
    total: string;

    onChangeFirstNumber?: (num: number) => void;
    onChangeSecondNumber?: (num: number) => void;
}

export const CalculatorContext = createContext<calculatorContext>({total: '0'});