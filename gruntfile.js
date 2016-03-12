module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-inline-css');

  grunt.initConfig({
    inlinecss: {
        main: {
            options: {
            },
            files: {
                'dist/index.html': 'src/index.html'
            }
        }
    },
  });

  grunt.registerTask('default', [
    'inlinecss'
	]);

}
