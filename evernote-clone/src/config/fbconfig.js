import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCPCmKh_n_BKy9U1LYWXMzoJK-iPGwVBwo",
	authDomain: "react-evernote-b6083.firebaseapp.com",
	projectId: "react-evernote-b6083",
	storageBucket: "react-evernote-b6083.appspot.com",
	messagingSenderId: "425153794354",
	appId: "1:425153794354:web:6b3eebdcf88b41b9a0c72b",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase
