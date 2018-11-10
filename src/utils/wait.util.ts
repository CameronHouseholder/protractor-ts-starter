import { browser, ElementFinder, protractor } from "protractor";

export default class WaitUtil {
    public async waitForElemToBeVisible(elem: ElementFinder) {
        await browser.wait(protractor.ExpectedConditions.presenceOf(elem), 20000, elem.locator().toString());
    }
}