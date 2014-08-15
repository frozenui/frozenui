# grunt-contrib-imagemin v0.7.1 [![Build Status: Linux](https://travis-ci.org/gruntjs/grunt-contrib-imagemin.png?branch=master)](https://travis-ci.org/gruntjs/grunt-contrib-imagemin) <a href="https://ci.appveyor.com/project/gruntjs/grunt-contrib-imagemin"><img src="https://ci.appveyor.com/api/projects/status/s1cpt9m3e5ihuoqj/branch/master" alt="Build Status: Windows" height="18" /></a>

> Minify images



## Getting Started
This plugin requires Grunt `^0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-imagemin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-imagemin');
```




## Imagemin task
_Run this task with the `grunt imagemin` command._

Minify images using [imagemin](https://github.com/kevva/imagemin).

Comes bundled with the following optimizers:

- [gifsicle](https://github.com/kevva/imagemin-gifsicle) — *Compress GIF images*
- [jpegtran](https://github.com/kevva/imagemin-jpegtran) — *Compress JPEG images*
- [optipng](https://github.com/kevva/imagemin-optipng) — *Compress PNG images*
- [svgo](https://github.com/kevva/imagemin-svgo) — *Compress SVG images*

We recommend using [grunt-newer](https://github.com/tschaub/grunt-newer) to only process changed files as minifying images can be quite slow.

### Options

Options will only apply to the relevant files, so you don't need separate targets for png/jpg.


#### optimizationLevel *(png)*

Type: `Number`  
Default: `3`

Select optimization level between `0` and `7`.

> The optimization level 0 enables a set of optimization operations that require minimal effort. There will be no changes to image attributes like bit depth or color type, and no recompression of existing IDAT datastreams. The optimization level 1 enables a single IDAT compression trial. The trial chosen is what. OptiPNG thinks it’s probably the most effective. The optimization levels 2 and higher enable multiple IDAT compression trials; the higher the level, the more trials.

Level and trials:

1. 1 trial
2. 8 trials
3. 16 trials
4. 24 trials
5. 48 trials
6. 120 trials
7. 240 trials


#### progressive *(jpg)*

Type: `Boolean`  
Default: `true`

Lossless conversion to progressive.


#### interlaced *(gif)*

Type: `Boolean`  
Default: `true`

Interlace gif for progressive rendering.


#### use

Type: `Array`  
Default: `null`

Additional [plugins](https://npmjs.org/keyword/imageminplugin) to use with imagemin.

#### Example config

You can either map your files statically or [dynamically](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically).

```js
var mozjpeg = require('imagemin-mozjpeg');

grunt.initConfig({
  imagemin: {                          // Task
    static: {                          // Target
      options: {                       // Target options
        optimizationLevel: 3,
        use: [mozjpeg()]
      },
      files: {                         // Dictionary of files
        'dist/img.png': 'src/img.png', // 'destination': 'source'
        'dist/img.jpg': 'src/img.jpg',
        'dist/img.gif': 'src/img.gif'
      }
    },
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'dist/'                  // Destination path prefix
      }]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
```


## Release History

 * 2014-05-31   v0.7.1   Caching original image size before optimization. Remove unused dependencies.
 * 2014-04-29   v0.7.0   Update "imagemin" to 0.4
 * 2014-04-01   v0.6.1   Fix problem with corrupt images being created
 * 2014-03-28   v0.6.0   Updated "imagemin" to 0.2 Added percentage to size saved view - fixes cache option removed. Adds "pretty-bytes".
 * 2014-01-13   v0.5.0   Extract the logic into an external lib [imagemin](https://github.com/kevva/imagemin).
 * 2014-01-08   v0.4.1   Prevent "Maximum call stack size exceeded". Speed up loading this task by lazy requiring bin deps.
 * 2013-11-22   v0.4.0   The `pngquant` option is now `false` by default instead of `true`.
 * 2013-09-09   v0.3.0   Add `interlace` option for gif files.
 * 2013-08-16   v0.2.0   Add `gifsicle` and `pngquant`. Cache images so only changed images are optimized. Default `optimizationLevel` to `7` and `progressive` to `true`.
 * 2013-04-10   v0.1.4   Fix exception when running in verbose mode.
 * 2013-04-05   v0.1.3   Fix OptiPNG not being able to overwrite file. Allow overwriting src when dest/src is the same. Limit to 10 concurrent optimizations.
 * 2013-02-22   v0.1.2   Fix OptiPNG not working on some systems. Prevent OptiPNG from producing .bak files.
 * 2013-02-15   v0.1.1   First official release for Grunt 0.4.0.
 * 2013-01-30   v0.1.1rc8   Fix task not creating destination folders
 * 2013-01-30   v0.1.1rc7   Updating to work with grunt v0.4.0rc7. Switching to this.files api.
 * 2012-11-01   v0.1.0   Initial release.

---

Task submitted by [Sindre Sorhus](http://github.com/sindresorhus)

*This file was generated on Sat May 31 2014 16:32:27.*
