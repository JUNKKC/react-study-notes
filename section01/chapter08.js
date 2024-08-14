// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> 좌항이 null 또는 undefined일 때 우항의 값을 반환
// -> 좌항이 null 또는 undefined가 아니면 좌항의 값을 반환
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 10 null이 아니므로 var2의 값인 10을 반환

// 예시
let uesrName = "김찬준"; // 유저 이름이 있다고 가정
let uesrName2; // 유저 이름이 없다고 가정
let uesrNickName = "준준"; // 유저 닉네임이 있다고 가정

let displayName = uesrName ?? uesrNickName; // uesrName 값이 null이 아니므로 uesrName의 값인 "김찬준"을 반환
let displayName2 = uesrName2 ?? uesrNickName; // uesrName2 값이 null이므로 uesrNickName의 값인 "준준"을 반환

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 10;
let var8 = "Hello";

let type1 = typeof var7; // number
let type2 = typeof var8; // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식이 참이면 참일 때 반환값을 반환하고, 거짓이면 거짓일 때 반환값을 반환
let var9 = 10;

// 요구사항 : 변수 res에 var9의 값이 짝수이면 "짝수", 홀수이면 "홀수"를 대입

// -> 조건식 ? 참일 때 반환값 : 거짓일 때 반환값
let res = var9 % 2 === 0 ? "짝수" : "홀수"; // 10 % 2 === 0 이므로 "짝수" 반환
