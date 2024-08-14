function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
      // console.log("hi");
      // // resolve("성공");
      // reject("실패");
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(null);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 비동기 작업 실행하는 함수
// executor

// setTimeout(() => {
//   console.log(promise); // Promise { <pending> }
// }, 3000);

// console.log(promise); // Promise { <pending> }

// then 메서드
// -> 그 후에
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // 여기에 바로 실행해도 됨

// catch 메서드
// promise.catch((error) => {
//   console.log(error);
// });
