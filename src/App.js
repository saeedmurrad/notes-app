import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import MyComponent from "./forms/MyComponent";
import axios from "axios";
const App = () => {
	// Data
	/*var usersData = [
		{ id: 1, title: 'Tania', content: 'floppydiskette' },
		{ id: 2, title: 'Craig', content: 'siliconeidolon' },
		{ id: 3, title: 'Ben', content: 'benisphere' },
	]*/
	let usersData = [];
	debugger
	axios.get("http://localhost:2525/api/notes",
				{ headers: {'Access-Control-Allow-Origin': '*'}}
			).then(function(response){
		usersData.push(response.data);
	})
	console.log(usersData)
	const initialFormState = { id: null, title: '', content: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, title: user.title, content: user.content })
	}
	return (
		<div className="container">
			<h1>Simple Notes App by Saeed Murrad</h1>
			<MyComponent />
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Note</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Note</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Notes</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
