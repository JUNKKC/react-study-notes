import useInput from "./../hooks/useInput";
// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅(커스텀 훅) 직접 만들수 있다
// 함수명 앞에 ues를 붙혀주면 리액트에서 커스텀 훅으로 인식함

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
