import { useEffect, useState } from "react"
import { getUserData } from "../services/getUserData.js"
import { useThemes } from "../context/ThemeContext.jsx"

import SearchIcon from "/assets/icon-search.svg"
import User from "./User.jsx"

function SearchUser() {
	const [userToFind, setUserToFind] = useState("octocat")
	const [userResult, setUserResult] = useState()
	const [error, setError] = useState()
	const { theme } = useThemes()

	const handleClick = (e) => {
		e.preventDefault()
		if (e.target.input.value.length > 0)
			return setUserToFind(e.target.input.value)
	}

	useEffect(() => {
		getUserData({ userToFind }).then((result) => {
			if (result.message) return setError("No results")
			else return setUserResult(result)
		})
	}, [userToFind])

	return (
		<>
			<form
				className={`search bg-component-${theme} bg-shadow-${theme}`}
				onSubmit={handleClick}
			>
				<div className="search__container">
					<img src={SearchIcon} className="search--icon" alt="search icon" />
					<input
						name="input"
						autoComplete="off"
						className={`search--input text-${theme}`}
						placeholder="Search GitHub username..."
					/>
				</div>
				{error && <label className="search--error">{error}</label>}
				<button className="search--button">Search</button>
			</form>
			<User userResult={userResult} />
		</>
	)
}

export default SearchUser
