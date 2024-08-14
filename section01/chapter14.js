// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(b);
  funcB();
  function funcB() {
    console.log("funcB");
  }
}
if (true) {
  let c = 3; // 지역 스코프
  function funcB() {
    console.log("funcB");
  }
}
for (let d = 1; d < 3; d++) {
  console.log(d); // d는 지역 스코프
  let e = 5; // 지역 스코프
}

// 콘솔 출력
funcA();
console.log(a);
// console.log(b); // b는 지역 스코프이기 때문에 접근 불가능
// funcB(); // funcB는 funcA의 지역 스코프이기 때문에 접근 불가능
// 반복문이나 조건문 안에서 선언된 함수는 전역 스코프 이지만 사용하지 않음

// console.log(c); // c는 지역 스코프이기 때문에 접근 불가능
// console.log(d); // d는 지역 스코프이기 때문에 접근 불가능
