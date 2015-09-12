'use strict';

var         path = require('path'),
    inlineEscape = require('inline-escape'),
              fs = require('fs');

module.exports = function(eyeglass, sass) {
  return {
    sassDir: path.join(__dirname, 'sass'),
    // TODO: eyeglass assets?
    functions: {
      'inline-svg($path)': function(path, done) {
        fs.readFile(path.getValue(), 'utf8', function (err,data) {
        if (err) {
          return console.log(err); // TODO: sass error object?
        }
        done(sass.types.String('url("data:image/svg+xml;charset=utf8,' + inlineEscape(data) + '")'));
      });
      }
    }
  };
};
