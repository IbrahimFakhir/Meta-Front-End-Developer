// export default function Btn() {
//     const clickHandler = () => console.log("clicked");

//     return (
//         <button onClick={clickHandler}>
//             Click Me
//         </button>
//     );
// }

export default function Btn() {
    // const clickHandler = () => console.log("mouse over");

    return (
        <button onMouseOver={() => console.log("mouse over")}>
            Click Me
        </button>
    );
}
