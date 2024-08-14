// 1. Date 객체를 생성하는 방법
let date = new Date();
// console.log(date);

let date2 = new Date("2000 / 01 / 21");
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970년 1월 1일 00:00:00"을 기준으로 몇 밀리초가 지났는지 나타내는 숫자
let ts1 = date.getTime();
// console.log(ts1); //1723650308125

let date3 = new Date(ts1);
// console.log(date3); // date와 date3는 같은 시간을 가리키는 객체

// 3. 시간 요소들을 추출하는방법
let year = date.getFullYear();
let month = date.getMonth() + 1; // 0부터 시작하므로 +1
let day = date.getDate();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

// console.log(year, month, day, hour, minute, second); // 2024 8 15 0 44 49
// 4. 시간 수정하기
date.setFullYear(2121);
date.setMonth(1);
date.setDate(21);
date.setHours(21);
date.setMinutes(21);
date.setSeconds(21);

// console.log(date); // 2121-02-21T12:21:21.125Z

// 5. 시간을 여러 포맷으로 출력하기
// console.log(date.toDateString()); // Fri Feb 21 2121
// console.log(date.toLocaleString()); //2121. 2. 21. 오후 9:21:21
