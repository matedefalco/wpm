import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import References from "./references.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<References />
	</React.StrictMode>
)
