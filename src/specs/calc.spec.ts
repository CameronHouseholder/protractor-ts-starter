import CalculatorPage from "../pages/calculator.page";
import CalcData from "../data/calc.data";

describe('calculator', async () => {
    // Pages
    const calculatorPage: CalculatorPage = new CalculatorPage();
    // Libs
    const all = require("../libs/run-all-tests")
    // Test variables
    let actualCount: number = 0;
    let expectedCount: number = 0;
    let result: string = "";
    // Setup
    beforeAll(async () => {
        await calculatorPage.goTo();
    });
    // Tests
    all(CalcData.CALC_DATA_PROVIDER, (data: any) => {
        it(data.description, async () => {
            await calculatorPage.setNumOne(data.numOne);
            await calculatorPage.selectOperator(data.operator);
            await calculatorPage.setNumTwo(data.numTwo);
            await calculatorPage.clickGo();
            // Assert the result of the calculation
            result = await calculatorPage.getResult();
            expect(result).toEqual(data.result);
            // Assert the results in history count
            expectedCount++;
            actualCount = await calculatorPage.getHistoryCount();
            expect(actualCount).toEqual(expectedCount);
        });
    });
});
