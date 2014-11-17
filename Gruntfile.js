'use strict';

module.exports = function(grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'dist/*'
          ]
        }]
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    mochacli: {
      options: {
        reporter: 'nyan',
        bail: true
      },
      all: ['test/*.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'mochacli']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochacli']
      }
    },

    mockjsdetach: {
      options: {
        begin: '<!-- mockjs -->', // default to: <!-- mockjs -->
        end: '<!-- endmockjs -->' // default to: <!-- endmockjs -->
      },
      app :{
        expand: true,
        cwd: './test',
        src: './**/*.html',
        dest: 'dist'
      }
    }
  });

  // Load this plugins
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('test', ['clean', 'jshint', 'mockjsdetach', 'mochacli']);
  grunt.registerTask('default', ['test', ]);
};
