import React, { useState } from "react";

const withToggle = (Component) => {
  const WrappedComponent = (props) => {
    const [show, setShow] = useState(false);

    const handleChange = () => {
      setShow(!show);
    };
    return <Component handle={handleChange} show={show} {...props} />;
  };

  return WrappedComponent;
};

const ToggleHoc = ({ children, handle, show }) => {
  return (
    <div>
      <button onClick={handle}>Toggle con Hoc</button>
      {show && children}
    </div>
  );
};

export const ToggleHOCwithToggle = withToggle(ToggleHoc);