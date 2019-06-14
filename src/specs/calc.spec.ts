import CalculatorPage from "../pages/calculator.page";
import CalcData from "../data/calc.data";

describe('calculator', async () => {
    // Pages
    const calculator: CalculatorPage = new CalculatorPage();
    // Libs
    const all = require("../libs/run-all-tests")
    // Test variables
    let actualCount: number = 0;
    let expectedCount: number = 0;
    let result: string = "";
    // Setup
    beforeAll(async () => {
        await calculator.goTo();
    });
    // Tests
    all(CalcData.CALC_DATA_PROVIDER, (data: any) => {
        it(data.description, async () => {
            await calculator.setFirstNumber(data.firstNumber);
            await calculator.selectOperator(data.operator);
            await calculator.setSecondNumber(data.secondNumber);
            await calculator.clickGo();
            // Assert the result of the calculation
            result = await calculator.getResult();
            expect(result).toEqual(data.result);
            // Assert the results in history count
            expectedCount++;
            actualCount = await calculator.getHistoryCount();
            expect(actualCount).toEqual(expectedCount);
        });
    });
});
