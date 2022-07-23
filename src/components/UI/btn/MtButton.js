import React from "react";

const MtButton = ({children,...props}) => {
  return <button {...props} >{children}</button>;
};

export default MtButton;
