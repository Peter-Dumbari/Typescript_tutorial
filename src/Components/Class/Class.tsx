import React, { useEffect, useState } from "react";

interface istate {
  age: number;
}
interface Iprops {
  name  : string;
  age: number;
  village: string;
}

 const Class:React.FC<Iprops>=({name, age ,village })=>{
  let [state, setState] = useState<istate>({
    age: 0,
  });

  const stateIncrement = (): void => {
    setState({ age: state.age + 1 });
  };
  const stateDecrement = (): void => {
    setState({ age: state.age - 1 });
  };


  return <>
  <div>{state.age}</div>
  <button onClick={stateIncrement}>plus</button>
  <button onClick={stateDecrement} disabled={state.age<1}>plus</button>

  <ul>
    <li>{age}</li>
    <li>{name}</li>
    <li>{village}</li>
  </ul>
  </>;
}

export default Class;