module.exports =function(grunt) {

    // 配置
    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),
        
        meta: {
<<<<<<< HEAD
            destPath: '1.1.0',
            zipPath:'i.gtimg.cn/vipstyle/frozenui/1.1.0'
=======
<<<<<<< HEAD
            destPath: '1.1.0',
            zipPath:'1.1.0/i.gtimg.cn/vipstyle/frozenui/1.1.0'
=======
            destPath: '1.0.0',
            zipPath:'1.0.0/i.gtimg.cn/vipstyle/frozenui/1.0.0'
>>>>>>> 48b4e7d99271f06c0819a8de60492ec89e7d384b
>>>>>>> e2659d9d3c084538ffc2aa2cf1f190df063274dc
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
                    dest: 'img/' // 优化后的图片保存位置
                }]
            }
        },
        copy : {
            //图片没修改的情况不用处理
            img:{
                expand: true,
                cwd: 'img/',
                src: ['**/*'],
                dest:'<%=meta.destPath%>/img/'
            },

            imgzip:{
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
                    archive: 'i.gtimg.cn.zip'
                },
                expand: true,
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
                src: '1.0.0',
                dest: '/frozenui/1.0.0',
                exclusions: ['.DS_Store', 'node_modules','.sass-cache','.git','.grunt','.svn'],
                simple: true
            }
        },
        shell: {
            // svn:{
            //    command: [
            //         'svn up',
            //         'svn add * --force',
            //         'svn commit -m <%=grunt.option("log")%>'
            //     ].join('&&') 
            // },
            git: {
                command: [
                    'git add -A',
                    'git commit -m <%=grunt.option("log")%>',
                    'git pull origin master',
                    'git push origin master'
                ].join('&&')
            },
            gitsite:{
                command: [
                    'cd _site',
                    'git add -A',
                    'git commit -m <%=grunt.option("log")%>',
                    'git pull origin gh-pages',
                    'git push origin gh-pages'
                ].join('&&')
            },
            nico:{
              command: [
                    'svn up',
                    'git pull origin master',
                    'nico build',
                    'nico server'
                ].join('&&')   
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
    grunt.loadNpmTasks('grunt-shell');  
    // 默认任务
    grunt.registerTask('test', ['sass','copy','shell:nico']);

    grunt.registerTask('default', ['sass','cssmin','copy:css','compress']);
    grunt.registerTask('ci',['ftpush','shell']);

};