'use strict'

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const CONFIG = require('../config');
const CompileCache = require(path.join(CONFIG.repositoryRootPath, 'src', 'compile-cache'));

module.exports = function () {
  console.log(`transpling assets in ${CONFIG.intermediateAppPath}`);
  for (let path of getPathsToTranspile()) {
    transpileBabelPath(path);
  }
}

function getPathsToTranspile () {
  let paths = [];
  let srcPaths = [
      path.join(CONFIG.intermediateAppPath, 'benchmarks'),
      path.join(CONFIG.intermediateAppPath, 'exports'),
      path.join(CONFIG.intermediateAppPath, 'static'),
      path.join(CONFIG.intermediateAppPath, 'src'),
      path.join(CONFIG.intermediateAppPath, 'vendor')
  ];
  let jsSpec = {
    glob: "**/*.js",
    transpiler: path.join(CONFIG.atomInOrbitLib, 'babel'),
    options: {type: 'js'}
  };

  for (let srcPath of srcPaths) {
      CompileCache.addTranspilerConfigForPath(srcPath, '', {}, [jsSpec]);
      paths = paths.concat(glob.sync(path.join(srcPath, '**', '*.js')));
  }

  return paths;
}

function transpileBabelPath (path) {
  fs.writeFileSync(path, CompileCache.addPathToCache(path, CONFIG.atomHomeDirPath));
}
