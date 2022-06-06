import { FOOD } from "../../data/food";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Ul } from "../../layout/component/list";

export default function Result() {
  const [idx, setIdx] = useState(0);

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const food = FOOD.answer[state as string];

  const msg = Array.from(state as string).map((value, index) => {
    return FOOD.question[index].options[+value] + " ";
  });

  return (
    <>
      <h3>선호하는 음식</h3>
      <h4>{food ? food : "그런 종류는..."}</h4>

      <h3>선호하는 키워드</h3>
      <h4>{msg}</h4>

      <button
        type="button"
        onClick={(e) => {
          navigate("/quiz");
        }}
      >
        처음으로
      </button>
    </>
  );
}
