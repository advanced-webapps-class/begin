# Grunt

> The JavaScript Task Runner


[전체 예제 프로젝트](https://github.com/advanced-webapps-class/grunt-test)


## [시작하기](http://gruntjs.com/getting-started)

### CLI 설치

```
$ npm install -g grunt-cli
```

### grunt 로컬모듈 설치 


```
$ npm install grunt --save-dev
$ npm install grunt-contrib-uglify --save-dev
```

package.json

```javascript
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-uglify": "^0.9.1"
  }
}
```

### Gruntfile.js 만들기

```javascript
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```

### Task 실행

```
$ grunt uglify
```
