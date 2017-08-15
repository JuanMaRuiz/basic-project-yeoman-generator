const Generator = require("yeoman-generator");

module.exports = class SimpleScaffolder extends Generator {
  // Instantiate Yeoman constructor
  constructor(args, opts) {
    super(args, opts);
  }

  // Ask the user which are his preferences
  prompting() {
    return this.prompt([{
      type: "input",
      name: "name",
      message: "Bazinga!! This is my project name",
      default: this.appname, // Default to current folder
      store: true,
    },
    {
      type: "input",
      name: "packageName",
      message: "Your package name (for example \"pancetuki\")",
      default: "pancetuki", // Default to current folder name
    },
    {
      type: "list",
      name: "dependencyManager",
      message: "What do you want to use as dependency manager?",
      choices: ["npm", "yarn"],
      default: "npm",
      store: true,

    }]).then((answers) => {
      this.log("app name", answers.name);
      this.log("app name", answers.dependencyManager);
      this.config = {
        packageName: answers.packageName,
        appName: answers.name,
        depManager: answers.dependencyManager,
      };

      this.log("this.config", this.config);
    });
  }

  // Dummy method which creates a simple index.html file with the user answers
  writing() {
    this.fs.copyTpl(
      this.templatePath("dev/_index.html"),
      this.destinationPath("dev/index.html"),
      {
        title: this.config.appName,
        manager: this.config.depManager,
      }
    );
    // Copy all hidden files in the root of the project
    this.fs.copyTpl(
    	this.templatePath(".*"),
    	this.destinationPath("")
    );
    // Copy all js configuration files in the root of the project
    this.fs.copyTpl(
    	this.templatePath("*.js"),
    	this.destinationPath("")
    );
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
      	appName: this.config.appName
      }
    );
    this.fs.copyTpl(
    	this.templatePath("dev/scripts/**/*.js"),
    	this.destinationPath("dev/scripts/**/*.js")
    );

    // Install the dependencies with the proper dependency manager
    (this.config.depManager === 'yarn') ? this.yarnInstall() : this.npmInstall();

  }
};
