/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'colorful-poem-606dab52fb.strapiapp.com', pathname: '/**' },
			{ protocol: 'https', hostname: 'colorful-poem-606dab52fb.media.strapiapp.com', pathname: '/**' },
		],
	},
}

export default nextConfig
