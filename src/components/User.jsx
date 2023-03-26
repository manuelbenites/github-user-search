import { useThemes } from "../context/ThemeContext.jsx"
import IconCompany from "./IconCompany.jsx"
import IconWebsite from "./IconWebsite.jsx"
import IconLocation from "./IconLocation.jsx"
import IconTwitter from "./IconTwitter.jsx"

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
					<div className="user__container">
						<div className="user__header">
							<img
								src={userResult.avatar_url}
								className="user__header--avatar"
								alt="avatar img"
							/>
							<div className="user__header__col">
								<div
									className={"user__header--username " + "text-bold-" + theme}
								>
									{userResult.name}
								</div>
								<div className="user__header--link">
									{"@" + userResult.login}
								</div>
								<div
									className={"user__header--admissiondate " + "text-" + theme}
								>
									{setDateFormat(userResult.created_at)}
								</div>
							</div>
						</div>
						<div className={"user--description " + "text-" + theme}>
							{!userResult.bio ? "This profile has no bio" : userResult.bio}
						</div>
						<div className={"user__info " + "bg-" + theme + "-mode"}>
							<div className="user__info__col">
								<div className={"user__info--label " + "text-" + theme}>
									Repos
								</div>
								<div
									className={"user__info--datanumber " + "text-bold-" + theme}
								>
									{userResult.public_repos}
								</div>
							</div>
							<div className="user__info__col">
								<div className={"user__info--label " + "text-" + theme}>
									Followers
								</div>
								<div
									className={"user__info--datanumber " + "text-bold-" + theme}
								>
									{userResult.followers}
								</div>
							</div>
							<div className="user__info__col">
								<div className={"user__info--label " + "text-" + theme}>
									Following
								</div>
								<div
									className={"user__info--datanumber " + "text-bold-" + theme}
								>
									{userResult.following}
								</div>
							</div>
						</div>
						<div className="user__links">
							<div className="user__links__row">
								{userResult.location ? (
									<>
										<IconLocation className={"user__links--icon--" + theme} />
										<p className={"user--link--nounderline " + "text-" + theme}>
											{userResult.location}
										</p>
									</>
								) : (
									<>
										<IconLocation className="user__links--icon--off" />
										<p className="user--link--noavailable">Not Available</p>
									</>
								)}
							</div>
							<div className="user__links__row">
								{userResult.blog ? (
									<>
										<IconWebsite className={"user__links--icon--" + theme} />
										<a
											className={"user--link " + "text-" + theme}
											href={userResult.blog}
											target="_blank"
											rel="noreferrer"
										>
											{userResult.blog}
										</a>
									</>
								) : (
									<>
										<IconWebsite className="user__links--icon--off" />
										<p className="user--link--noavailable">Not Available</p>
									</>
								)}
							</div>
							<div className="user__links__row">
								{userResult.twitter_url ? (
									<>
										<IconTwitter
											className={
												"link--underline--hover user__links--icon--" + theme
											}
										/>
										<a
											className={"user--link " + "text-" + theme}
											href={userResult.twitter_url}
											target="_blank"
											rel="noreferrer"
										>
											{userResult.twitter_url}
										</a>
									</>
								) : (
									<>
										<IconTwitter className="user__links--icon--off" />
										<p className="user--link--noavailable">Not Available</p>
									</>
								)}
							</div>
							<div className="user__links__row">
								{userResult.company ? (
									<>
										<IconCompany className={"user__links--icon--" + theme} />
										<p className={"user--link--nounderline " + "text-" + theme}>
											{userResult.company}
										</p>
									</>
								) : (
									<>
										<IconCompany className="user__links--icon--off" />
										<p className="user--link--noavailable">Not Available</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default User
