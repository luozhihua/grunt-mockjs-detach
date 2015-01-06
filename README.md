# grunt-mockjs-detach [![Build Status](https://travis-ci.org/luozhihua/grunt-mockjs-detach.svg?branch=master)](http://travis-ci.org/luozhihua/grunt-mockjs-detach)

> A grunt plugin use for detach mockjs data source..

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mockjs-detach --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mockjs-detach');
```

## The "mockjs_detach" task

### Overview
In your project's Gruntfile, add a section named `mockjs_detach` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mockjs_detach: {
    options: {
      begin: '<!-- mockjs -->', // default to: <!-- mockjs -->
      end: '<!-- endmockjs -->' // default to: <!-- endmockjs -->
    },
    app: {
      expand: true,
      cwd: './dist',
      src: '{,*/}*.html',
      dest: './dist'
    },
  },
})
```

### Options

#### options.begin
Type: `String`
Default value: `<!-- mockjs -->`

A string value that is used to detect mockjs data source start.

#### options.end
Type: `String`
Default value: `<!-- endmockjs -->`

A string value that is used to detect mockjs data source end.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- v0.1.0 released - 2014/11/17.

## License
Copyright (c) 2014 Colin. Licensed under the MIT license.
