#section one

## when should use type annotations

```typescript
// Type inference only work whenever we done type declaration and value initialization in single line

// 1. anyTime we call function that return type any
const point = '{"x":10, "y":20 }';

const coordinates: { x: number; y: number } = JSON.parse(point);

// 2. whenever declare variable in one line an initialize it in another line
const words = ["one", "two"];

let targetWord: boolean;

words.map(w => {
    if (w === "two") targetWord = true;
});

// 3. anytime type inference doesn't realize the purpose of code
const numbers = [-12, -13, 12];

let numberAboveZero: boolean | number = false;

numbers.map(n => {
    if (n > 0) numberAboveZero = n;
});
```

## never type

```typescript
// just using never whenever we sure the function never gonna return a value
const throwError = (msg: string): never => {
    throw new Error(msg);
};

const returnSomeValue = (value: string): string => {
    if (!value) throw new Error();

    return value;
};
```

## destructuring

```typescript
const human = {
    firstName: "Rex",
    age: 4,
    coordinates: { x: 43, y: -23 },
    // I don't know:
    tellSth(msg: string): void {
        console.log(msg);
    }
};

const { firstName, age }: { firstName: string; age: number } = human;
const {
    coordinates: { x, y }
}: { coordinates: { x: number; y: number } } = human;
```

## Arrays

```typescript
const carMakers : string[][] = {
  ['toyota'],
  ['chevy'],
  ['corolla']
}
// flexible arrays
const importantDates : (Date | string)[] = [new Date(), '2020-10-10']
```

## tuples

```typescript
type Drink = {string, boolean, number}
const drink: Drink = {'Brown', true, 40}
```

## Interfaces

```typescript
interface Vehicle {
    name: string;
    summary(): string;
}

const printSummary = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

const oldCivic = {
    name: "Civic",
    age: 12,
    summary() {
        return this.name;
    }
};

printSummary(oldCivic);
```

## Classes

```typescript
// class modifiers or keyWords
// public : accessible anytime anyWhere
// private : only Accessible by other methods in this class
// protected : this methods accessible by this class methods and also child methods and not instance of it

// class fields
class Car {
    constructor(public color: string, private model: string) {}

    printSummary = (): void => {
        console.log(`Color: ${this.color} model: ${this.model}`);
    };
}

class Golf extends Car {
    constructor(color: string, model: string, public name: string) {
        super(color, model);
    }
}
```

# section two

## web app using parcel bundler

> npm i -g parcel-bundler

```html
<script src="./index.ts"></script>
```

> parcel index.html

```typescript
// make sure class satisfied all type or interface requirement
export class Company implements Mappable
```

# section three

```typescript
    "outDir": "./build"  // specify the where compiled code should go
    "rootDir": "./src"   // specify your code root dir

// automate development process
 "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently yarn:start:*"
  },

// union operator in typescript will just allow you the access to same property that  two methods have

function (arg: string | number[]){
  arg[0] = 5 // cuz an error cuz string is immutable
}
```

## type guard

```typescript
// primitive value
typeof number string boolean symbol
// eg.
if(typeof str === 'string')

// every other type value
// eg.
array instanceof Array
obj instanceof MyCostumeType

// class getter && setter refresh

class NumberCollection{
  get length():number{
    return this.collection.length
  }

  set setCollection(collection:string[]):void{
      this.collection = collection
  }
}

console.log(NumberCollection.length) // also it's possible used it's instance
NumberCollection.setCollection = ['h','e']
```

## abstract classes

<b> Really intersting </b>

```typescript
export abstract class Tell {
    abstract word: strig;

    tell(): void {
        consoe.log(this.word);
    }
}

class Human extends Tell {
    get word(): string {
        return "hello abstract";
    }
}

const human = new Human();
human.tell();
```

# Section Three

> yarn add @types/node #in order to using node builtins

## readFileSync

```typescript
import fs from "fs";

fs.readFileSync("football.csv", {
    encoding: "utf-8" // make it return a string
});
```

## enum

```typescript
enum MatchResult {
    HomeWin = "H",
    AwayWin = "A"
}

const displyResult = (): MatchResult => {
    return MatchResult.HomeWin; // H
};
```

## Date

```typescript
// month start from index [0] eg. 0 === Jan
type AssignedDate = new Date(year: number, month: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined))
```

## Generics

```typescript
class StoreDataAsAnyType<T> {
    data: T[];
}

const storeDateAsNumber = new StoreDateAsAnyType<number>();
```
