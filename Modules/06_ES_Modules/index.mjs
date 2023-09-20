// import add from "./math.mjs";
// console.log(add(2,3))


// import math from './math.mjs'
// console.log(math.add(2,3))
// console.log(math.sub(2,3))

// const {add,sub} = math;
// console.log(add(2,3))
// console.log(sub(2,3))


// named import , this name should be same while exporting
import * as math from './math.mjs' // or simply import {add,sub} from './math.mjs'
const {add,sub} = math;
console.log(add(2,3))
console.log(sub(2,3))