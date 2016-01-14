'use strict';

function promisify(m) {
	// return function transform(...args) {
	return function transform() {
		const args = [];
		for (const arg of arguments) {
			args.push(arg);
		}
		return new Promise((resolve, reject) => {
			function cb(err, data) {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			}
			m(...args.concat(cb));
		});
	};
}

module.exports = promisify;
