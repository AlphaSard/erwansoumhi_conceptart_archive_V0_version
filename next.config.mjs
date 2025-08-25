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
			// Ajoute ceci quand tu passeras sur Strapi Cloud :
			// { protocol: "https", hostname: "<ton-domaine-strapi-cloud>", pathname: "/uploads/**" },
		],
	},
}

export default config
