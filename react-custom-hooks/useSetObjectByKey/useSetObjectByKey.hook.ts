import { useState } from "react";
import setObjectByKey from "./setObjectByKey.util";

const useSetObjectByKey = <T extends object>(defaultObject: T) => {
  const [state, setState] = useState<T>(defaultObject ?? undefined);

  return {
    state,
    setStateByKey: setObjectByKey(state, setState),
  };
};

export default useSetObjectByKey;
