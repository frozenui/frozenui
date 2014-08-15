# imagemin-pngquant [![Build Status](https://travis-ci.org/kevva/imagemin-pngquant.svg?branch=master)](https://travis-ci.org/kevva/imagemin-pngquant)

> pngquant image-min plugin

## Install

```bash
$ npm install --save imagemin-pngquant
```

## Usage

```js
var Imagemin = require('image-min');
var pngquant = require('imagemin-pngquant');

var imagemin = new Imagemin()
    .src('foo.png')
    .dest('foo-optimized.png')
    .use(pngquant({ quality: '65-80', speed: 4 }));

imagemin.optimize();
```

## Options

### nofs

Type: `Boolean`  
Default: `false`

Disable Floyd-Steinberg dithering.

### quality

Type: `String`  
Default: `undefined`

Instructs pngquant to use the least amount of colors required to meet or exceed 
the max quality. If conversion results in quality below the min quality the 
image won't be saved.

Min and max are numbers in range 0 (worst) to 100 (perfect), similar to JPEG.

### speed

Type: `Number`  
Default: `3`

Speed/quality trade-off from `1` (brute-force) to `10` (fastest). Speed `10` has 
5% lower quality, but is 8 times faster than the default.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
