import { by, element, browser, ElementFinder } from "protractor";
import BasePage from "./base.page";

export default class CalculatorPage extends BasePage {
    // Elements
    private txtFirstNumber: ElementFinder = element(by.model("first"));
    private txtSecondNumber: ElementFinder = element(by.model("second"));
    private sddOperator: ElementFinder = element(by.model("operator"));
    private btnGo: ElementFinder = element(by.id("gobutton"));
    private lblResult: ElementFinder = element(by.binding("latest"));
    // URL
    private static readonly url: string = "http://www.way2automation.com/angularjs-protractor/calc/";
    
    constructor() {
        super();
    } 

    public async goTo() {
        await browser.get(CalculatorPage.url);
    }

    private async enterFirstNumber(firstNumber: string) {
        await this.setText(this.txtFirstNumber, firstNumber);
    }

    private async enterSecondNumber(secondNumber: string) {
        await this.setText(this.txtSecondNumber, secondNumber);
    }

    private async selectOperator(operator: string) {
        await this.click(this.sddOperator);
        await this.click(element(by.cssContainingText("option", operator)));
    }

    private async clickBtnGo() {
        await this.click(this.btnGo);
    }

    public async calculate(firstNumber: string, secondNumber: string, operator: string) {
        await this.enterFirstNumber(firstNumber);
        await this.enterSecondNumber(secondNumber);
        await this.selectOperator(operator);
        await this.clickBtnGo();
    }

    public async getLblResultText(): Promise<string> {
        return await this.getText(this.lblResult);
    }
}
