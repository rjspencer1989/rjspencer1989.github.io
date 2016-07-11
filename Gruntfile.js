module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.initConfig({
        buildcontrol: {
            options: {
                commit: true,
                push: true,
                message: 'Built %sourceName% from commmit %sourceCommit% on branch %sourceBranch%'
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

    grunt.registerTask('default', ['copy:bib', 'jekyll:build', 'buildcontrol:pages']);
};
