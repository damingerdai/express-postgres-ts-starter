export const config = {
	server: {
		port: process.env.APP_PORT || 3000,
		router: {
			caseSensitive: false,
			mergeParams: false,
			strict: false
		}
	},
}
