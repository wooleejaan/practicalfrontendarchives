import {
  useState,
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
} from "react";

const Accordion = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          active: index === activeIndex,
          onClick: () => handleClickItem(index),
        })
      )}
    </div>
  );
};

Accordion.Item = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children?: ReactNode;
}) => (
  <div className={`accordion-item ${active ? "active" : ""}`} onClick={onClick}>
    {children}
  </div>
);

export default Accordion;
