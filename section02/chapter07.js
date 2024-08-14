// 6가지의 요소 조작메서드

// 1. push
// -> 배열의 끝에 요소 추가, 배열의 길이 반환
let arr = [1, 2, 3];
const pushedItem = arr.push(4);
// console.log(pushedItem, arr); // [1, 2, 3, 4]

// 2. pop
// -> 배열의 마지막 요소 제거, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

// console.log(popedItem); // 3
// console.log(arr2); // [1, 2]

// 3. shift
// -> 배열의 첫번째 요소 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem); // 1
// console.log(arr3); // [2, 3]

// 4. unshift
// -> 배열의 첫번째 요소로 요소 추가, 배열의 길이 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// console.log(newLength2, arr4); // 4 [0, 1, 2, 3]

// shift와 unshift는 push와 pop보다 느리다. 배열을 재배열해야하기 때문

// 5. slice
// -> 배열의 일부분을 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
const sliced = arr5.slice(2, 5); // [3, 4, 5]
const sliced2 = arr5.slice(3); // [4, 5]
const sliced3 = arr5.slice(-1); // [5]
// console.log(sliced); // [3, 4, 5]

// 6. concat
// -> 배열을 합쳐 새로운 배열 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);

// console.log(concatedArr); // [1, 2, 3, 4]
