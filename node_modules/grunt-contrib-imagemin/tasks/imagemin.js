'use strict';
var fs = require('fs');
var os = require('os');
var async = require('async');
var chalk = require('chalk');
var prettyBytes = require('pretty-bytes');
var Imagemin = require('imagemin');

/*
 * grunt-contrib-imagemin
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
    grunt.registerMultiTask('imagemin', 'Minify PNG, JPEG and GIF images', function () {
        var done = this.async();
        var files = this.files;
        var totalSaved = 0;
        var options = this.options({
            interlaced: true,
            optimizationLevel: 3,
            progressive: true
        });

        async.forEachLimit(files, os.cpus().length, function (file, next) {
            var msg;
            var imagemin = new Imagemin()
                .src(file.src[0])
                .dest(file.dest)
                .use(Imagemin.jpegtran(options.progressive))
                .use(Imagemin.gifsicle(options.interlaced))
                .use(Imagemin.optipng(options.optimizationLevel));

            if (options.use) {
                options.use.forEach(imagemin.use.bind(imagemin));
            }
            
            var origSize = fs.statSync(file.src[0]).size;
            
            imagemin.optimize(function (err, data) {
                if (err) {
                    grunt.warn(err);
                }

                var diffSize = origSize - data.contents.length;
                totalSaved += diffSize;

                if (diffSize < 10) {
                    msg = 'already optimized';
                } else {
                    msg = 'saved ' + prettyBytes(diffSize) + ' - ' + (diffSize / origSize * 100).toFixed() + '%';
                }

                grunt.log.writeln(chalk.green('✔ ') + file.src[0] + chalk.gray(' (' + msg + ')'));
                process.nextTick(next);
            });
        }, function (err) {
            if (err) {
                grunt.warn(err);
            }

            var msg  = 'Minified ' + files.length + ' ';
                msg += files.length === 1 ? 'image' : 'images';
                msg += chalk.gray(' (saved ' + prettyBytes(totalSaved) + ')');

            grunt.log.writeln(msg);
            done();
        });
    });
};
