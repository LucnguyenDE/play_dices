import React from "react";
import { useSelector } from "react-redux";
import { selectStatus } from "../features/status/statusSlice";

export default function PlayResult() {
  const status = useSelector(selectStatus);
  return (
    <div className="space-y-5">
      <h2 className="text-3xl">
        Bạn chọn:{" "}
        <span className="text-red-600" id="choosen">
          Tài
        </span>
      </h2>
      <h2 className="text-3xl ">
        Số màn thắng: <span className="text-lime-300">{status.win}</span>
      </h2>
      <h2 className="text-3xl">
        Tổng số màn chơi:{" "}
        <span className="text-fuchsia-300">{status.totalPlay}</span>
      </h2>
    </div>
  );
}
