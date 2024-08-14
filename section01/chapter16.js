// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "야옹이",
  coler: "검정색",
};

animal.age = 2;
animal.name = "냥이";
delete animal.coler;

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "홍길동",
  age: 16,
  getName: function () {
    return this.name;
  },
};

let str = person.getName(); // 홍길동
str = person["getName"](); // 홍길동

// console.log(str); // 홍길동
