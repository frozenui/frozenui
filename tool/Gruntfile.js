/**
 * Grunt
 */

'use strict';

module.exports = function(grunt) {

	// 自动加载 grunt 任务
    require('load-grunt-tasks')(grunt);

	var path = require('path'),
		fs = require('fs-extra'),
		log = grunt.log,
		pkg = grunt.file.readJSON('package.json');


	var PWD = path.resolve("../src/"),  // 获取当前文件路径，兼容 windows
		  buildDir = path.resolve("../release/"),
          latestDir = path.resolve("../../latest/"),
          latestPDW = path.resolve("../"),
	      pushDir = ['**/*', '!**/node_modules/**', '!**/.svn/**', '!**/.git/**', '!**/.sass-cache/**'],
	      releaseFile = ['**/*', '!**/node_modules/**', '!**/.svn/**', '!**/.git/**', '!**/.sass-cache/**','!**/jinja/**',"!**/sass/**","!**/sprite/**","!**/font/**","!**/psd/**","!**/*.map","!**/_*/**","!html/**/*.png","!html/**/*.jpg","**/js/**"];
	grunt.config("PWD",PWD);
	grunt.config("buildDir",buildDir);
	// 获取本机ip
	var IP=require("./lib/ip")(grunt);
	var Jinja=require("./lib/jinja")(grunt,PWD);



  	// ====== end extract



	// grunt 初始化任务
	//=================
	grunt.initConfig({

		// 拷贝文件到指定目录
		copy: {
			release: {
				expand: true,
				cwd: PWD,
				src: releaseFile,
				dest: buildDir
			},
            latest: {
                expand: true,
				cwd: latestPDW,
				src: ['**/*'],
				dest: latestDir
            }
		},
		// 递归执行compass
        'recursive-compass': {
            dev: {
                options: {
    		        sassDir: 'sass',
    		        cssDir: 'css',
    		        appDir: PWD,
    		        sourcemap: false,
    		        // noLineComments: true,
    		        config: 'config.rb',
    		        debug:false,
    		        outputStyle: 'compressed' // nested
    		    },
    		    src: [PWD+"/sass/**/*.scss"]
            },
            demo: {
                options: {
    		        sassDir: 'sass',
    		        cssDir: 'css',
    		        appDir: PWD+'/demo/',
    		        sourcemap: true,
    		        // noLineComments: true,
    		        config: 'config.rb',
    		        debug:false,
    		        outputStyle: 'compressed'
    		    },
    		    src: [PWD+"/demo/sass/*.scss"]
            }
		},
		// jinja编译
		jinja: {
			options: {
		       templateDirs: [PWD+'/demo/jinja/'],
		       preCompile: Jinja.preCompile,
		       init: Jinja.init
		    },
		    demo: {
				files: [{
					expand: true,
					dest: PWD+'/demo/html/',
					cwd: PWD+'/demo/jinja/',
					src: ['**/!(_)*.html']
				}]

		    },
		    single:{
			    files: [{
					expand: true,
					dest: PWD+'/demo/html/',
					cwd: PWD+'/demo/jinja/',
					src: ["<%= jinjacurrentPath %>"]
				}]
		    }
		},
		// html美化
		prettify: {

		    release: {
		      	expand: true,
			    cwd: buildDir+'/html/',
			    ext: '.html',
			    src: ['**/*.html'],
			    dest: buildDir+'/html/'
		    }

		},
		// 自定添加前缀
		autoprefixer: {
            options: {
            	remove : true,
            	map:false,
                browsers: ['ios 5','android 2.3']
            },
            // prefix all files
            multiple_files: {
                expand: true,
                cwd: PWD,
                src: ['**/*.css', '**/!*.min.css','!**/_*/**'],
                dest: PWD
            }
        },

        // CSS 压缩
		cssmin: {
			main: {
				files: [{
					expand: true,
					cwd: buildDir,
					src: ['**/*.css', '!*.min.css'],
					dest: buildDir
				}]
			}

		},


		// JPG/GIF 图片压缩
		imagemin: {
			compile: {
				files: [{
					expand: true,
					cwd: buildDir,
					src: ['**/*.{jpg,gif}'],
					dest: buildDir
				}]
			}
		},

		// PNG 图片压缩
		pngmin: {
			compile: {
				options: {
					ext: '.png',
					force: true
				},
				files: [{
					expand: true,
					cwd: buildDir,
					src: ['**/*.png',"!**/img/pc/index/mask.png","!**/img/pc/index/mask2560.png"],
					dest: buildDir
				}]
			}
		},

		// 开启服务器
		connect: {
            options: {
                port: 8080,
                hostname: IP, 	//默认就是这个值，可配置为本机某个 IP，localhost 或域名
                livereload: 35739  		//声明给 watch 监听的端口
            },
            server: {
                options: {
                    open: {
					  target: 'http://'+IP+':8080/demo/html'
					},
                    base: [
                        PWD + '' //主目录
                    ]
                }
            }
        },

        // 监听文件变动
		watch:{
			css: {
                files: [
                    PWD + '/**/*.scss'
                ],
                tasks: ['recursive-compass']
            },
            jinja: {
            	options:{
	        		spawn: false
	        	},
                files: [
                    PWD + '/**/jinja/**/*.html',
                    '**/!(_)*.html'
                ]
            },
            livereload:{
                options:{
                    livereload: true
                },
                files:[ PWD + '/**/css/**/*.css', PWD +'/**/js/**/*.js', PWD + '/**/html/**/*.html']
            }

		}

	});



	// grunt 执行命令
	//=================

	// 启动服务器及监听
	grunt.registerTask('server', [
        'connect:server',
        'watch',
    ]);
	grunt.registerTask('wait',function(){
		var done=this.async();
		setTimeout(function(){
			done();
		},100)
	});
	grunt.event.on('watch',function(action,filepath,target){
		var filepath=path.resolve(filepath);
		if(target=="jinja"){
			var f=filepath.replace(path.join(PWD,"/jinja/"),"");
            console.log(f);
			grunt.config('jinjacurrentPath',f);
   			grunt.task.run("jinja:demo");
		}
		grunt.task.run("wait");

    });

	// default
    grunt.registerTask('default',function(){
  		grunt.config('connect.server.options.open.target',"http://"+IP+":8080/demo/html");
  		grunt.config('connect.options.hostname',IP);
  		grunt.config('weinre.src.options.boundHost',IP);
    	grunt.task.run('jinja:demo','recursive-compass','autoprefixer','server');
        console.log('======================================');
        console.log(PWD);
        console.log('======================================');
    });
    grunt.registerTask('m',function(){
    	grunt.config("isMobile",true);
    	grunt.task.run("default");
    });
    // 发布到release
    grunt.registerTask('release', ['recursive-compass', 'autoprefixer','copy:release','prettify:release','imagemin','pngmin']);
    // 发布到latest
    grunt.registerTask('latest',function(){
        console.log('copy to the lastest...');
    	grunt.task.run("copy:latest");
    });
};
