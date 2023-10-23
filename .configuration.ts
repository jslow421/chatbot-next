/**
 * Configuration class for the application.
 */
export class Configuration {
	static readonly CLIENT_ID = "5kj65h22fl3l0be5svgiec7490";
	static readonly BASE_URL = "https://9khv50aaw9.execute-api.us-east-1.amazonaws.com";
	static readonly TOKEN_URL = "https://slowiktest.auth.us-east-1.amazoncognito.com/oauth2/token";
	static readonly REDIRECT_URI = "https://ds060nnoq0vli.cloudfront.net/";
	static readonly PROD_API_URL = `${this.BASE_URL}/prod`;
	static readonly IS_CHAT_HISTORY_ENABLED = false;
}
