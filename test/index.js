/* global describe, it */
'use strict';

const promisify = require('../');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const readFile = promisify(fs.readFile);
const file = path.join(__dirname, 'sample.txt');

describe('promisify', () => {
	it('readFile', done => {
		readFile(file)
			.then(buffer => {
				assert.deepEqual(buffer.toString('utf8'), 'Thiago, Sabrina e Lucas\n');
				done();
			});
	});
});