//React hook = Special function that allows functional components to use React features without writing class components (React 16.8+)
// (useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect, useDebugValue)
// useState = React hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM (React 16.8+)
//          [name, setName]
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
export default Counter;
