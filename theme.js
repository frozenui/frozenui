#!/usr/bin/env node

module.exports = function(nico) {

  var exports = {};

  var path = require('path');
  var fs = require('fs');
  var util = require('util');

  var file = nico.sdk.file;
  var BaseWriter = nico.BaseWriter;

  function MochaWriter() {}
  util.inherits(MochaWriter, BaseWriter);

  MochaWriter.prototype.run = function() {
    var option = nico.sdk.option;
    var dest = path.join(option.get('outputdir'), 'tests', 'runner.html');
    this.render({
      destination: dest,
      template: 'mocha-runner.html'
    });
  }
  nico.MochaWriter = MochaWriter;

  exports.name = 'cmd';
  exports.version = '1.0';
  exports.lang = 'zh';

  exports.reader = function(post) {
    var filename = post.meta.filepath.toLowerCase();
    if (filename === 'history.md') {
      post.template = post.meta.template = 'history';
    } else {
      post.template = post.meta.template = (post.meta.template || 'post');
    }
    if (filename === 'readme.md') {
      post.filename = post.meta.filename = 'index';
      post.meta.category = 'docs';
    }
    if (!post.meta.category) {
      post.meta.category = post.meta.directory;
    }
    return post;
  }

  var pkg = require(path.join(process.cwd(), 'package.json'))

  exports.filters = {
    debug: function(args) {
      return args.indexOf('debug') != -1;
    },
    debug_file: function(val) {
      if (/\-debug\.(js|css)$/.test(val)) {
        return val;
      }
      return val.replace(/\.(js|css)$/, '-debug.$1');
    },
    find: function(pages, cat) {
      var ret = findCategory(pages, cat);
      if (ret.length) return ret[0];
      return null;
    },
    find_category: findCategory,
    replace_code: function(content) {
      var srcdir = path.join(process.cwd(), 'src');
      if (!file.exists(srcdir)) {
        return content;
      }
      var key, value, regex;
      var p = pkg;
      fs.readdirSync(srcdir).forEach(function(key) {
        key = key.replace(/\.js$/, '');
        value = util.format('%s/%s/%s/%s', p.family, p.name, p.version, key);
        var regex = new RegExp(
          '<span class="string">(\'|\")' + key + '(\'|\")</span>', 'g'
        );
        content = content.replace(regex, '<span class="string">$1' + value + '$2</span>');
      });
      return content;
    },
    clean_alias: function(alias) {
      Object.keys(alias).forEach(function(key) {
        if (key === alias[key]) {
          delete alias[key];
        }
      });
      return alias;
    },
    css_alias: function(alias) {
      return Object.keys(alias || {}).map(function(key) {
        return alias[key];
      }).filter(function(val) {
        return /\.css$/.test(val);
      });
    },
    render_src: function(writer) {
      var base = path.relative(path.dirname(writer.filepath), '');
      var ret = findSrc(base);
      return JSON.stringify(ret);
    },
    is_runtime_handlebars: function(pkg) {
      var src = findSrc();
      for (var key in src) {
        if (/\.handlebars$/.test(src[key])) {
          return true;
        }
      }
      return false;
    },
    // 有 .tpl 的要插入 plugin-text
    is_plugin_text: function(pkg) {
      var src = findSrc();
      for (var key in src) {
        if (/\.tpl$/.test(src[key])) {
          return true;
        }
      }
      return false;
    },

    add_anchor: function(content) {
      for (var i = 1; i <= 6; i++) {
        var reg = new RegExp('(<h' + i + '\\sid="(.*?)">.*?)(<\/h' + i + '>)', 'g');
        content = content.replace(reg, '$1<a href="#$2" class="anchor">¶</a>$3');
      }
      return content;
    },

    gitRepoUrl: function(url) {
      url = url.replace(/\.git$/, '');
      if (url.match(/^http/)) {
        return url;
      }
      var matcher = url.match(/^git@(.*)\:(.*)/);
      if (matcher) {
        return 'http://' + matcher[1] + '/' + matcher[2];
      } else {
        return url;
      }
    },
    fixlink: function(html) {
      // format permalink, ends without .html
      html = html.replace(/(href="[^"]+)\.md(">)/ig, "$1.html$2");
      return html;
    },
    fixIssues: function(html) {
      // format permalink, ends without .html
      html = html.replace(/\s#([0-9]+)/ig, '<a href="'+pkg.bugs.url+'/$1">#$1</a>');
      return html;
    },
    getNickName: function(html) {
      if (typeof html === 'string') {
        var reg = /^(.*) (.*)$/;
        var m = html.match(reg);
        return m ? m[1] : '';
      } else if (html.name) {
        return html.name;
      }
    }
  };

  exports.functions = {
    dist_files: function() {
      var distdir = path.join(process.cwd(), 'dist');
      var ret = {
        js: [],
        css: []
      };
      if (!file.exists(distdir)) {
        return ret;
      }
      file.recurse(distdir, function(fpath) {
        var fname = path.relative(distdir, fpath).replace(/\\/g, '/');
        if (fname.indexOf('-debug') !== -1) return;
        if (/\.js$/.test(fname)) {
          ret.js.push(fname);
        } else if (/\.css$/.test(fname)) {
          ret.css.push(fname);
        }
      });
      return ret;
    },

    src_files: function() {
      var srcdir = path.join(process.cwd(), 'src');
      var ret = {
        js: [],
        css: [],
        alias: {}
      };
      if (!file.exists(srcdir)) {
        return ret;
      }
      file.recurse(srcdir, function(fpath) {
        var fname = path.relative(srcdir, fpath).replace(/\\/g, '/');
        var key;
        if (/\.js$/.test(fname)) {
          ret.js.push(fname);
          key = fname.replace(/\.js$/, '');
          ret.alias[key] = fname;
        } else if (/\.css$/.test(fname)) {
          ret.css.push(fname);
          key = fname;
          ret.alias[key] = fname;
        }
      });
      return ret;
    },

    spec_files: function() {
      var specdir = path.join(process.cwd(), 'tests');
      var ret = [];
      if (!file.exists(specdir)) {
        return ret;
      }
      file.recurse(specdir, function(fpath) {
        var fname = path.relative(specdir, fpath).replace(/\\/g, '/');
        if (fname.indexOf('-spec') !== -1) {
          ret.push(fname);
        }
      });
      return ret;
    },

    engines: function() {
      var ret = [];
      if (pkg.spm && pkg.spm.engines) {
        var engines = pkg.spm.engines;
        Object.keys(engines).forEach(function(key) {
          var js = engines[key];
          if (/\.js$/.test(js)) {
            ret.push(js);
          } else {
            ret.push(js + '.js');
          }
        });
      }
      return ret;
    }
  }

  exports.hasHistory = file.exists(path.join(process.cwd(), 'HISTORY.md'));
  exports.hasTest = file.exists(path.join(process.cwd(), 'tests'));


  function findSrc(base) {
    if (base === undefined) {
      base = '..';
    }
    if (base === '') {
      base = '.';
    }
    var ret = {};

    var srcdir = path.join(process.cwd(), 'src');
    if (!file.exists(srcdir)) {
      return ret;
    }
    nico.sdk.file.recurse(srcdir, function(filepath) {
      var filename = path.relative(srcdir, filepath);
      var key = path.basename(filename);
      key = key.replace(/\.js$/, '');
      ret[key] = base + '/src/' + filename;
    });
    return ret;
  }

  function findCategory(pages, cat) {
    var ret = [];
    Object.keys(pages).forEach(function(key) {
      var item = nico.sdk.post.read(key);
      if (item.meta.category === cat) {
        ret.push(item);
      }
    });
    ret = ret.sort(function(a, b) {
      if (/index$/i.test(a.filename)) {
        a.meta.order = 1;
      }
      if (/index$/i.test(b.filename)) {
        b.meta.order = 1;
      }
      a = a.meta.order || 10;
      b = b.meta.order || 10;
      return parseInt(a, 10) - parseInt(b, 10);
    });
    return ret;
  }

  return exports;
};
