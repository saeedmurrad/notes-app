import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Title</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Content</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button>Add New Note</button>
		</form>
	)
}

export default AddUserForm
