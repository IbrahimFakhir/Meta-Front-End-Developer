import { useRef } from "react";

export default function Form() {
    return <h1>yo</h1>
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
