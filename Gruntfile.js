module.exports =function(grunt) {

    // 配置
    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),
        
        meta: {
            zipPath:'i.gtimg.cn/vipstyle/frozenui/<%=pkg.version%>'
        }, 
        cssmin: {
            minify: {
                expand: true,
                cwd: '<%=pkg.version%>/css-debug/',
                src: ['**/*.css'],       
                dest:'<%=pkg.version%>/css/'
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
                    cwd: 'img/<%=pkg.version%>/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'img/<%=pkg.version%>/' // 优化后的图片保存位置
                }]
            }
        },
        copy : {
            //图片没修改的情况不用处理
            img:{
                expand: true,
                cwd: 'img/<%=pkg.version%>/',
                src: ['**/*'],
                dest:'<%=pkg.version%>/img/'
            },
            zipimg:{
                expand: true,
                cwd: '<%=pkg.version%>/img/',
                src: '*',
                dest:'<%=meta.zipPath%>/img/',
                filter: 'isFile'
            },
            frozencss:{
                src: '<%=pkg.version%>/css/frozen.css',
                dest: '<%=meta.zipPath%>/css/frozen.css'
            },
            vipcss:{
                src: '<%=pkg.version%>/css/vip.css',
                dest: '<%=meta.zipPath%>/css/vip.css'
            },
            staticcss:{
                src: '<%=pkg.version%>/css-debug/global.css',
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
            },
            download:{
                options: {
                    archive: '_themes/one/static/frozenui.zip'
                },
                expand: true,
                src: ['<%=pkg.version%>/**']
            }
        },
        sass: {
            dist: {
                expand: true,
                cwd : "sass",
                src: ['*.scss'],
                dest:'<%=pkg.version%>/css-debug/',
                ext:'.css'
            }
        },
        autoprefixer: {

            options: {
                diff: false,
                browsers: ['ios 5','android 2.3']
            },

            // prefix all files
            multiple_files: {
                expand: true,
                src: ['<%=pkg.version%>/css-debug/*.css','<%=pkg.version%>/css-debug/**/*.css']
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
                src: '<%=pkg.version%>',
                dest: '/frozenui/<%=pkg.version%>',
                exclusions: ['.DS_Store', 'node_modules','.sass-cache','.git','.grunt','.svn','_site'],
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
            build:{
              command: 'nico build'
            },
            server:{
              command: 'nico server'  
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
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-ftpush');
    grunt.loadNpmTasks('grunt-shell');  
    // 默认任务
    grunt.registerTask('default', ['sass','autoprefixer','cssmin','imagemin','copy','compress','ftpush']);
    grunt.registerTask('docs',['sass','autoprefixer','cssmin','copy','compress','shell:build','shell:server']);
    grunt.registerTask('commit',['sass','autoprefixer','cssmin','imagemin','copy','compress','ftpush','shell:build','shell:git','shell:gitsite']);
    

};
