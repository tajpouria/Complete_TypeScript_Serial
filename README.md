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