import { ElementFinder } from "protractor";
import WaitUtil from "../utils/wait.util";

export default class BasePage {
    private waitUtil: WaitUtil;

    constructor() {
        this.waitUtil = new WaitUtil();
    }

    public async setText(elem: ElementFinder, text: string) {
        await this.waitUtil.waitForElemToBeVisible(elem);
        await elem.sendKeys(text);
    }

    public async getText(elem: ElementFinder): Promise<string> {
        await this.waitUtil.waitForElemToBeVisible(elem);
        return elem.getText();
    }

    public async click(elem: ElementFinder) {
        await this.waitUtil.waitForElemToBeVisible(elem);
        await elem.click();
    }
}
