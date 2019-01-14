const path = require('path');
const CONFIG = require('../config');
const cleanOutputDirectory = require(path.join(CONFIG.scriptRootPath, 'lib', 'clean-output-directory'));
const transpilePackagesWithCustomTranspilerPaths = require(path.join(CONFIG.scriptRootPath, 'lib', 'transpile-packages-with-custom-transpiler-paths'));
const transpileBabelPaths = require(path.join(CONFIG.scriptRootPath, 'lib', 'transpile-babel-paths'));
const transpileCsonPaths = require(path.join(CONFIG.scriptRootPath, 'lib', 'transpile-cson-paths'));
const transpilePegJsPaths = require(path.join(CONFIG.scriptRootPath, 'lib', 'transpile-peg-js-paths'));
const copyAssets = require(path.join(CONFIG.atomInOrbitLib, 'copy-assets'));
const transpileAssets = require(path.join(CONFIG.atomInOrbitLib, 'transpile-assets'));
const transpileCoffeeScriptPaths = require(path.join(CONFIG.atomInOrbitLib, 'transpile-coffee-script-paths'));
const generateStartupSnapshot = require(path.join(CONFIG.atomInOrbitLib, 'generate-startup-snapshot'));
// const browserify = require(path.join(CONFIG.atomInOrbitLib, 'browserify'))

cleanOutputDirectory()
copyAssets()

transpilePackagesWithCustomTranspilerPaths()

transpileBabelPaths()
transpileAssets()
transpileCoffeeScriptPaths()

transpileCsonPaths()
transpilePegJsPaths()
//browserify()



