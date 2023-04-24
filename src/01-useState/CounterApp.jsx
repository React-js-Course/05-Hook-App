import { useState } from "react"

export const CounterApp = () => {

    const [ state, setCounter] = useState({ //Usamos un objeto en el UseState
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state; //Desfracmentar resultado

  return (
    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>

        <hr/>

        <button className="btn btn-success" onClick={ () => setCounter({
            ...state, //Usamos el Expred Opereitor
            counter1: counter1 + 1 // Ingreamos para modificar un hijo del objeto
        }) }>+1</button>
        <button className="btn btn-danger" onClick={ () => setCounter({
            ...state,
            counter2: counter2 - 1
        }) }>-1</button>
    </>
  )
}
