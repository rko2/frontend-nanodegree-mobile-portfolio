module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');

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
    uglify: {
      dist: {
        files: {
          'dist/js/perfmatters.js' : 'dist/js/perfmatters.js'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'inlinecss',
    'uglify'
	]);

}
