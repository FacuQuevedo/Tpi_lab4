import React, { useState } from "react";

const ToolTipRender = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };
  return (
    <div>
      <h2 onMouseOver={handleChange}>
        ToolTipRender :)
      </h2>
      {show && children}
    </div>
  );
};

export default ToolTipRender;