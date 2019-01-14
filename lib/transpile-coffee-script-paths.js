'use strict';

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const CONFIG = require('../config');
const CompileCache = require(path.join(CONFIG.repositoryRootPath, 'src', 'compile-cache'));

module.exports = function () {
  console.log(`Transpiling CoffeeScript paths in ${CONFIG.intermediateAppPath}`);
  for (let path of getPathsToTranspile()) {
    transpileCoffeeScriptPath(path);
  }
};

function getPathsToTranspile () {
  let paths = [];
  let srcPaths = [
      path.join(CONFIG.intermediateAppPath, 'src'),
      //path.join(CONFIG.intermediateAppPath, 'spec'),
      path.join(CONFIG.intermediateAppPath, 'node_modules'),
      path.join(CONFIG.intermediateAppPath, 'dot-atom')
  ];
  let coffeeSpec = {
    glob: "**/*.coffee",
    transpiler: path.join(CONFIG.atomInOrbitLib, 'coffee-script'),
    options: {type: 'coffee'}
  };

  for (let srcPath of srcPaths) {
      CompileCache.addTranspilerConfigForPath(srcPath, '', {}, [coffeeSpec]);
      paths = paths.concat(glob.sync(path.join(srcPath, '**', '*.coffee')));
  }

  return paths;
}

function transpileCoffeeScriptPath (coffeePath) {
  const jsPath = coffeePath.replace(/coffee$/g, 'js');

  fs.writeFileSync(jsPath, CompileCache.addPathToCache(coffeePath, CONFIG.atomHomeDirPath));
  fs.unlinkSync(coffeePath);
}
