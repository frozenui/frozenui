module.exports = function(grunt) {
    // 自动加载 grunt 任务
    require('load-grunt-tasks')(grunt);

    // 统计 grunt 任务耗时
    require('time-grunt')(grunt);

    // 配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'img/' // 优化后的图片保存位置
                }]
            }
        },
        autoprefixer: {
            options: {
                diff: false,
                browsers: ['ios 5', 'android 2.3']
            },

            // prefix all files
            multiple_files: {
                expand: true,
                src: ['css/*.css', 'css/**/*.css']
            }
        },
        sass: {
            dist: {
                expand: true,
                flatten: true,
                cwd: 'sass',
                src: ['frozen.scss'],
                dest: 'css/',
                ext: '.css'
            }
        },
        cssmin: {
            dist: {
                expand: true,
                cwd: 'css/',
                src: ['**/*.css'],
                dest: 'dist/css/'
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'js',
                    src: '**/*.js',
                    dest: 'dist/js/',
                    ext: '.js'
                }]
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'js/**/*.js', '!js/frozen.js'],
            options: {
                // 允许多行字符拼接, 在 *.tpl 中常用
                "multistr": true,
                // 允许使用类似这种表达式 $.isFunction( fn ) && fn();
                "expr": true,
                // 允许使用类似这种函数  new Function("obj","return 123")
                "evil": true
            }
        },
        concat: {
            js: {
                src: [
                    'js/core/core.js',
                    'js/component/*.js'
                ],
                dest: 'js/frozen.js'
            }
        },
        includereplace: {
            html: {
                expand: true,
                cwd: 'demo/src',
                src: ['*.html'],
                dest: 'demo/'

            }
        },
        jsdoc: {
            doc: {
                src: ['js/**/*.js', '!js/baymax.js'],
                options: {
                    destination: 'jsdoc'
                }
            }
        },
        copy:{
            lib:{
                files: [
                    {expand: true, src: ['lib/**'], dest: 'dist/'}
                ]
            }
        },
        watch: {
            demo: {
                files: [
                    'demo/**/*.html'
                ],
                tasks: ['newer:includereplace']
            },
            css: {
                files: [
                    'sass/**/*.scss'
                ],
                tasks: ['sass', 'cssmin']
            },
            js: {
                files: ['js/**/*.js', '!js/frozen.js'],
                tasks: ['concat:js', 'jsdoc']
            }
        }
    });

    // 默认任务
    grunt.registerTask('default', [
        'sass',
        'autoprefixer',
        'cssmin',
        'imagemin',
        'concat:js',
        'uglify',
        'includereplace',
        'copy',
        'watch'
    ]);

    // 根据 docs 的代码片段生成 demo 到 demo/*.html
    grunt.registerTask('demo', ['includereplace']);
};
