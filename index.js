/* eslint prefer-reflect: [2, {exceptions: ["apply"]}] */
/* eslint prefer-spread: 0 */

'use strict';

/*
// ES6
function promisify(m) {
	return function transform(...args) {
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
// **/

function promisify(m) {
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
			m.apply(undefined, args.concat(cb));
		});
	};
}

module.exports = promisify;
