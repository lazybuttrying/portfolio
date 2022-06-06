import foodData from "../../data/food.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ul } from "../../layout/component/list";

export default function Food() {
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <h4>{foodData.question[idx].question}</h4>

      <form>
        <Ul>
          {foodData.question[idx].options.map((option: string) => {
            return (
              <li key={option}>
                <input type="radio" name="option" value={option} />
                <label htmlFor="option">{option}</label>
              </li>
            );
          })}
        </Ul>
        <button
          type="button"
          onClick={(e) => {
            if (idx === foodData.question.length - 1) {
              navigate("/quiz");
              return;
            }
            setIdx(idx + 1);
          }}
        >
          다음으로
        </button>
      </form>
    </>
  );
}
