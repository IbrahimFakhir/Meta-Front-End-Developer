const Nav = (props) => {
	return (
		<ul>
			<li>{props.first}</li>
		</ul>
	)
}

function App(props) {
	return <Nav first="yo" />
}

export default App;
