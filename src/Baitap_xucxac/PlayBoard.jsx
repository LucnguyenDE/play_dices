import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { selectDices, mix } from "../features/dices/dicesSlice";
import {
  selectStatus,
  updateGamePlayed,
  updateGameWin,
  updateChoose,
} from "../features/status/statusSlice";

const image_url = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png",
];
export default function PlayBoard() {
  const dispatch = useDispatch();
  const url = useSelector(selectDices);
  const status = useSelector(selectStatus);
  const checkResult = () => {
    let sum_of_dices = url.map((dice) => dice.value).reduce(getSum, 0);
    let num = sum_of_dices % 2;
    if (num === status.choosen) {
      dispatch(updateGameWin());
    }
  };
  useEffect(() => {
    checkResult();
  }, [url]);
  const handleClickTai = () => {
    dispatch(updateChoose({ choosen: 0 }));
    document.getElementById("choosen").innerHTML = "Tài";
    let dices = playGame();
    preventButtonClick(true);
    setTimeout(() => {
      dispatch(mix(dices));
      dispatch(updateGamePlayed());
      preventButtonClick(false);
    }, 2000);
  };
  const handleClickXiu = () => {
    dispatch(updateChoose({ choosen: 1 }));
    document.getElementById("choosen").innerHTML = "Xỉu";
    let dices = playGame();
    preventButtonClick(true);
    setTimeout(() => {
      dispatch(mix(dices));
      dispatch(updateGamePlayed());
      preventButtonClick(false);
    }, 2000);
  };
  return (
    <div className="play_board flex justify-between items-center items-stretch">
      <div>
        <button
          className="p-20  bg-sky-500 hover:bg-sky-700 text-white rounded-lg border-8 text-5xl"
          onClick={handleClickTai}
        >
          Tài
        </button>
      </div>
      <div className="result_board flex self-start ">
        {url.map((dice) => {
          return <img key={nanoid()} width="50px" src={dice.img} alt="" />;
        })}
      </div>
      <div>
        <button
          className="p-20 bg-violet-500 hover:bg-violet-600 text-white rounded-lg border-8 text-5xl"
          onClick={handleClickXiu}
        >
          Xỉu
        </button>
      </div>
    </div>
  );
}
const playGame = () => {
  let dices = [];
  for (let i = 0; i < 3; i++) {
    let random_number = Math.floor(Math.random() * 6);
    let dice = { img: image_url[random_number], value: random_number + 1 };
    dices.push(dice);
  }
  return dices;
};
const getSum = (total, num) => {
  return total + num;
};
const preventButtonClick = (status) => {
  const button = Array.from(document.getElementsByTagName("button"));
  button.forEach((item) => (item.disabled = status));
};
