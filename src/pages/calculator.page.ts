import { by, element, browser, ElementFinder, ElementArrayFinder } from "protractor";
import BasePage from "./base.page";

export default class CalculatorPage extends BasePage {
    // Elements
    private txtFirstNumber: ElementFinder = element(by.model("first"));
    private txtSecondNumber: ElementFinder = element(by.model("second"));
    private sddOperator: ElementFinder = element(by.model("operator"));
    private btnGo: ElementFinder = element(by.id("gobutton"));
    private lblResult: ElementFinder = element(by.binding("latest"));
    private rowHistory: ElementArrayFinder = element.all(by.repeater("result in memory"));
    // Page variables
    public static readonly BASE_URL: string = "http://www.way2automation.com/angularjs-protractor/calc/";
    
    constructor() {
        super();
    } 

    public async goTo() {
        await browser.get(CalculatorPage.BASE_URL);
    }

    public async setFirstNumber(firstNumber: string) {
        return await this.setElemText(this.txtFirstNumber, firstNumber);
    }

    public async setSecondNumber(secondNumber: string) {
        await this.setElemText(this.txtSecondNumber, secondNumber);
    }

    public async selectOperator(operator: string) {
        await this.clickElem(this.sddOperator);
        await this.clickElem(element(by.cssContainingText("option", operator)));
    }

    public async clickGo() {
        await this.clickElem(this.btnGo);
    }

    public async getResult(): Promise<string> {
        return await this.getElemText(this.lblResult);
    }

    public async getHistoryCount(): Promise<number> {
        return await this.getElemCount(this.rowHistory);
    }
}
