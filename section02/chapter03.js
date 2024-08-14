// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
// console.log(one, two, three); // 1 2 3

// 2. 객체의 구조 분해 할당
let person = { name: "홍길동", age: 16, address: "서울시" };

let { name, age, address, extra = "hi" } = person;
// console.log(name, age, address, extra); // 홍길동 16 서울시 hi

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ naem, age, address, extra }) => {
  console.log(name, age, address, extra);
};

func(person);
