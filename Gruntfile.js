module.exports =function(grunt) {

    // 配置
    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),
        
        meta: {
            zipPath:'i.gtimg.cn/vipstyle/frozenui'
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
            frozencss:{
                src: ['<%=pkg.version%>/css/global.css'],

                dest: '<%=meta.zipPath%>/'
            },
            staticcss:{
                src: ['<%=pkg.version%>/css/frozen.css','<%=pkg.version%>/css/global.css','<%=pkg.version%>/css-debug/global.css',
                    '<%=pkg.version%>/css-debug/frozen.css','<%=pkg.version%>/img/**'],
                dest: '_themes/one/static/'
            },
            
            downloadcss:{
                src: ['<%=pkg.version%>/css/frozen.css','<%=pkg.version%>/css/global.css','<%=pkg.version%>/css-debug/global.css',
                    '<%=pkg.version%>/css-debug/frozen.css','<%=pkg.version%>/img/**'],
                dest: '../frozenui.github.io/demo/frozenui/'
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
                cwd : 'sass',
                src: ['*.scss'],
                dest:'<%=pkg.version%>/css-debug/',
                ext:'.css'
            },
            dist2: {
                expand: true,
                cwd : 'sass/basic',
                src: ['*.scss'],
                dest:'<%=pkg.version%>/css-debug/',
                ext:'.css'
            },
            dist3: {
                expand: true,
                cwd : 'sass/vip',
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
    grunt.registerTask('build', ['sass','autoprefixer','cssmin','imagemin','copy','compress']);
    grunt.registerTask('default',['sass','autoprefixer','cssmin','imagemin','copy','compress','ftpush']);
    

};
