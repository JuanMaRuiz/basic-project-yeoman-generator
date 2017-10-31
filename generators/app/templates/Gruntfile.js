module.exports = function(grunt) {
  'use strict';

  require('jit-grunt')(grunt);

  grunt.initConfig({
    watch: {
      scripts: {
        files: 'dev/**/*.js',
        tasks: ['eslint'],
        options: {
          livereload: true,
        },
      },
      html: {
        files: 'dev/**/*.html',
        options: {
          livereload: true,
        },
      },
    },
    eslint: {
      options: {
        // format: 'node_modules/eslint-tap',
        configFile: '.eslintrc',
        fix: true
      },
      target: ['dev/**/*.js'],
    },
    copy: {
      styles: {
        expand: true,
        flatten: true,
        src: ['node_modules/milligram/dist/milligram.min.css'],
        dest: 'dev/lib/css/'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'dev/scripts/*.js',
            'dev/*.html',
          ],
        },
        options: {
          watchTask: true,
          server: './dev',
        },
      },
    },
  });

  grunt.registerTask('default', ['eslint', 'copy', 'browserSync', 'watch']);
};
