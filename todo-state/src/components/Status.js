import React from "react";
import { TypeStatus } from "../services/Common";

export default function Status({ status, onChangeStatus }) {
  return (
    <>
      <ul className="nav">
        {Object.keys(TypeStatus).map((item) => (
          <li
            key={item}
            className={status === TypeStatus[item] ? "active" : ""}
          >
            <a href="#" onClick={() => onChangeStatus(TypeStatus[item])}>
              {TypeStatus[item]}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
