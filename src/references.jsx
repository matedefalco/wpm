const imgUrls = [
	"https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
	"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
]

export default function References() {
	return (
		<section className="text-gray-300 flex flex-col items-center gap-2 mt-8">
			<p className="text-sm">Made with:</p>
			<ul className="flex items-center gap-4">
				{imgUrls.map((url, index) => (
					<li
						className="list-none flex items-center justify-center w-7 h-7"
						key={index}
					>
						<img src={url} alt={`Image ${index}`} />
					</li>
				))}
			</ul>
		</section>
	)
}
