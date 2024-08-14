//  for 반복문
for (let idx = 1; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 짝수일 때 아래 코드를 실행하지 않고 다음 순번으로 넘어감
  } else {
    console.log(idx);
  }
}
