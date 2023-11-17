import React, { useState } from "react";

// Define a type for the props that the withToggle HOC will accept
interface WithToggleProps {
  isToggled: boolean;
  toggle: () => void;
}

// Higher Order Component
const withToggle = <P extends WithToggleProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  // This component has the toggle functionality
  const WithToggle: React.FC<Omit<P, keyof WithToggleProps>> = (props) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
      setIsToggled((prev) => !prev);
    };

    // Render the wrapped component with the additional props
    return (
      <WrappedComponent
        {...(props as P)}
        isToggled={isToggled}
        toggle={toggle}
      />
    );
  };

  return WithToggle;
};

// Your regular functional component
interface MyComponentProps {
  isToggled: boolean;
  toggle: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ isToggled, toggle }) => {
  return (
    <div>
      <h1>{isToggled ? "Toggled On" : "Toggled Off"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

// Wrap MyComponent with the withToggle HOC
const MyComponentWithToggle = withToggle(MyComponent);

export default MyComponentWithToggle;
