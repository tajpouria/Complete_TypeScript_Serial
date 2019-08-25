import { PrintReport } from "../Summary";

export class ConsolePrintReport implements PrintReport {
    public print(report: string) {
        console.log(report);
    }
}
