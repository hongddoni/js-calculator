import {operationType} from "./enum/operationType.ts";
import useCalculatorContext from "./hooks/useCalculatorContext.ts";

const Operation = () => {
    const {onChangeOperation} = useCalculatorContext();

    return <div className="operations subgrid">
        <button className="operation" onClick={()=>onChangeOperation?.(operationType.DIVISION)}>/</button>
        <button className="operation" onClick={()=>onChangeOperation?.(operationType.MULTIPLICATION)}>X</button>
        <button className="operation" onClick={()=>onChangeOperation?.(operationType.SUBTRACTION)}>-</button>
        <button className="operation" onClick={()=>onChangeOperation?.(operationType.ADDITION)}>+</button>
        <button className="operation" onClick={()=>onChangeOperation?.(operationType.RESULT)}>=</button>
    </div>
}

export default Operation;