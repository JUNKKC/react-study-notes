// 1. 배열 생성
let arr1 = new Array(); // 배열 생성자
let arr2 = []; // 배열 리터럴 (대부분 사용)

let arr3 = [1, 2, 3, 4, true, "안녕", [], {}];
// 배열에는 모든 데이터 타입이 들어갈 수 있음

// 2. 배열 요소 접근
let item1 = arr3[0]; // 1
let item2 = arr3[1]; // 2

// console.log(item1, item2); // 1 2

arr3[0] = "수정";
// console.log(arr3); // [ '수정', 2, 3, 4, true, '안녕', [], {} ]
