import Header from "./components/Header.jsx"
import Search from "./components/Search.jsx"
import { useThemes } from "./context/ThemeContext.jsx"

function App() {
	const { theme } = useThemes()
	return (
		<div className={"App" + " " + "bg-" + theme}>
			<div className="app__container">
				<Header />
				<Search />
			</div>
		</div>
	)
}

export default App
