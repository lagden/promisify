/* global describe, it */
'use strict';

const promisify = require('../');
const assert = require('assert');
const fs = require('fs');
const join = require('path').join;
const readFile = promisify(fs.readFile);
const file = join(__dirname, 'sample.txt');

describe('promisify', () => {
	it('readFile', done => {
		readFile(file)
			.then(buffer => {
				assert.deepEqual(buffer.toString('utf8'), 'Thiago, Sabrina e Lucas\n');
				done();
			});
	});

	it('fail', done => {
		readFile('./not-found.txt')
			.catch(err => {
				assert.equal(err.message, `ENOENT: no such file or directory, open './not-found.txt'`);
				done();
			});
	});
});
