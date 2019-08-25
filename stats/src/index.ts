import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { MatchesWinAnalyzer } from "./analyzers/MatchesWin.Analyzer";
import { ConsolePrintReport } from "./PrintReport/Console.printReport";

const reader = new CsvFileReader("../football.csv");

const matchReader = new MatchReader(reader);

matchReader.load();

const matchesWinAnalyzer = new MatchesWinAnalyzer();
const consolePrintReport = new ConsolePrintReport();

// const summary = new Summary(matchesWinAnalyzer, consolePrintReport);

// summary.buildAndPrintReport(matchReader.matches, "Man United");

Summary.buildMatchWinAnalysisPrintReportInHtml(
    matchReader.matches,
    "Man United",
    "ManUniteWinsReport"
);
