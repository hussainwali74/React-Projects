import React from "react"
import useInput from "../../customhooks/useInput"
import { addNote } from "../../store/actions/noteAction"
import { useDispatch } from "react-redux"
const Form = () => {
	const [title, bindTitle, resetTitle] = useInput()
	const [content, bindContent, resetContent] = useInput()
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({ title, content })
		dispatch(addNote({ title, content }))
		resetContent()
		resetTitle()
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
				<button className="btn green">Add</button>
			</form>
		</div>
	)
}

export default Form
