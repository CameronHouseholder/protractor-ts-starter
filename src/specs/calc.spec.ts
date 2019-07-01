import CalculatorPage from "../pages/calculator.page";
import CalcData from "../data/calc.data";

describe('calculator', async () => {
    // Pages
    const calculator: CalculatorPage = new CalculatorPage();
    // Libs
    const all = require("../libs/run-all-tests")
    // Test variables
    let expectedCount: number = 0;
    // Setup
    beforeAll(async () => {
        await calculator.goTo();
    });
    // Tests
    all(CalcData.CALC_DATA_PROVIDER, (data: any) => {
        it(data.description, async () => {
            await calculator.calculate(data.firstNumber, data.secondNumber, data.operator);
            // Assert the result of the calculation
            expect(await calculator.getResult()).toEqual(data.result);
            // Assert the results in history count
            expectedCount++;
            expect(await calculator.getHistoryCount()).toEqual(expectedCount);
        });
    });
});
