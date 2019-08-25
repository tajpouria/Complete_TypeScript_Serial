import { MatchResult } from "./MatchResult";
import { parseStringDate } from "./utils";
import { MatchData } from "./MatchData";

interface DataReader {
    data: string[][];
    read(): void;
}

export class MatchReader {
    private _matches: MatchData[] = [];
    public get matches(): MatchData[] {
        return this._matches;
    }

    constructor(private reader: DataReader) {}

    public load(): void {
        this.reader.read();
        this._matches = this.reader.data.map(this.mapOverRows);
    }

    private mapOverRows(match: string[]): MatchData {
        return [
            parseStringDate(match[0]),
            match[1],
            match[2],
            parseInt(match[3], 10),
            parseInt(match[4], 10),
            match[5] as MatchResult,
            match[6]
        ];
    }
}
