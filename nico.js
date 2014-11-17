exports.source = "docs"
exports.output = "_site"
exports.permalink = "{{filename}}.html"

// 你可以使用 nodejs 的库哦
var path = require('path')
exports.theme = path.join(__dirname, '_themes/one')

exports.writers = [
    'nico.PageWriter',
    'nico.StaticWriter',
    'nico.FileWriter'
]