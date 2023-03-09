export const getUserData = ({ userToFind }) => {
	return fetch(`https://api.github.com/users/${userToFind}`).then((data) =>
		data.json()
	)
}
