import { MatchData } from "./MatchData";
import { MatchesWinAnalyzer } from "./analyzers/MatchesWin.Analyzer";
import { HtmlPrintReport } from "./PrintReport/Html.printReport";

export interface Analyzer {
    build(matches: MatchData[], team: string): string;
}
export interface PrintReport {
    print(report: string): void;
}

export class Summary {
    constructor(private analyzer: Analyzer, private printReport: PrintReport) {}

    static buildMatchWinAnalysisPrintReportInHtml(
        matches: MatchData[],
        team: string,
        fileName: string
    ): void {
        const summary = new Summary(
            new MatchesWinAnalyzer(),
            new HtmlPrintReport(fileName)
        );
        summary.buildAndPrintReport(matches, team);
    }

    public buildAndPrintReport(matches: MatchData[], team: string) {
        const output = this.analyzer.build(matches, team);

        this.printReport.print(output);
    }
}
