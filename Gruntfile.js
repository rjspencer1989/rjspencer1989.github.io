module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    '_site/css/main.min.css': '_site/css/main.css'
                }
            }
        },

        buildcontrol: {
            options: {
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },

            pages: {
                options: {
                    dir: '_site',
                    remote: 'git@github.com:rjspencer1989/rjspencer1989.github.io.git',
                    branch: 'master'
                }
            }
        },

        jekyll: {
            options: {
                src: '.'
            },

            build: {
                options: {
                    serve: false
                }
            }
        }, 

        copy: {
            bib: {
                src: "/Users/rob/Google\ Drive/publications.bib",
                dest: "./_bibliography/references.bib"
            }
        }
    });

    grunt.registerTask('default', ['copy:bib', 'jekyll:build', 'cssmin:target', 'buildcontrol:pages']);
};
