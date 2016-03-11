module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.initConfig({
    responsive_images: {
      options: {
        engine: im;
      },
      files: [{
        expand: true,
        src: ['*.{gif,jpg,png}'],
        cwd: 'src/img',
        dest: 'dist/img'
      }]
    }
  })
}
