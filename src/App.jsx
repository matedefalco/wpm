import "./App.css"
import randomWords from "./utils/Words"
import { useEffect, useState } from "react"

function App() {
	const [characterCount, setCharacterCount] = useState(0)
	const [maxScore, setMaxScore] = useState(0)
	const [buffer, setBuffer] = useState("")
	const [time, setTime] = useState(0)
	const [word, setWord] = useState(
		() => randomWords[(Math.random() * randomWords.length) | 0]
	)
	const [isPlaying, setIsPlaying] = useState(false)
	const [score, setScore] = useState(0)

	useEffect(() => {
		if (time > 0) {
			const timeout = setTimeout(() => setTime(time - 1), 1000)
			return () => clearTimeout(timeout)
		} else if (time === 0 && isPlaying) {
			// Calcular el puntaje y mostrar el mensaje
			const calculatedScore = Math.round((characterCount / 5) * 60)
			setScore(calculatedScore)
			console.log("Suka ~ file: App.jsx:35 ~ score:", score)
			if (score > maxScore) {
				setMaxScore(score)
			}
		}
	}, [time, isPlaying, characterCount])

	return (
		<div className="bg-white rounded-lg p-4">
			{time !== 0 ? (
				<div className="flex flex-col items-center gap-2">
					<h1 className="font-bold text-2xl text-slate-800">
						{word.toUpperCase()}
					</h1>
					<h2 className="text-slate-800">Words typed: {characterCount}</h2>
					<h3 className="text-slate-800">Remaining time: {time}</h3>
					<input
						className="p-3 border-solid border-2 border-blue-600 text-black bg-white rounded-md outline-none"
						autoFocus
						type="text"
						value={buffer}
						onChange={(event) => {
							setBuffer(event.target.value)
							if (event.target.value.trim() === word) {
								setWord(randomWords[(Math.random() * randomWords.length) | 0])
								setCharacterCount(
									(characterCount) => characterCount + word.length
								)
								setBuffer("")
							}
						}}
					/>
				</div>
			) : (
				<div>
					{isPlaying ? (
						<div className="flex flex-col items-center gap-4">
							<h1 className="font-bold text-slate-800 text-2xl">Game Over</h1>
							<div className="flex flex-row gap-1">
								<p className="text-slate-800">Your Score: </p>
								<p className="font-bold text-slate-800">{score}</p>
								<p className="text-slate-800">words per minute</p>
							</div>
							<div className="flex flex-row gap-1">
								<p className="text-slate-800">Your MAX score: </p>
								<p className="font-bold text-slate-800">{maxScore}</p>
								<p className="text-slate-800">words per minute</p>
							</div>
							<button
								className="bg-purple-500 text-xl p-1 w-40 font-bold rounded-md"
								onClick={() => {
									setIsPlaying(true)
									setTime(60)
									setCharacterCount(0)
									setScore(0)
								}}
							>
								Play again
							</button>
						</div>
					) : (
						<div className="flex flex-col items-center gap-4">
							<h1 className="font-bold text-2xl text-slate-800">
								Words per minute
							</h1>
							<h3 className="text-gray-500">Test your typing skills</h3>
							<button
								className="bg-purple-500 text-xl p-1 w-40 font-bold rounded-md"
								onClick={() => {
									setIsPlaying(true)
									setTime(60)
									setCharacterCount(0)
									setScore(0)
								}}
							>
								Play
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default App
