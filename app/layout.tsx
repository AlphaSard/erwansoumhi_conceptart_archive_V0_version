import type React from "react"
import "./globals.css"

	export default function RootLayout({
		children,
}: {
		children: React.ReactNode
}) {
		return (
			<html lang="fr" className="antialiased">
				<body className="bg-white text-black font-sans">{children}</body>
			</html>
		)
}

export const metadata = {
	generator: "v0.app",
}
