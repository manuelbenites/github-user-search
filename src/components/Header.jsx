import IconMoon from "/assets/icon-moon.svg"
import IconSun from "/assets/icon-sun.svg"
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
						<img className="header__theme--icon" src={IconMoon} />
					) : (
						<img className="header__theme--icon" src={IconSun} />
					)}
				</div>
			</button>
		</div>
	)
}

export default Header
