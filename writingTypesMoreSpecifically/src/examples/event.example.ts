/**
 * @title onClick 일반 이벤트
 *
 * @description 이벤트 타입을 찾는 가장 쉬운 방법은, inline으로 작성하고 IDE에서 hover하는 것이다.
 * @example
 * ```javascript
 *   <button onClick={event => console.log(event)}>Click</button>
 * ```
 */
const handleClickDefault = (event: React.MouseEvent<HTMLElement>) => {
  console.log(event.target);
  console.log(event.currentTarget);
};

/**
 * onClick button 이벤트
 */
const handleClickButton = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  console.log(event.target);
  console.log(event.currentTarget);
};

/**
 * onClick div 이벤트
 */
const handleClickDiv = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  console.log(event.target);
  console.log(event.currentTarget);
};

export { handleClickDefault, handleClickButton, handleClickDiv };
