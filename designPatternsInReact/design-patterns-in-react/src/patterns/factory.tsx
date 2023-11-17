const createButton = (type: string) => () => {
  return <button className={`${type}`}>{type} button</button>;
};
export default createButton;
