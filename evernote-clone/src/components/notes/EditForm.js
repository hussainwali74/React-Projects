import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { useHistory } from "react-router-dom"

import { updateNote } from "../../store/actions/noteAction"

import useInput from "../../customhooks/useInput"

const EditForm = () => {
	const note = useSelector((state) => state.note)

	const history = useHistory()
	const [title, bindTitle, resetTitle] = useInput(note.title)
	const [content, bindContent, resetContent] = useInput(note.content)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(updateNote({ id: note.id, title, content }))

		resetTitle()
		resetContent()

		history.push("/")
	}

	return (
		<div className="section">
			<form className="white" onSubmit={handleSubmit}>
				<h5 className="grey-text text-darken-4">New Note</h5>
				<div className="input-field">
					<label htmlFor="note_title" className="active">
						Note Title
					</label>
					<input type="text" name="" id="note_title" {...bindTitle} className="validate " />
				</div>
				<div className="input-field">
					<label htmlFor="note_content" className="active">
						Note Content
					</label>
					<textarea
						name=""
						{...bindContent}
						className="materialize-text"
						id="note_content"
						cols="30"
						rows="10"
					></textarea>
				</div>
				<button className="btn green" type="submit">
					Update
				</button>
			</form>
		</div>
	)
}

export default EditForm
