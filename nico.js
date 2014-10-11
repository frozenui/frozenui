exports.source = "docs"
exports.output = "_site"
exports.permalink = "{{filename}}.html"

// 你可以使用 nodejs 的库哦
var path = require('path')
exports.theme = path.join(__dirname, 'one')

exports.writers = [
    'nico.PostWriter',
    'nico.StaticWriter',
    'nico.FileWriter'
]