var path = require('path');
var pkg = require(path.join(process.cwd(), 'package.json'))
exports.package = pkg;

// {{ settings for nico
exports.theme = __dirname
exports.source = process.cwd()
exports.output = path.join(process.cwd(), '_site')
exports.permalink = '{{directory}}/{{filename}}.html'
if (pkg.family === 'arale') {
  exports.google = 'UA-36247332-1'
} else if (pkg.family === 'alice') {
  exports.google = 'UA-39169474-1'
}
exports.ignorefilter = function(filepath, subdir) {
  var extname = path.extname(filepath);
  if (extname === '.tmp' || extname === '.bak') {
    return false;
  }
  if (/\.DS_Store/.test(filepath)) {
    return false;
  }
  if (/^sea-modules/.test(subdir) &&
      /\.[md|html|psd|zip|yml]/.test(path.extname(filepath))) {
    return false;
  }
  if (/^(_site|_theme|node_modules|\.idea)/.test(subdir)) {
    return false;
  }
  return true;
}
exports.writers = [
  'nico.PageWriter',
  'nico.StaticWriter',
  'nico.FileWriter'
]
// end settings }}

// extends for theme usage, that can be accessable by {{config.xxx}}
exports.assets_host = 'http://assets.spmjs.org';

exports.filters = {}
