const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

let tmpDir = '';

const APP_TITLE = 'Bazinga';
const PACKAGE_NAME = 'sandruki';
const DEP_MANAGER = 'sandruki';

const eslintFilesPath = [
	".eslintignore",
	".eslintrc"
];

function absPathAppender(relPath) {
    return path.join(tmpDir, relPath);
}

describe('Basic scaffolding generator', () => {
	beforeEach(function () {
	  // The object returned acts like a promise, so return it to wait until the process is done
	  return helpers.run(path.join(__dirname, '../generators/app'))
			.inTmpDir((dir) => {
		    tmpDir = dir;
			})
	    .withOptions({ // Mock options passed in
				appName: APP_TITLE,
				packageName: APP_TITLE,
				manager: DEP_MANAGER
   	 	})
	});

	it('creates all eslint files', () => {
		assert.file(eslintFilesPath.map(absPathAppender));
	});

	it('creates Gruntfile', () => {
		assert.file(absPathAppender('/Gruntfile.js'));
	});

	it('creates package.json', () => {
		assert.file(absPathAppender('/package.json'));
	});

	it('creates .editorconfig', () => {
		assert.file(absPathAppender('/.editorconfig'));
	});

	it('creates .gitignore', () => {
		assert.file(absPathAppender('/.gitignore'));
	});

});
