import CalculatorPage from "../pages/calculator.page";
import AdditionData from "../data/addition.data";

describe('addition', async () => {
    // Page init
    let calculatorPage: CalculatorPage = new CalculatorPage();
    // Setup
    beforeAll(async () => {
        await calculatorPage.goTo();
    });
    // Data provider
    let all = require("../libs/run-all-tests")
    // Test variables
    let actualRowResultsCount: number = 0;
    let expectedRowResultsCount: number = 0;
    // Tests
    all(AdditionData.ADDITION_DATA_PROVIDER, (data: any, iteration: any) => {
        it(data.description, async () => {
            await calculatorPage.calculate(data.numOne, data.numTwo, data.operator);
            // Assert the result of the calculationx
            expect(await calculatorPage.getLblResultText()).toEqual(data.result);
            // Assert the results in history count
            expectedRowResultsCount++;
            actualRowResultsCount = await calculatorPage.getRowResultCount();
            expect(actualRowResultsCount).toEqual(expectedRowResultsCount);
        });
    });
});
