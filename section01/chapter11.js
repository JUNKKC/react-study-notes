//함수
function getArea(width, height) {
  function another() {
    // 함수 안에 함수 선언 가능 (중첩 함수)
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(20, 30);
console.log(area2);

// 호이스팅
// -> 함수 선언문은 코드의 최상단으로 끌어올려지는 현상
// function getArea(width, height) {
//   function another() {
//     console.log("another");
//   }
//   another();
//   let area = width * height;
//   return area;
// }
