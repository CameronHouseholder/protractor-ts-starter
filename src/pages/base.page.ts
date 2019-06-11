import { ElementFinder, ElementArrayFinder, browser, protractor } from "protractor";

export default class BasePage {

    constructor() {}

    public async setElemText(elem: ElementFinder, text: string) {
        this.waitForElemToBeVisible(elem);
        await elem.sendKeys(text);
    }

    public async getElemText(elem: ElementFinder): Promise<string> {
        this.waitForElemToBeVisible(elem);
        return elem.getText();
    }

    public async clickElem(elem: ElementFinder) {
        this.waitForElemToBeVisible(elem);
        await elem.click();
    }

    public async getElemCount(elems: ElementArrayFinder): Promise<number> {
        return await elems.count();
    }

    public async waitForElemToBeVisible(elem: ElementFinder) {
        await browser.wait(protractor.ExpectedConditions.presenceOf(elem), 20000, elem.locator().toString());
    }
}
