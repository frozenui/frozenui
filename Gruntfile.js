module.exports =function(grunt) {

    // 配置
    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),
        
        meta: {
            destPath: '1.1.0',
            zipPath:'i.gtimg.cn/vipstyle/frozenui/1.1.0'
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
                    cwd: 'img/<%=meta.destPath%>/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'img/<%=meta.destPath%>/' // 优化后的图片保存位置
                }]
            }
        },
        copy : {
            //图片没修改的情况不用处理
            img:{
                expand: true,
                cwd: 'img/<%=meta.destPath%>/',
                src: ['**/*'],
                dest:'<%=meta.destPath%>/img/'
            },

            zipimg:{
                expand: true,
                cwd: '<%=meta.destPath%>/img/',
                src: '*',
                dest:'<%=meta.zipPath%>/img/',
                filter: 'isFile'
            },
            css:{
                src: '<%=meta.destPath%>/css/frozen.css',
                dest:'<%=meta.zipPath%>/css/frozen.css'
            },
            staticcss:{
                src: '<%=meta.destPath%>/css-debug/global.css',
                dest:'_themes/one/static/global.css'
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
                src: '<%=meta.destPath%>',
                dest: '/frozenui/<%=meta.destPath%>',
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
    grunt.registerTask('default', ['sass','cssmin','imagemin','copy','compress','ftpush']);
    grunt.registerTask('docs',['sass','cssmin','copy','compress','shell:nico']);

};