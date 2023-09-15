import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
    
  };
  return (
    <div>
      <button onClick={handleChange}>Toggle with RenderProps</button>
      {show && children}
    </div>
  );
};

export default Toggle;