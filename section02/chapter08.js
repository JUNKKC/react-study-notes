// 5가지 요소 순회 및 탐색 메서스
// 1. forEach
// -> 배열의 요소를 순회하면서 콜백함수 실행
let arr1 = [1, 2, 3];

arr1.forEach((item, index, array) => {
  // console.log(item, index * 2);
});

let doubled = [];

arr1.forEach((item) => {
  doubled.push(item * 2);
});
// console.log(doubled); // [2, 4, 6]

// 2. includes
// -> 배열에 특정 요소가 포함되어 있는지 확인
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(2);

// console.log(isInclude); // true

// 3. indexOf
// -> 배열에 특정 요소가 몇 번째 인덱스에 위치하는지 확인
// 얕은 비교를 하기 때문에 객체는 비교할 수 없다.
let arr3 = [1, 2, 3];
let indexOf = arr3.indexOf(12);

// console.log(indexOf); // -1 는 존재하지 않는다는 의미

//4. findIndex
// -> 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// -> 특정 요소의 인덱스(위치)를 반환하는 메서드
// -> 만족하는 요소가 없으면 -1을 반환

let arr4 = [1, 2, 3];
let findIndex = arr4.findIndex((item) => item % 2 === 0);

// console.l ndIndex); // 1

// let arr5 = [{ name: "멍멍이" }, { name: "야옹이" }];
// let findIndex2 = arr5.findIndex((item) => item.name === "야옹이");

// 5.find
// -> findIndex와 비슷하지만, 요소 자체를 반환

let arr5 = [{ name: "멍멍이" }, { name: "야옹이" }];
const finded = arr5.find((item) => item.name === "야옹이");

// console.log(finded); // { name: '야옹이' }
