import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class MatchesWinAnalyzer implements Analyzer {
    public build(matches: MatchData[], team: string) {
        let wins: number = 0;
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];

            if (match[1] === team && match[5] === MatchResult.HomeWin) {
                wins++;
            } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${team} wins ${wins} games.`;
    }
}
