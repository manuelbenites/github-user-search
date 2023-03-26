import IconMoon from "./IconMoon.jsx"
import IconSun from "./IconSun.jsx"
import { useThemes } from "../context/ThemeContext.jsx"

function Header() {
	const { theme, setTheme } = useThemes()
	const changeTheme = () => {
		if (theme == "light") {
			setTheme("dark")
		} else {
			setTheme("light")
		}
	}
	return (
		<div className="header">
			<div className={"header--page " + "text-bold-" + theme}>devfinder</div>
			<button className="header__theme" onClick={changeTheme}>
				<div className={"header__theme--label " + "text-" + theme}>
					{theme == "light" ? "dark" : "light"}
				</div>
				<div>
					{theme == "light" ? (
						<IconMoon className="header__theme--moon--icon" />
					) : (
						<IconSun className="header__theme--sun--icon" />
					)}
				</div>
			</button>
		</div>
	)
}

export default Header
