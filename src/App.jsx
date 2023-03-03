import { useEffect, useState } from "react"
import { getUserData } from "./services/getUserData.js"

import IconMoon from "/assets/icon-moon.svg"
import IconSearch from "/assets/icon-search.svg"
import IconLocation from "/assets/icon-location.svg"
import IconCompany from "/assets/icon-company.svg"
import IconTwitter from "/assets/icon-twitter.svg"
import IconWebsite from "/assets/icon-website.svg"

function App() {
	const [userFound, setUserFound] = useState()
	const [searchUser, setSearchUser] = useState("octocat")
	const [error, setError] = useState()

	const handleClick = (e) => {
		e.preventDefault()
		if (e.target.input.value.length > 0)
			return setSearchUser(e.target.input.value)
	}

	useEffect(() => {
		getUserData(searchUser).then((result) => {
			if (result.message) return setError("No results")
			else return setUserFound(result)
		})
	}, [searchUser])

	return (
		<div className="App">
			<div className="app__container">
				<div className="header">
					<div className="header--page">devfinder</div>
					<div className="header__theme">
						<div className="header__theme--label">dark</div>
						<button className="header__theme--button">
							<img className="header__theme--icon" src={IconMoon} />
						</button>
					</div>
				</div>
				<form className="search" onSubmit={handleClick}>
					<img src={IconSearch} className="search--icon" />
					<input
						name="input"
						className="search--input"
						placeholder="Search GitHub username..."
					/>
					{error && <label className="search--error">{error}</label>}
					<button className="search--button">Search</button>
				</form>
				{userFound && (
					<div className="user">
						<div className="user__header">
							<img
								src={userFound.avatar_url}
								className="user__header--avatar"
							/>
							<div className="user__header__col">
								<div className="user__header--username">{userFound.name}</div>
								<div className="user__header--link">
									{"@" + userFound.login}
								</div>
								<div className="user__header--admissiondate">
									{userFound.created_at}
								</div>
							</div>
						</div>
						<div className="user--description">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
							odio. Quisque volutpat mattis eros.
						</div>
						<div className="user__info">
							<div className="user__info__col">
								<div className="user__info--label">Repos</div>
								<div className="user__info--datanumber">
									{userFound.public_repos}
								</div>
							</div>
							<div className="user__info__col">
								<div className="user__info--label">Followers</div>
								<div className="user__info--datanumber">
									{userFound.followers}
								</div>
							</div>
							<div className="user__info__col">
								<div className="user__info--label">Following</div>
								<div className="user__info--datanumber">
									{userFound.following}
								</div>
							</div>
						</div>
						<div className="user__links">
							<div className="user__links__row">
								<img className="user__links--icon" src={IconLocation} />
								<div className="user--link">{userFound.location}</div>
							</div>
							<div className="user__links__row">
								<img className="user__links--icon" src={IconWebsite} />
								<div className="user--link">{userFound.html_url}</div>
							</div>
							<div className="user__links__row">
								<img className="user__links--icon" src={IconTwitter} />
								<div className="user--link">
									{userFound.twitter_url
										? userFound.twitter_url
										: "Not Available"}
								</div>
							</div>
							<div className="user__links__row">
								<img className="user__links--icon" src={IconCompany} />
								<div className="user--link">
									{userFound.company ? userFound.company : "Not Available"}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
