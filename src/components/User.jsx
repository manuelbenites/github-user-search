import IconLocation from "/assets/icon-location.svg"
import IconCompany from "/assets/icon-company.svg"
import IconTwitter from "/assets/icon-twitter.svg"
import IconWebsite from "/assets/icon-website.svg"
import { useThemes } from "../context/ThemeContext.jsx"

function setDateFormat(str) {
	let date = new Date(str)
	let month = ("0" + (date.getMonth() + 1)).slice(-2)
	let day = ("0" + date.getDate()).slice(-2)
	return [date.getFullYear(), month, day].join("-")
}

function User({ userResult }) {
	const { theme } = useThemes()
	return (
		<>
			{userResult && (
				<div
					className={"user " + "bg-component-" + theme + " bg-shadow-" + theme}
				>
					<div className="user__header">
						<img src={userResult.avatar_url} className="user__header--avatar" />
						<div className="user__header__col">
							<div className={"user__header--username " + "text-bold-" + theme}>
								{userResult.name}
							</div>
							<div className="user__header--link">{"@" + userResult.login}</div>
							<div className={"user__header--admissiondate " + "text-" + theme}>
								{setDateFormat(userResult.created_at)}
							</div>
						</div>
					</div>
					<div className={"user--description " + "text-" + theme}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
						odio. Quisque volutpat mattis eros.
					</div>
					<div className={"user__info " + "bg-" + theme + "-mode"}>
						<div className="user__info__col">
							<div className={"user__info--label " + "text-" + theme}>
								Repos
							</div>
							<div className={"user__info--datanumber " + "text-bold-" + theme}>
								{userResult.public_repos}
							</div>
						</div>
						<div className="user__info__col">
							<div className={"user__info--label " + "text-" + theme}>
								Followers
							</div>
							<div className={"user__info--datanumber " + "text-bold-" + theme}>
								{userResult.followers}
							</div>
						</div>
						<div className="user__info__col">
							<div className={"user__info--label " + "text-" + theme}>
								Following
							</div>
							<div className={"user__info--datanumber " + "text-bold-" + theme}>
								{userResult.following}
							</div>
						</div>
					</div>
					<div className="user__links">
						<div className="user__links__row">
							<img className="user__links--icon" src={IconLocation} />
							<div className={"user--link " + "text-" + theme}>
								{userResult.location}
							</div>
						</div>
						<div className="user__links__row">
							<img className="user__links--icon" src={IconWebsite} />
							<a
								className={"user--link " + "text-" + theme}
								href={userResult.html_url}
								target="_blank"
								rel="noreferrer"
							>
								{userResult.html_url}
							</a>
						</div>
						<div className="user__links__row">
							<img className="user__links--icon" src={IconTwitter} />
							<div className={"user--link " + "text-" + theme}>
								{userResult.twitter_url
									? userResult.twitter_url
									: "Not Available"}
							</div>
						</div>
						<div className="user__links__row">
							<img className="user__links--icon" src={IconCompany} />
							<div className={"user--link " + "text-" + theme}>
								{userResult.company ? userResult.company : "Not Available"}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default User
