import { Sorter } from "./Sorter";

export class StringCollection extends Sorter {
    private splittedCollection: string[];

    constructor(public collection: string) {
        super();
        this.splittedCollection = this.collection.split("");
    }

    public compare(leftIndex: number, righIndex: number): boolean {
        return (
            this.splittedCollection[leftIndex].toLowerCase() >
            this.splittedCollection[righIndex].toLowerCase()
        );
    }

    public swap(leftIndex: number, righIndex: number): void {
        const leftHand = this.splittedCollection[leftIndex];
        this.splittedCollection[leftIndex] = this.splittedCollection[righIndex];
        this.splittedCollection[righIndex] = leftHand;

        this.collection = this.splittedCollection.join("");
    }

    get length(): number {
        return this.splittedCollection.length;
    }
}
