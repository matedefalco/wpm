import "./App.css"
import randomWords from "./utils/Words"
import { useEffect, useState } from "react"

function App() {
	const [characterCount, setCharacterCount] = useState(0)
	const [buffer, setBuffer] = useState("")
	const [time, setTime] = useState(0)
	const [word, setWord] = useState(
		() => randomWords[(Math.random() * randomWords.length) | 0]
	)

	function handleSubmit(event) {
		event.preventDefault()

		if (buffer === word) {
			setWord(randomWords[(Math.random() * randomWords.length) | 0])
			setCharacterCount((characterCount) => characterCount + word.length)
		}
		setBuffer("")
	}

	useEffect(() => {
		if (time !== 0) {
			const timeout = setTimeout(() => setTime(time - 1), 1000)
			return () => clearTimeout(timeout)
		}
	}, [time])

	return (
		<div>
			{time !== 0 ? (
				<div className="flex flex-col items-center gap-2">
					<h1 className="font-bold text-2xl">{word.toUpperCase()}</h1>
					<h2>Words typed: {characterCount}</h2>
					<h3>Remaining time: {time}</h3>
					<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
						<input
							className="p-3 border-solid border-2 bg-black rounded-md outline-none"
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
			) : (
				<div className="flex flex-col items-center gap-4">
					<h1 className="font-bold text-2xl">Words per minute</h1>
					<h3 className="text-gray-300">Test your typing skills</h3>
					<button
						className="bg-purple-500 text-xl p-1 w-40 font-bold rounded-md"
						onClick={() => {
							setTime(60)
						}}
					>
						Play
					</button>
				</div>
			)}
		</div>
	)
}

export default App
