const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON("aws-credentials.json"),
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: false }, webpackConfig)
    },
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: 'chairbnb-apm', 
        region: "<%= aws.region %>",
        headers: {
          'Cache-Control': 'max-age=630720000, public',
          'Expires': new Date(Date.now() + 63072000000).toUTCString()
        }, 
      },
      build: {
        cwd: './client/dist',
        src: '**'
      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-aws');
  grunt.registerTask('default', ['webpack', 's3']);
};
