/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "ton-strapi-cloud.vercel.app", // <-- mets ton vrai domaine Strapi
				pathname: "/uploads/**",
			},
		],
	},
}

export default config
