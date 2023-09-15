import { useState } from "react";

const withTooleTip = (Component) => {
  const WrappedComponent = (props) => {
    const [show, setShow] = useState(false);
    const handleChange = () => {
      setShow(!show);
    };
    return <Component handle={handleChange} show={show} {...props} />;
  };

  return WrappedComponent;
};

const ToleTipHOC = ({ children, handle, show }) => {
  return (
    <div>
      <h2 onMouseOver={handle}>
            ToolTipHoc :)
      </h2>
      {show && children}
    </div>
  );
};

export const ToolTipWithHoc = withTooleTip(ToleTipHOC);