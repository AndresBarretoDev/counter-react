import { Fragment, useState } from "react";
import PropTypes from 'prop-types'


const CounterApp = ({value})=>{
    const [counter,setCounter] = useState(value);

    // handleadd
    const handleAdd = (e)=>{
        // option 1 when we have de counter value 
        setCounter(counter + 1);
        
        // option 2 when we haven't de counter value 
        // setCounter((c)=> c + 1);
    }
    // handleReset
    const handleReset = (e)=> setCounter(value);
    
    // handleSubstract
    const handleSubstract = (e)=> setCounter(counter - 1);
    

    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </Fragment>
    )

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;