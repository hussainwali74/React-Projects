import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/home/Home"
import Favorites from "./components/notes/Favorites"
import EditForm from "./components/notes/EditForm"

function App() {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit()
	})

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/favorites" component={Favorites} />
				<Route path="/editform/:id" component={EditForm} />
			</Switch>
		</Router>
	)
}

export default App
