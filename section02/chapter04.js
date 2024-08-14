// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개발로 흩뿌려주는 역활

let arr = [1, 2, 3];
let arr2 = [...arr, 6, 7, 8];

let obj = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr);

// 2. Rest 매개변수
// -> Rest : 나머지라는 뜻

function funcB(a, ...rest) {
  // a, 이런식으로 앞에 뺄수는 있지만 ...rest는 맨 뒤에 와야한다.
  console.log(rest);
}

funcB(...arr);
