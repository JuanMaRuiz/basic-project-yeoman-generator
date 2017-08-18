[![Build Status](https://travis-ci.org/JuanMaRuiz/basic-project-yeoman-generator.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/basic-project-yeoman-generator)
[!Dependencies Status](https://david-dm.org/JuanMaRuiz/basic-project-yeoman-generator.svg)

# Yeoman generator with basic configuration #

*Version*: 0.1.0

Basic [Yeoman](http://yeoman.io/) generator which provide a basic but useful scaffolding for a new project (unless ... for myself).

### Generator Structure ###

```
.
├── ...
├── __test__                       # Test files
│   └── test.js
├── generator                      # List of available generators
│   └── app                        # Main folder for generator
│       └── templates              # List of files used for the generator
│           ├── dev
│           │    ├── scripts
│           │    │    └── app.js
│           │    └── index.html
│           ├── .editorconfig
│           ├── .eslintignore
│           ├── .eslintrc
│           ├── _package.json
│           ├── Gruntfile.js
│           ├── karma.config.js
│           └── README.md
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── package.json
├── .travis.yml
├── README.md
└── TODO.txt
```
