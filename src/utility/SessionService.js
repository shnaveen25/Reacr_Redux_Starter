export class SessionService {

	static setUsername(username) {
		window.localStorage.setItem('username', username);
	}

	static getUsername() {
		return window.localStorage.getItem('username');
	}

	static setMailid(mailId) {
		window.localStorage.setItem('mailId', mailId);
	}

	static getMailid() {
		return window.localStorage.getItem('mailId');
	}

	static clearSession() {
		window.localStorage.clear();
	}
}
