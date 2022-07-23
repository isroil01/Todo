import React from "react";
import MtButton from "./UI/btn/MtButton";

const TableItems = (props) => {
  return (
    <div className="d-flex justify-content-between border pt-3 px-2 my-1 ">
      <p>{props.title}</p>
      <p>{props.number}</p>
      <p>{props.stack}</p>
      <p>
        <MtButton
          className="btn btn-outline-danger w-100"
          onClick={() => props.remove(props.id)}
        >
          Delete
        </MtButton>
      </p>
    </div>
  );
};

export default TableItems;
