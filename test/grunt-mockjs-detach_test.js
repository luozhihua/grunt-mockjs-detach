/*global describe,it*/
'use strict';
var assert = require('assert'),
  grunt = require('grunt');


describe('grunt-mockjs-detach node module.', function() {
  it('must be awesome', function() {

    var html = grunt.file.read('./dist/views/example.html', {encoding:'utf-8'});
    var index = html.indexOf('<!-- mockjs -->');

    assert.equal(index, -1);

  });
});
