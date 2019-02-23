'use strict';

var path = require('path');
var babel = require('babel-core');

exports.compile = function (sourceCode, filePath) {
  if (process.platform === 'win32') {
    filePath = 'file:///' + path.resolve(filePath).replace(/\\/g, '/');
  }

  return babel.transform(sourceCode, {
    filename: filePath,
    breakConfig: true,
    sourceMap: false,
    blacklist: ["es6.forOf", "useStrict"],
    optional: ["asyncToGenerator"],
    stage: 0
  }).code;
};

exports.transpile = function (sourceCode, filePath){
  return {
    code: exports.compile(sourceCode, filePath) 
  };
};
