/**
 * @param input 사용할 state
 * @param setInput 사용할 setState
 * @description setByKey를 생성해주는 함수입니다.
 * @example
 * ```jsx
 * const setPartByKey = setObjectByKey(partInput, setPartInput)
 *
 * return (
 *    onChange={(event) => setPartByKey('manager', event.target.value)}
 * )
 * ```
 */
const setObjectByKey =
  <T extends Record<string, any>>(input: T, setInput: (input: T) => void) =>
  (key: keyof T, value: T[keyof T]) => {
    setInput({
      ...input,
      [key]: value,
    });
  };

export default setObjectByKey;
