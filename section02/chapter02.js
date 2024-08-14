// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name ? name : "이름이 없습니다.");
}
printName();
printName({ name: "홍길동 챕2" });
