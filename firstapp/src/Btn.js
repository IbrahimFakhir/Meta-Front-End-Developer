export default function Btn() {
    const clickHandler = () => console.log("clicked");

    return (
        <button onClick={clickHandler}>
            Click Me
        </button>
    );
}
