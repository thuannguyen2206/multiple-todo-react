import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeStatus } from "../services/Common";
import { changeStatus } from "../redux/actions/statusAction";

export default function Status() {
  const dispatch = useDispatch();
  const status = useSelector((select) => select.status);

  const handleChangeStatus = (status) => {
    const action = changeStatus(status);
    dispatch(action);
  };

  return (
    <>
      <ul className="nav">
        {Object.keys(TypeStatus).map((item) => (
          <li
            key={item}
            className={status === TypeStatus[item] ? "active" : ""}
          >
            <a href="#" onClick={() => handleChangeStatus(TypeStatus[item])}>
              {TypeStatus[item]}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
