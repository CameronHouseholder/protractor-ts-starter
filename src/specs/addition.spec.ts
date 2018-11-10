import CalculatorPage from "../pages/calculator.page";

describe('addition', async () => { 
    let calculatorPage = new CalculatorPage();

    beforeAll(async () => {
        await calculatorPage.goTo();
    });

    it('should add two positive numbers', async () => { 
        await calculatorPage.calculate("1", "1", "+");
        expect(await calculatorPage.getLblResultText()).toEqual("2");
    });
});
