import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";

const numberCollection = new NumberCollection([5, 48, 1, 0, 5]);
const stringCollection = new StringCollection("HeelooJ");

numberCollection.sort();
stringCollection.sort();

console.log(numberCollection.collection);
console.log(stringCollection.collection);

