import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
    constructor(public collection: number[]) {
        super();
    }

    public compare(leftIndex: number, rightIndex: number): boolean {
        return this.collection[leftIndex] > this.collection[rightIndex];
    }

    public swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = leftHand;
    }

    get length(): number {
        return this.collection.length;
    }
}
