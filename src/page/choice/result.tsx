import { FOOD } from "../../data/food";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const dialog = (dialogRef: any) => {
  return (
    <dialog ref={dialogRef}>
      <form method="dialog">
        <p>
          <label>
            음식 기입:
            <input type="text" />
          </label>
        </p>
        <p>
          <label>
            등록된 음식
            <select>
              <option>선택</option>
              <option>치킨</option>
            </select>
          </label>
        </p>
        <menu>
          <button value="cancel">취소</button>
          <button id="confirmBtn" value="default">
            확인
          </button>
        </menu>
      </form>
    </dialog>
  );
};

export default function Result() {
  const [idx, setIdx] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const food = FOOD.answer[state as string];

  const msg = Array.from(state as string).map((value, index) => {
    return FOOD.question[index].options[+value] + " ";
  });

  return (
    <>
      {dialog(dialogRef)}
      <h3>선호하는 음식</h3>
      <h4>
        {food ? food : "그런 종류는..."} <br />
        <button
          type="button"
          onClick={() => {
            dialogRef.current?.showModal();
          }}
        >
          음식 추가하기
        </button>
      </h4>

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
