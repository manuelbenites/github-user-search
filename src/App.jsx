import Header from "./components/Header.jsx"
import SearchUser from "./components/SearchUser.jsx"
import { ThemeContextProvider } from "./context/ThemeContext.jsx"
import { useThemes } from "./context/ThemeContext.jsx"

function App() {
	const { theme } = useThemes()
	return (
		<div className={"App" + " " + "bg-" + theme + "-mode"}>
			<div className="app__container">
				<Header />
				<SearchUser />
			</div>
		</div>
	)
}

export default App
