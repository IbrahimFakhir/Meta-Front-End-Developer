export default function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>
    
    function handleClick() {
        darkModeOn = !darkModeOn
        darkModeOn ? console.log("Dark Mode is on") : console.log("Light mode is on")
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}
