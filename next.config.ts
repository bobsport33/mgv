import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,

	webpack(config) {
		// Find the existing rule that handles SVGs
		type FileLoaderRule = { test?: RegExp };
		const fileLoaderRule = config.module.rules.find(
			(rule: FileLoaderRule) => rule.test?.test?.(".svg")
		);

		// Prevent Next from treating SVGs as static files
		fileLoaderRule.exclude = /\.svg$/i;

		// Add SVGR loader
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		});

		return config;
	}
};

export default nextConfig;
