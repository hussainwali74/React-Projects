import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import { createStore, applyMiddleware, compose } from "redux"
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase"
import rootReducer from "./store/reducers/rootReducer"
import thunk from "redux-thunk"
import firebase from "firebase/app"
import { Provider } from "react-redux"
import fbConfig from "./config/fbconfig"

import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore"

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig) // redux bindings for firestore
	)
)
const rrfProps = {
	firebase,
	config: fbConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
}
ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
)
