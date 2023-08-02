import "./App.css"
import randomWords from "./utils/Words"
import { useState, useEffect } from "react"

function App() {
	const [characterCount, setCharacterCount] = useState(0)
	const [buffer, setBuffer] = useState("")
	const [word, setWord] = useState(
		() => randomWords[(Math.random() * randomWords.length) | 0]
	)
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		const rootElement = document.documentElement

		if (isDarkMode) {
			rootElement.classList.add("dark")
		} else {
			rootElement.classList.remove("dark")
		}
	}, [isDarkMode])

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
	}

	function handleSubmit(event) {
		event.preventDefault()

		if (buffer === word) {
			setWord(randomWords[(Math.random() * randomWords.length) | 0])
			setCharacterCount((characterCount) => characterCount + word.length)
		}
		setBuffer("")
	}

	return (
		<div className="flex flex-col gap-4">
			<button
				className={`px-4 py-2 rounded ${
					isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
				}`}
				onClick={toggleDarkMode}
			>
				{isDarkMode ? "Light Mode" : "Dark Mode"}
			</button>
			<h1 className="font-bold text-2xl">{word.toUpperCase()}</h1>
			<h2 className="">Words typed: {characterCount}</h2>
			<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
				<input
					autoFocus
					type="text"
					value={buffer}
					onChange={(event) => setBuffer(event.target.value)}
				/>
				<button
					className="bg-purple-500 p-1 font-bold rounded-md"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default App
