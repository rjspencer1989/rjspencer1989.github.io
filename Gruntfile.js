module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-jekyll');
    
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
        }
    });

    grunt.registerTask('default', ['jekyll:build', 'buildcontrol:pages']);
};
