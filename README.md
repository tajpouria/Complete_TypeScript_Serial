# Section one

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

# Section three

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

<b> Really interesting </b>

```typescript
export abstract class Tell {
    abstract word: string;

    tell(): void {
        console.log(this.word);
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

> yarn add @types/node #in order to using node

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

const displayResult = (): MatchResult => {
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

# Section Four

```typescript
// Constraints
interface Printable {
    print(): void;
}

function callPrintMethods<T extends Printable>(array: T[]) {
    for (let i = 0; i < array.length; i++) {
        array[i].print();
    }
}

// Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

Object.assign(obj2, obj1);

console.log(obj2); // {c: 3, a: 1, b: 2}
```

Serialize talking about take some information kind of thing and make it to some save able format eg. JSON

DeSerialize talking about give some save able sort of information and make it to parsable format eg. Object

```json
// by generating default tsconfig.json we got a different behavior around possibility to undefined
    "strict": true,/* Enable all strict type-checking options. */
```

```typescript
// in TS string can be a type
type BestName = 'Stephen'

const justCallingBestName = (name: BestName):void => {
    console.log(name)
}

justCallingBestName('Stephen') // it will throw an error if try other strings

// in JS therefore TS Object keys are always string
const colors = {}
colors[4] = 'yellow'
Object.keys(colors)  => ["4"]

______________________________________________

// so then in TS Object keys can be an type too

// generic constrains
function iWillReturnOneOfTheGivenObjectValues<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {
    return object[key];
}


// this reminder in javascript

// this in js always refereed to what is on the left hand side eg.
const colors = { color: "red", printColor(){ console.log(this.color) } }

colors.printColor() // red  cuz this refereed to colors


const printColor = colors.printColor

printColor() // undefined  cuz nothing is on the left hand side of it

// this problem we use binding and bounded method always inferred to it's container Object

// for ... in && for ... of

const obj = {"hello":2, "world":3}
const arr = ['hello', 'world']

for(objectKey in obj){
   console.log(objectKey)
}
// 'world'
// 'hello'
for (let key in arr)
    console.log(key)
// 0
// 1

for(let value of obj)
    console.log(value)
// Error: obj is not iterable
for (let value of arr)
    console.log(value)
// 'hello'
// 'world'

// *** in some cases maybe our constraints also be an generic
export class View<T extends Model<K>,K>{}

```

# Section four

```typescript
// cookie-session reminder
app.use(cookieSession({ key: ["lssda"] })); // before routes
interface session {
    [key: string]: any;
}

//eg. /login
req.session = { loggedIn: true };

//eg. /logout
req.session = undefined;
```

### @Decorators

```javascript
// prototypal inheritance reminder
function Boat(){
    this.color = "red"
}

const boat = new Boat()

> boat -> Boat {color: "red"}
Boat.prototype.sink = function(){
    console.log('sinking')
}

> boat.sink() -> 'sinking'
```

```typescript
// Decorators : functions that can modify/change/anything properties/methods inside a class
// Not same to JS decorators
// Used inside class only
// Experimental !!

class Boat {
    private color = "red";

    get formattedColor(): string {
        return `Boat Color is ${this.color}`;
    }
    @testDecorator
    public pilot(): void {
        console.log("Swiss");
    }
}

function testDecorator(target: any, key: string, desc: PropertyDescriptor) {
    console.log(`target:`, target);
    console.log(`key: ${key}`);
    console.log("property descriptor ", desc);
}
// output: target // Boat prototypes formattedColor[Getter] pilot[Function]

// key pilot

// property descriptor
//{value: [Function]
// writable: true,
// enumerable: true,
// configurable: true }

// eg. decorators
class Cat {
    @logError
    public fetchCat() {
        throw new Error();
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;

    try {
        method();
    } catch {
        console.error("Oops something goes wrong.");
    }
}

new Cat().fetchCat();
// Error: Oops something goes wrong.

// eg decorators factory
class Cat {
    @logError("Something Bad Happened")
    public fetchCat() {
        throw new Error();
    }
}

function logError(errorMsg: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        const method = desc.value;
        try {
            method();
        } catch {
            console.error(errorMsg);
        }
    };
}

new Cat().fetchCat();
// Error: Something Bad Happened

// we can call decorators on each properties, methods or accessors and same thing
// applied for it's static
class Human {
    @testDecorator
    public static name = "Stephen";

    @testDecorator
    private static sayHello() {
        console.log("Hello");
    }

    @testDecorator
    get static age() {
        return 17;
    }
}

function testDecorator(target: any, key: string, desc: PropertyDescriptor) {
    console.log(key);

    console.log(target[key]);
    // GOTCHA :: properties defined on this object and
    // this is methods that store on object prototype
}

// Decorators also can used for class methods args
class Boat {
    public pilot(
        @parameterDecorator speed: string,
        @parameterDecorator isChannelOpen: boolean
    ): void {
        if (speed === "fast" && isChannelOpen) {
            console.log("Swish");
        }
    }
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);

    // output:
    // pilot 1
    // pilot 0
}

// Decorators can also applied for class it self
@classDecorator
class Boat {
    private color = "red";
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);

    // output:
    // [Function: Boat]
}

```

### Metadata

```typescript
// Proposed to added to JS and thus TS
// Snippets of info that can tied to object
```

i used reflect-matadata package in order to working with meta data

> yarn add reflect-matadata

```typescript
import "reflect-matadata"; // it will automatically adding Reflect method to global scoop

const plane = {
    color: "red"
};
Reflect.defineMetadata("hi", "Hi There", plane);
Reflect.defineMetadata("hi", "Hi There", plane, "color");

const hi = Reflect.getMetadata("hi", plane);
const planeColorHi = Reflect.getMetadata("hi", plane, "color");

console.log(hi); // Hi There
console.log(planeColorHi); // Hi There
```

### Meta-data and Decorator Together

```typescript
import "reflect-metadata";

class Plane {
    @markDecorator
    public fly() {
        console.log("vrrrr!");
    }
}

function markDecorator(target: any, key: string, des: PropertyDescriptor) {
    Reflect.defineMetadata("secret", "THIS IS SECRET", target, key);
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log(secret); // THIS IS SECRET"

@printMetaData
class Plane {
    @markDecorator
    public fly() {
        console.log("vrrrr!");
    }
}

function markDecorator(target: any, key: string, des: PropertyDescriptor) {
    Reflect.defineMetadata("secret", "THIS IS SECRET", target, key);
}

function printMetaData(constructor: typeof Plane) {
    for (let key in constructor.prototype) {
        console.log(Reflect.getMetadata("secret", constructor.prototype, key));
        // THIS IS SECRET"
    }
}
```
