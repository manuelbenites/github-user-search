export const getUserData = (user) => {
	return fetch(`https://api.github.com/users/${user}`).then((data) =>
		data.json()
	)
}
