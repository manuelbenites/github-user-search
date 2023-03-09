import { useState, createContext, useContext } from "react"

export const ThemeContext = createContext()

export const useThemes = () => {
	const context = useContext(ThemeContext)
	return context
}

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark")
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
