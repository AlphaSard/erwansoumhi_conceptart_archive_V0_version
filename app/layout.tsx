import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr" className={`${inter.variable} antialiased`}>
			<body className="bg-white text-black font-sans">{children}</body>
		</html>
	)
}

export const metadata = {
	generator: "v0.app",
}
