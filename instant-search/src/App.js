import React from "react"
import "./custom.css"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
	const [users, setUsers] = useState([])
	const [text, setText] = useState("")
	const [suggestions, setSuggestions] = useState([])
	useEffect(() => {
		const loadUsers = async () => {
			const response = await axios.get("https://reqres.in/api/users")
			console.log(`response.data`, response.data)
			setUsers(response.data.data)
		}
		loadUsers()
	}, [])

	const onSuggestHandler = (text) => {
		setText(text)
		setSuggestions([])
	}
	const onChangeHanlder = (text) => {
		let matches = []
		if (text.length) {
			matches = users.filter((user) => {
				const regex = new RegExp(`${text}`, "gi")
				return user.email.match(regex)
			})
		}
		console.log(`matches`, matches)
		setSuggestions(matches)
		setText(text)
	}
	return (
		<div className="container">
			<h3>{text}</h3>
			<input
				type="text"
				className="col-md-12"
				style={{ marginTop: 12 }}
				onChange={(e) => onChangeHanlder(e.target.value)}
				value={text}
				onBlur={() => {
					setTimeout(() => {
						setSuggestions([])
						console.log("trick worked")
					}, 100)
				}}
			/>
			{suggestions &&
				suggestions.map((suggestion, i) => (
					<div
						className="justify-center suggestion col-md-12"
						key={i}
						onClick={() => onSuggestHandler(suggestion.email)}
					>
						{suggestion.email}
					</div>
				))}
		</div>
	)
}

export default App
