interface Printable {
    print(): void;
}

class Home implements Printable {
    public print() {
        console.log("home");
    }
}

interface Printable {
    print(): void;
}

function callAllPrintMethods<T extends Printable>(array: T[]): void {
    for (let i = 0; i < array.length; i++) {
        array[i].print();
    }
}

callAllPrintMethods<Home>([new Home(), new Home()]);
