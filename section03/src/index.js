// CommonJS 모듈 시스템
// const { add, sub } = require("./math");
import { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor(3);

console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
