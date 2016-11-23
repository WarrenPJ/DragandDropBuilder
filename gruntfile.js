module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: './custom/*'
    },
    watch: {
      options: {
        livereload: true
      },
      set1: {
        files: ['./custom/js/*'],
        tasks: ['jshint']
      },
      set2: {
        files: ['./custom/css/*']
      },
      set3: {
        files: ['*.html']
      },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('server', ['connect','watch']);

};
