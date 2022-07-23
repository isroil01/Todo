import React from "react";
import style from "./MyModal.module.css";

const MyModal = (props) => {
    
  return (
    <div onClick={() =>props.setVisible(false)} className={`${style.module} ${props.visible? style.active : ''}`}>
      <div onClick={(e) =>e.stopPropagation()} className={style.myModule}>
          {props.children}
      </div>
    </div>
  );
};

export default MyModal;
