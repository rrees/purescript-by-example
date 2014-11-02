module.exports = function(grunt) {
  "use strict";

  var defaultTasks = ["psc:all", "dotPsci"]

  grunt.initConfig({
    srcFiles: [
      "src/**/*.purs",
      "bower_components/**/src/**/*.purs"
    ],

    psc: {
      options: {
        main: "Chapter2",
        modules: ["Chapter2"]
      },

      all: {
        src: ["<%=srcFiles%>"],
        dest: "dist/Main.js"
      }
    },

    dotPsci: ["<%=srcFiles%>"],

    watch : {
      files: "src/**/*.purs",
      tasks: defaultTasks
    }
  });

  grunt.loadNpmTasks("grunt-purescript");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", defaultTasks);
}
