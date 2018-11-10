import CalculatorPage from "../pages/calculator-page";

describe('addition', () => { 
    let calculatorPage = new CalculatorPage();
    beforeAll(() => {
        calculatorPage.goTo();
    });

    it('should add two positive numbers', () => { 
        calculatorPage.enterFirstNumber("1");
        calculatorPage.enterSecondNumber("1");
        calculatorPage.selectOperator("+");
        calculatorPage.clickBtnGo();

        expect(calculatorPage.getLblResultText()).toEqual("3");
    });
});
