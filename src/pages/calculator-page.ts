import { by, element, browser, ElementFinder } from "protractor";

export default class CalculatorPage {
    // Elements
    private txtFirstNumber: ElementFinder = element(by.model("first"));
    private txtSecondNumber: ElementFinder = element(by.model("second"));
    private sddOperator: ElementFinder = element(by.model("operator"));
    private btnGo: ElementFinder = element(by.id("gobutton"));
    private lblResult: ElementFinder = element(by.binding("latest"));
    // URL
    private static readonly url: string = "http://www.way2automation.com/angularjs-protractor/calc/";

    goTo() {
        browser.get(CalculatorPage.url);
    }

    enterFirstNumber(firstNumber: string) {
        this.txtFirstNumber.sendKeys(firstNumber);
    }

    enterSecondNumber(secondNumber: string) {
        this.txtSecondNumber.sendKeys(secondNumber);
    }

    selectOperator(operator: string) {
        this.sddOperator.click();
        let option = element(by.cssContainingText("option", operator));
        option.click();
    }

    calculate(firstNumber: string, secondNumber: string, operator: string) {
        this.enterFirstNumber(firstNumber);
        this.enterSecondNumber(secondNumber);
        this.selectOperator(operator);
    }

    clickBtnGo() {
        this.btnGo.click();
    }

    getLblResultText(): any {
        return this.lblResult.getText();
    }
}
