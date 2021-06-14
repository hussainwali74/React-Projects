import React from "react"
import { deleteNote, toggleFav } from "../../store/actions/noteAction"
import { useDispatch } from "react-redux"
import moment from "moment"
const Note = ({ note }) => {
	const dispatch = useDispatch()
	const deleteNoteHandler = () => {
		dispatch(deleteNote(note.id))
	}
	const toggleFavortieHandler = () => {
		dispatch(toggleFav(note))
	}
	console.log(`note`, note)
	const heartMarkup = note.favorite ? "favorite" : "favorite_border"
	return (
		<div className="noterdam white">
			<div className="right-align">
				<i
					className="material-icons red-text"
					style={{ cursor: "pointer" }}
					onClick={toggleFavortieHandler}
				>
					{heartMarkup}
				</i>
				<i className="material-icons " style={{ cursor: "pointer" }} onClick={deleteNoteHandler}>
					delete
				</i>
			</div>
			<h5 className="black-text">{note.title}</h5>
			<p className="truncate">{note.content}</p>
			<p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
			<div className="right-align">
				<i className="material-icons black-text">edit</i>
			</div>
		</div>
	)
}

export default Note
