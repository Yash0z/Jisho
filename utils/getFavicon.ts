// Function to get favicon from URL
export const getFaviconUrl = (url: string) => {
	try {
		const domain = new URL(url).hostname;
		return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
	} catch {
		return null;
	}
};
