module.exports = function(grunt) {
  "use strict";

  var defaultTasks = ["psc:all", "dotPsci"];
  var purescriptSourceFiles = "src/**/*.purs";

  grunt.initConfig({
    srcFiles: [
      purescriptSourceFiles,
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
      files: purescriptSourceFiles,
      tasks: defaultTasks
    },

    run: {
      main: {
        cmd: "node",
        args: ["dist/Main.js"]
      }
    }
  });

  var plugins = ["grunt-purescript",
    "grunt-contrib-watch",
    "grunt-run"];

  plugins.forEach(function(plugin) { grunt.loadNpmTasks(plugin); });

  grunt.registerTask("default", defaultTasks);
}
