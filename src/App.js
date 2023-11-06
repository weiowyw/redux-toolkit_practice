import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, reset} from './slices/CounterSlice'
import {useState} from "react";

function App() {

    const [value, setValue] = useState(0);

    const dispatch = useDispatch();
    const counter = useSelector(store => store.counter);


    const handleIncrement = () => {
        dispatch(increment(value))
    }
    const handleDecrement = () => {
        dispatch(decrement(value))
    }
    const handleReset = () => {
        dispatch(reset())
    }

    return (
        <div className="App">
            <input type='text' onChange={e => setValue(e.target.value)}/>
            <h1>value: {counter.value}</h1>
            <button onClick={handleIncrement}>I</button>
            <button onClick={handleDecrement}>D</button>
            <button onClick={handleReset}>R</button>

        </div>
    );
}

export default App;
