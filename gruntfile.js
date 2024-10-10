module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configuração do LESS
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' // Compilar para desenvolvimento
                }
            },
            production: {
                options: {
                    compress: true, // Comprimir para produção
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files:['src/styles/**/*'],
                tasks:['less:development']
            },
            html:{
                files:['src/styles/index.html'],
                tasks:['replace:dev']

            }
        },
        replace:{
            dist:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO-CSS',
                            replacement:'./styles/main.min.css',
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src:['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true,
                     report: 'min'
                },
                files:{
                    'prebuild/index.html':'src/styles/index.html'
                }
            }
        },
        clean:['prebuild'],
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js':'src/scripts/script.js'
                }
            }

        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
};
