import Digit from "./Digit.tsx";
import Operation from "./Operation.tsx";
import Modifier from "./Modifier.tsx";
import Total from "./Total.tsx";
import CalculatorProvider from "./provider/CalculatorProvider.tsx";

const Calculator = () => {
    return(
        <CalculatorProvider>
            <div className='calculator'>
                <Total/>
                <Digit/>
                <Modifier/>
                <Operation/>
            </div>
        </CalculatorProvider>
    );
}

export default Calculator;