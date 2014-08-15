'use strict';

var BinBuild = require('bin-build');
var BinWrapper = require('bin-wrapper');
var fs = require('fs');
var logSymbols = require('log-symbols');
var path = require('path');
var pkg = require('./package.json');

/**
 * Variables
 */

var BIN_VERSION = '2.3.0';
var BASE_URL = 'https://raw.github.com/imagemin/pngquant-bin/v' + pkg.version + '/vendor/';

/**
 * Initialize a new BinWrapper
 */

var bin = new BinWrapper()
	.src(BASE_URL + 'osx/pngquant', 'darwin')
	.src(BASE_URL + 'linux/x86/pngquant', 'linux', 'x86')
	.src(BASE_URL + 'linux/x64/pngquant', 'linux', 'x64')
	.src(BASE_URL + 'win/pngquant.exe', 'win32')
	.dest(path.join(__dirname, 'vendor'))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');

/**
 * Only run check if binary doesn't already exist
 */

fs.exists(bin.use(), function (exists) {
	if (!exists) {
		bin.run(['--version'], function (err) {
			if (err) {
				console.log(logSymbols.warning + ' pre-build test failed, compiling from source...');

				var builder = new BinBuild()
					.src('https://github.com/pornel/pngquant/archive/' + BIN_VERSION + '.tar.gz')
					.make('make install BINPREFIX="' + bin.dest() + '"');

				return builder.build(function (err) {
					if (err) {
						console.log(logSymbols.error + ' pngquant failed to build, make sure that ' + (process.platform === 'darwin' ? 'libpng' : 'libpng-dev') + ' is installed');
						console.log('');
						console.log(err);

						return;
					}

					console.log(logSymbols.success + ' pngquant built successfully!');
				});
			}

			console.log(logSymbols.success + ' pre-build test passed successfully!');
		});
	}
});

/**
 * Module exports
 */

module.exports.path = bin.use();
