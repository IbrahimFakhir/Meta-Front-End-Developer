import { useState, useRef } from "react";

export default function Form() {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return (
        <form>
            <input
                value={value}
                onChange={handleChange}
                type="text"
            />
            <p>Your value is {value}</p>
        </form>
    )
}

function UncontrolledInput() {
    const inputRef = useRef(null);
    
    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        console.log(inputValue)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input ref={inputRef} type="text"></input>
            <button type="submit">Submit</button>
        </form>
    )
}
