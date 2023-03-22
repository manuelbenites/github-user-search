import Header from "./components/Header.jsx"
import Search from "./components/Search.jsx"
import { useThemes } from "./context/ThemeContext.jsx"

function App() {
	const { theme } = useThemes()
	return (
		<main className={"App" + " " + "bg-" + theme}>
			<div className="app__container">
				<Header />
				<Search />
			</div>
		</main>
	)
}

export default App
