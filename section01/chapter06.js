// 1. 묵시적 형변환
//-> 자바스크립트 엔진이 알아서 형변환을 해주는 것

let num = 10;
let str = "10";

const result = num + str;

// 2. 명시적 형변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 해주는 것
let str1 = "1";
let strToNum1 = Number(str1);
// console.log(10+strToNum1); // 11

let str2 = "10s";
let strToNum2 = Number(str2);
// console.log(strToNum2); // NaN

let str3 = 10;
let numToStr1 = String(str3);
// console.log(numToStr1 + "입니다"); // "10입니다"
