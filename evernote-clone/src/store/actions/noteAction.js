export const addNote = (note) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore()
		firestore
			.collection("notes")
			.add({
				...note,
				favorite: false,
				createdAt: new Date(),
			})
			.then(() => {
				console.log("note added successfully")
			})
			.catch((e) => console.log(e))
	}
}

export const deleteNote = (id) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore()
		firestore
			.collection("notes")
			.doc(id)
			.delete()
			.then(() => {
				console.log("note deleted successfully")
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const toggleFav = (note) => {
	return (dispatch, getState, { getFirestore }) => {
		const favorite = !note.favorite
		const firestore = getFirestore()
		firestore
			.collection("notes")
			.doc(note.id)
			.update({ favorite: favorite })
			.then(() => {
				console.log("favorite changed ")
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
