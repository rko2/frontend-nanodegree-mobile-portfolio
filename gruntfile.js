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
          'dist/js/perfmatters.js' : 'src/js/perfmatters.js'
        }
      },
      views: {
        files: {
          'dist/views/js/main.js' : 'src/views/js/main.js'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'inlinecss',
    'uglify'
	]);

}
