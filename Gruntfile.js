module.exports =function(grunt) {

    // 配置

    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),
        
        meta: {
            destPath: '1.0.0',
            zipPath:'1.0.0/i.gtimg.cn/vipstyle/frozenui/1.0.0'
        },
         shell: {
            multiple: {
                command: [
                    'git add -A',
                    'git commit -m "ci"',
                    'git push origin master'
                ].join('&&')
            }
        },        
        cssmin: {
            minify: {
                expand: true,
                cwd: '<%=meta.destPath%>/css-debug/',
                src: ['**/*.css'],       
                dest:'<%=meta.destPath%>/css/'
            }
        },
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
                    dest: '<%=meta.destPath%>/img/' // 优化后的图片保存位置
                }]
            }
        },
        copy : {
            img:{
                expand: true,
                cwd: '<%=meta.destPath%>/img/',
                src: '*',
                dest:'<%=meta.zipPath%>/img/',
                filter: 'isFile'
            },
            css:{
                src: '<%=meta.destPath%>/css/basic.css',
                dest:'<%=meta.zipPath%>/css/basic.css'
            }
        },
        compress: {
            main: {
                options: {
                    archive: '<%=meta.destPath%>/i.gtimg.cn.zip'
                },
                expand: true,
                cwd: '<%=meta.destPath%>', 
                src: ['i.gtimg.cn/**']
            }
        },
        sass: {
            dist: {
                expand: true,
                cwd : "sass",
                src: ['**/*.scss'],
                dest:'<%=meta.destPath%>/css-debug/',
                ext:'.css'
            }
        },
        watch: {
            scripts: {
                files: [
                    'sass/**/*.scss'
                ],
                tasks: ['sass','cssmin','copy','compress']
            }
        },
        ftpush: {
          build: {
            auth: {
              host: '119.147.200.113',
              port: 21000,
              authKey: 'key'
            },
            src: '',
            dest: '/frozenui',
            exclusions: ['.DS_Store', 'node_modules','.sass-cache','.git','.grunt','.svn'],
            simple: true
          }
        }
    });

    // 载入concat和css插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ftpush');
    grunt.loadNpmTasks('grunt-exec');
    

    // 默认任务
    grunt.registerTask('default', ['sass','imagemin','cssmin','copy','compress','ftpush']);

};