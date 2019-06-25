import { ElementFinder, ElementArrayFinder, browser, protractor, element, $, by } from "protractor";

export default class BasePage {
    // page variables
    private static readonly TIMEOUT: number = 20000;

    constructor() {}

    /**
     * Find the element, wait until the element is visible, clear the element text and then set the text of the element
     * @param elem the element to perform the action on
     * @param text the text to enter into the element
     */
    public async setElemText(elem: ElementFinder, text: string) {
        await this.waitForElemToBeVisible(elem);
        await elem.clear();
        await elem.sendKeys(text);
    }

    /**
     * Find the select element, wait until the select element is visible, and then select the option by value
     * @param elem the select element to perform the action on
     * @param value the value attribute of the option to select
     */
    public async selectElemOptionByValue(elem: ElementFinder, value: string) {
        await this.waitForElemToBeVisible(elem);
        await elem.click();
        await $("option[value='" + value + "']").click();
    }

    /**
     * Find the select element, wait until the select element is visible, and then select the option by text
     * @param elem the select element to perform the action on
     * @param value the text of the option to select
     */
    public async selectElemOptionByText(elem: ElementFinder, text: string) {
        await this.waitForElemToBeVisible(elem);
        await elem.click();
        await element(by.cssContainingText('option', text)).click();
    }

    /**
     * Find the element, wait until the element is visible, and then return the element text
     * @param elem the element to perform the action on
     * @return the text of the element
     */
    public async getElemText(elem: ElementFinder): Promise<string> {
        await this.waitForElemToBeVisible(elem);
        return elem.getText();
    }

    /**
     * Find the element, wait until the element is visible, and then return the element value attribute
     * @param elem the element to perform the action on
     * @return the value attribute of the element
     */
    public async getElemValue(elem: ElementFinder): Promise<string> {
        await this.waitForElemToBeVisible(elem);
        return elem.getAttribute('value');
    }

    /**
     * Try to find the element and then return a boolean based on if the element is displayed or not
     * @param elem the element to perform the action on
     * @returns true if the element is displayed, false if the element is not displayed
     */
    public async elemIsDisplayed(elem: ElementFinder): Promise<boolean> {
        let isDisplayed = false;
        try {
            isDisplayed = await elem.isDisplayed();
        } catch {
            // isDisplayed is still false even if the element is not found
        }
        return isDisplayed;
    }

    /**
     * Find the element, wait till the element is visible and then return a boolean based on if the element is enabled or not
     * @param elem the element to perform the action on
     * @returns true if the element is enabled, false if the element is not enabled
     */
    public async elemIsEnabled(elem: ElementFinder): Promise<boolean> {
        await this.waitForElemToBeVisible(elem);
        return elem.isEnabled();
    }

    /**
     * Find the element, wait till the element is visible and then return a boolean based on if the element is selected or not
     * @param elem the element to perform the action on
     * @returns true if the element is selected, false if the element is not selected
     */
    public async elemIsSelected(elem: ElementFinder): Promise<boolean> {
        await this.waitForElemToBeVisible(elem);
        return elem.isSelected();
    }

    /**
     * Find the element, wait until the element is visible and then click the element
     * @param elem the element to perform the action on 
     */
    public async clickElem(elem: ElementFinder) {
        await this.waitForElemToBeVisible(elem);
        await elem.click();
    }

    /**
     * Find the elements and then return the element count
     * @param elems the elements to perform the action on
     * @return the element count or the number of elements in the element array
     */
    public async getElemCount(elems: ElementArrayFinder): Promise<number> {
        return await elems.count();
    }

    /**
     * Wait for the element to be visible on the page or raise an exception if the timeout is reached before the element is visible
     * @param elem the element to perform the action on
     */
    public async waitForElemToBeVisible(elem: ElementFinder) {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(elem), BasePage.TIMEOUT, elem.locator().toString());
    }
}
