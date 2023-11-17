/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, useState } from "react";

// Higher Order Component
const withToggle = <P,>(WrappedComponent: React.ComponentType<P>) => {
  // This component has the toggle functionality
  const AddWithToggle: React.FC<P> = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
      setIsToggled((prev) => !prev);
    };

    // Render the wrapped component with the additional props
    return (
      <WrappedComponent {...(props as P)}>
        <h1>{isToggled ? "Toggled On" : "Toggled Off"}</h1>
        <button onClick={toggle}>Toggle</button>
      </WrappedComponent>
    );
  };

  return AddWithToggle;
};

// Your regular functional component
interface MyComponentProps {
  children?: ReactNode;
  color: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ children, color }) => {
  return <div style={{ color }}>{children}</div>;
};

// Wrap MyComponent with the withToggle HOC
const MyComponentWithToggle = withToggle(MyComponent);

export default MyComponentWithToggle;
