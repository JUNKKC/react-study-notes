// 1. 콜백함수
function main(value) {
  value();
}
function sub() {
  console.log("서브 함수");
}
main(sub);
// 간략1
main(function sub() {
  //넣어서 호출
  console.log("서브 함수");
});
// 간략2
main(function () {
  // 익명함수로 호출
  console.log("서브 함수");
});
// 간략3
main(() => {
  //화살표 함수로 호출
  console.log("서브 함수");
});

// 2. 콜백함수의 활용

function repeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback(i);
  }
}
repeat(5, function (idx) {
  console.log(idx);
});
repeat(5, function (idx) {
  console.log(idx * 2);
});
repeat(5, (idx) => {
  console.log(idx * 3);
});
