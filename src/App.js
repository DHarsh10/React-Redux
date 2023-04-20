import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const x = useSelector((state) => (state.reducerFunction.counter))
  const y = useSelector((state) => (state.reducerFunctionTwo.counterTwo))
  let dispath = useDispatch();
  console.log(useSelector((state) => (console.log(state))))

  const btn1ClickInc = () => {
    dispath({
      type: 'INC1',
      payload: 1
    })
  }

  const btn1ClickDec = () => {
    dispath({
      type: 'DEC1',
      payload: 1
    })
  }

  const btn2ClickInc = () => {
    dispath({
      type: 'INC2',
      payload: 100
    })
  }

  const btn2ClickDec = () => {
    dispath({
      type: 'DEC2',
      payload: 100
    })
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Func1: {x}</h2>
      <h2>Func2: {y}</h2>

      <div style={{ margin: "10px" }}>
        <button onClick={btn1ClickDec}>decrement button 1</button>
        <button onClick={btn1ClickInc}>Increment button 1</button>
      </div>

      <div style={{ margin: "10px" }}>
        <button onClick={btn2ClickDec}>decrement button 2</button>
        <button onClick={btn2ClickInc}>Increment button 2</button>
      </div>
    </div >
  );
}

export default App;
