import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝짜까ㅉ까</div>;
};
export default Even;

