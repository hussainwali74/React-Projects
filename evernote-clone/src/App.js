import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/home/Home"

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
			</Switch>
		</Router>
	)
}

export default App
