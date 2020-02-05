module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    '_site/css/main.min.css': '_site/css/main.css'
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

    grunt.registerTask('default', ['jekyll:build', 'cssmin:target']);
};
