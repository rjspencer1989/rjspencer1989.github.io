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
            source: {
                options: {
                    dir: '.',
                    remote: 'git@github.com:rjspencer1989/rjspencer1989.github.io.git',
                    branch: 'dev'
                }
            },

            pages: {
                options: {
                    dir: '_site',
                    remote: 'git@github.com:rjspencer1989/rjspencer1989.github.io.git',
                    branch: 'master'
                }
            }
        }
    });

    grunt.registerTask('default', ['buildcontrol:source']);
};
