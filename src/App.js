import { useRef } from "react";

const App = () => {
  // se asigna a un elemento JSX, vamos a poder acceder a ese elemento
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref.current.clientHeight);
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>
        Lala
      </div>
    </div>
  );
};

export default App;
