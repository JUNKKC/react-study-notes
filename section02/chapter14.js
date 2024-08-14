// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "jin",
        age: 30,
      });
    }, 2000);
  });
}

// console.log(getData()); // Promise { { name: 'jin', age: 30 } }

// await
// async 함수 안에서만 동작
// 비동기 함수가 다 처리되기를 기달리는 역활

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
