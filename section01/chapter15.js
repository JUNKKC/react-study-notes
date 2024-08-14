// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  // key: value,
  // key -> 프로퍼티 이름
  //   -> key는 "" 생략 가능 띄어쓰기가 있는 경우 "" 생략 불가능
  // value -> 프로퍼티 값
  //   -> value는 모든 데이터 타입 가능
  name: "홍길동",
  age: 16,
  "like coffee": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 대괄호 표기법)
let name = person.name; // 점 표기법
// let name = person.name2; // 점 표기법 (프로퍼티가 없는 경우 undefined)
let age = person["age"]; // 대괄호 표기법
// let age = person["age2"]; // 대괄호 표기법 (프로퍼티가 없는 경우 undefined)
// console.log(name, age); // 홍길동 16

let property = "name";
let names = person[property];

// 3-2. 새로운 프로퍼티 추가
person.job = "백수";
person["hobby"] = "게임";
// console.log(person);
// {
//  name: '홍길동', 'like coffee': true,
//  age: 16, job: '백수', hobby: '게임'
// }

// 3-3. 프로퍼티 수정
person.age = 20;
person["like coffee"] = false;

// 3-4. 프로퍼티 삭제
delete person.age;
delete person["like coffee"];
// console.log(person);
// { name: '홍길동', 'like coffee': true, job: '백수', hobby: '게임' }

// 3-5. 프로퍼티 존재 여부 확인
let isName = "name" in person; // true
let isPhone = "phone" in person; // false

// console.log(isName); // true
// console.log(isPhone); // false
