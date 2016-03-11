module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.initConfig({

    responsive_images: {
      all: {
        options: {
          engine: 'im',
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'src/img',
            dest: 'dist/img'
          }]
        }
      },

    mkdir: {
      all: {
      options: {
        create: ['dist/img']
      },
    },
  },
});

  grunt.registerTask('default', [
		'responsive_images',
    'mkdir'
	]);

}
