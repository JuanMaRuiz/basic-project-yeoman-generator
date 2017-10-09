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

describe('All files are created', () => {
	beforeEach(function () {
	  // The object returned acts like a promise, so return it to wait until the process is done
	  return helpers.run(path.join(__dirname, '../generators/app'))
			.inTmpDir((dir) => {
		    tmpDir = dir;
			});
	});

  eslintFilesPath.map(function(file) {
    it('creates --> ' + file, () => {
      assert.file(absPathAppender('/' + file));
    });
  });

  it('creates --> Gruntfile.js', () => {
    assert.file(absPathAppender('/Gruntfile.js'));
  });

  it('creates --> package.json', () => {
    assert.file(absPathAppender('/package.json'));
  });

  hiddenFiles.map(function(file) {
    it('creates --> ' + file, () => {
      assert.file(absPathAppender('/' + file));
    });
  });
});

// describe('Files are created with the user answers', () => {
//   beforeEach(() => {
//     return helpers
//       .run(require.resolve('../generators/readme'))
//       .withOptions({
//         appName: APP_TITLE,
//         packageName: PACKAGE_NAME,
//         manager: DEP_MANAGER
//       })
//       .on('ready', gen => {
//         gen.fs.writeJSON(gen.destinationPath('package.json'), {
//           license: 'MIT'
//         });
//       });
//   });
//
//   it('creates and fill contents in package.json', () => {
//     assert.file('package.json');
//     console.log('package_name: ', PACKAGE_NAME);
//     assert.fileContent('package.json', PACKAGE_NAME);
//     // assert.fileContent('README.md', '> a cool project');
//     // assert.fileContent('README.md', '$ npm install --save my-project');
//     // assert.fileContent('README.md', 'MIT © [Yeoman](http://yeoman.io)');
//     // assert.fileContent(
//     //   'README.md',
//     //   '[travis-image]: https://travis-ci.org/yeoman/my-project.svg?branch=master'
//     // );
//     // assert.fileContent('README.md', 'coveralls');
//   });
// });
