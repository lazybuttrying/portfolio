import { FOOD } from "../../data/food";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ul } from "../../layout/component/list";

export default function Food() {
  const [idx, setIdx] = useState(0);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <h4>{FOOD.question[idx].question}</h4>

      <form>
        <Ul>
          {FOOD.question[idx].options.map((option: string, index: number) => {
            return (
              <li key={option}>
                <input
                  type="radio"
                  name="option"
                  value={index}
                  onChange={(e) => setValue(e.target.value)}
                />
                <label htmlFor="option">{option}</label>
              </li>
            );
          })}
        </Ul>
        <button
          type="button"
          onClick={(e) => {
            if (idx === FOOD.question.length - 1) {
              navigate("/quiz/food/result", { state: result + value });
              return;
            }
            setResult(result + value);
            setIdx(idx + 1);
          }}
        >
          다음으로
        </button>
      </form>
    </>
  );
}
