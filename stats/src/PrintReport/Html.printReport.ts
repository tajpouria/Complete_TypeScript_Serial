import fs from "fs";
import { PrintReport } from "../Summary";

export class HtmlPrintReport implements PrintReport {
    constructor(private fileName: string) {}

    print(report: string): void {
        const html = `<h1>Analysis Reports</h1><h6>${report}</h6>`;
        fs.writeFileSync(`../${this.fileName}.html`, html);
    }
}
