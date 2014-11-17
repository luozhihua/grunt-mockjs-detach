/*
 *
 * https://github.com/luozhihua/grunt-mockjs-detach
 *
 * Copyright (c) 2014 luozhihua
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk');

function mockjs_detach(grunt) {


  // remove
  function detachMockBlock(file, options) {

    var begin = options.begin || '<!--\\s?mockjs\\s?-->';
    var end = options.end || '<!--\\s?endmockjs\\s?-->';

    var detect = new RegExp(begin + '(\\n|\\r|.)*?' + end, 'g');

    var cont = grunt.file.read(file, {encoding: 'utf-8'});
    console.log(options);
    return cont.replace(detect, '');
  }

  grunt.registerMultiTask('mockjs_detach', 'Detach mockjs data on distill files.', function () {
    this.requiresConfig(['mockjs_detach', this.target, 'src']);
    // Extend the options object with the entire data object (instead of just .src) for backward compatibility.

    var options = this.options(this.data);

    this.files.forEach(function(file) {
        var dest;
        var src = file.src[0];

        if (!grunt.file.exists(src || ' ')) {
            return grunt.log.warn('Source file "' + chalk.cyan(src) + '" not found.');
        }

        try {
            dest = detachMockBlock(src, options);
        } catch (err) {
            return grunt.warn(file.src + '\n' + err);
        }

        if (dest.length < 1) {
          grunt.log.warn('Destination not written because file was empty: "'+ src +'".');
        } else {
          grunt.file.write(file.dest, dest);
          grunt.log.writeln('Removed mockjs data source from ' + src + ' and saved to ' + chalk.green(file.dest));
        }
    });

  });
}

module.exports = mockjs_detach;