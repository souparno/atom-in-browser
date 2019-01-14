'use strict';

var crypto = require('crypto');
var path = require('path');
var CoffeeScript = require('coffee-script');

exports.compile = function (sourceCode, filePath) {
  if (process.platform === 'win32') {
    filePath = 'file:///' + path.resolve(filePath).replace(/\\/g, '/');
  }

  return CoffeeScript.compile(sourceCode, {
    filename: filePath,
    sourceFiles: [filePath],
    inlineMap: false
  });
};

exports.transpile = function (sourceCode, filePath){
  return {
    code: exports.compile(sourceCode, filePath) 
  };
};
