module.exports = function (grunt) {

  grunt.initConfig({
    'gh-pages': {
      options: {
        base: '_book'
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['gh-pages']);
  grunt.registerTask('deploy', ['gh-pages']);

};