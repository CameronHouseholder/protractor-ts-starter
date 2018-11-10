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

    public async goTo() {
        await browser.get(CalculatorPage.url);
    }

    private async enterFirstNumber(firstNumber: string) {
        await this.txtFirstNumber.sendKeys(firstNumber);
    }

    private async enterSecondNumber(secondNumber: string) {
        await this.txtSecondNumber.sendKeys(secondNumber);
    }

    private async selectOperator(operator: string) {
        await this.sddOperator.click();
        let option = element(by.cssContainingText("option", operator));
        await option.click();
    }

    private async clickBtnGo() {
        await this.btnGo.click();
    }

    public async calculate(firstNumber: string, secondNumber: string, operator: string) {
        await this.enterFirstNumber(firstNumber);
        await this.enterSecondNumber(secondNumber);
        await this.selectOperator(operator);
        await this.clickBtnGo();
    }

    public async getLblResultText(): Promise<string> {
        return await this.lblResult.getText();
    }
}
