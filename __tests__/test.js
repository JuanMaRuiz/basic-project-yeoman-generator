const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

let tmpDir = '';

const APP_TITLE = 'Bazinga';
const PACKAGE_NAME = 'sandruki';
const DEP_MANAGER = 'sandruki';

const eslintFilesPath = [
	'.eslintignore',
	'.eslintrc'
];

const hiddenFiles = [
  '.editorconfig',
  '.gitignore'
];

function absPathAppender(relPath) {
    return path.join(tmpDir, relPath);
}

describe('All lint files are created', () => {
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

  eslintFilesPath.map(function(file) {
    it('creates --> ' + file, () => {
      assert.file(absPathAppender('/' + file));
    });
  });
});

describe('All configuration files are generated', () => {
  it('creates Gruntfile', () => {
    assert.file(absPathAppender('/Gruntfile.js'));
  });

  it('creates package.json', () => {
    assert.file(absPathAppender('/package.json'));
  });
});

describe('All hidden files are generated', () => {

  hiddenFiles.map(function(file) {
    it('creates --> ' + file, () => {
      assert.file(absPathAppender('/' + file));
    });
  });

});
