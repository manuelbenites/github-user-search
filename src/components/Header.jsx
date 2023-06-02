import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"
import { useThemes } from "../context/ThemeContext"

function Header() {
	const { theme, setTheme } = useThemes()
	const changeTheme = () => {
		theme == "light" ? setTheme("dark") : setTheme("light")
	}
	return (
		<div className="header">
			<div className={`header--page text-bold-${theme}`}>devfinder</div>
			<button className="header__theme" onClick={changeTheme}>
				<div className={`header__theme--label text-${theme}`}>
					{theme == "light" ? "dark" : "light"}
				</div>
				<div>
					{theme == "light" ? (
						<MoonIcon className="header__theme--moon--icon" />
					) : (
						<SunIcon className="header__theme--sun--icon" />
					)}
				</div>
			</button>
		</div>
	)
}

export default Header
