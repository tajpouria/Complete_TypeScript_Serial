import fs from "fs";

export class CsvFileReader {
    public data: string[][] = [];

    constructor(private csvFilePath: string) {}

    public read() {
        this.data = fs
            .readFileSync(this.csvFilePath, { encoding: "utf-8" })
            .split("\n")
            .map((node: string): string[] => node.split(","));
    }
}
