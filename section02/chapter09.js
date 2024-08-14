// 5가지 배열 변형 메서드
// 1. filter
// 기존 베열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "홍길동", hobby: "요리" },
  { name: "이몽룡", hobby: "요리" },
  { name: "성춘향", hobby: "봉사" },
];

const filtered = arr1.filter((item) => item.hobby === "요리");

// console.log(filtered);
// [ { name: '홍길동', hobby: '요리' }, { name: '이몽룡', hobby: '요리' } ]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => item * 2);
// console.log(mapResult1); // [ 2, 4, 6 ]

let names = arr1.map((item) => item.name);

// console.log(names); // [ '홍길동', '이몽룡', '성춘향' ]

// 3. sort
// 배열을 사전순으로 정렬
let arr3 = [3, 10, 2, 1, 5];
const sorted = arr3.sort((a, b) => a - b);
//•	a - b의 의미:
// •	a - b의 결과가 음수이면 a가 b보다 작다는 의미입니다. 이 경우, sort 함수는 a를 b의 앞에 위치시킵니다.
// •	a - b의 결과가 양수이면 a가 b보다 크다는 의미입니다. 이 경우, sort 함수는 b를 a의 앞에 위치시킵니다.
// •	a - b가 0이면 두 값이 같다는 의미이며, 이 경우 요소들의 순서는 바뀌지 않습니다.
// 오름차순 정렬 내림 차순은 b - a
// console.log(sorted); // [ 1, 2, 3, 5, 10 ]

// 4. toSorted (가장 최근에 추가된 최신 메서드)
// 정렬된 새로운 배열을 반환
let arr4 = [3, 10, 2, 1, 5];
const sorted2 = arr4.toSorted((a, b) => a - b);

// console.log(arr4); // [ 3, 10, 2, 1, 5 ]
// console.log(sorted2); // [ 1, 2, 3, 5, 10 ]

// 5. join
// 배열의 모든 요소를 문자열로 변환하고, 이를 연결한 문자열을 반환
let arr5 = [1, 2, 3];
const joined = arr5.join(); // () 안에 구분자를 넣어줄 수 있다. ("")을 넣으면 123 이런식으로 붙는다.
console.log(joined); // 1,2,3
