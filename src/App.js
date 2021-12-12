import { CalculatorBox } from "./components/CalculatorBox/CalculatorBox";
import { Logo } from "./components/Logo/Logo";
import { BillWrapper } from "./context/BillContext";

function App() {
    return (
        <BillWrapper>
            <div className="App">
                <Logo />
                <CalculatorBox />
            </div>
        </BillWrapper>
    );
}

export default App;
