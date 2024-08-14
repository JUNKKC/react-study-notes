// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "복날";

    callback(food);
  }, 3000);
}

function cooldown(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food} `;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `얼은 ${food}`;
    callback(freezedFood);
  }, 1000);
}

orderFood((food) => {
  console.log(food); // 3초 후 출력

  cooldown(food, (cooldownedFood) => {
    console.log(cooldownedFood); // food가 출력된 후 2초 후 출력

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood); // cooldownedFood가 출력된 후 1초 후 출력
    });
  });
});
