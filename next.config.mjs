/** @type {import('next').NextConfig} */
const nextConfig = {
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
			{
				protocol: "https",
				hostname: "colorful-poem-606dab52fb.strapiapp.com",
				pathname: "/uploads/**",
			},
		],
	},
}

export default nextConfig
