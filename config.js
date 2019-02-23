'use strict';

const fs = require('fs');
const path = require('path');
const localConfig = require('./config.json');
const universalConfig = require(path.join(localConfig.src, 'script/config'));
const atomInOrbitRoot = path.resolve(__dirname, '.');
const atomInOrbitLib = path.join(atomInOrbitRoot, 'lib');
const atomInOrbitScript = path.join(atomInOrbitRoot, 'script');
const atomInOrbitStatic = path.join(atomInOrbitRoot, 'static');
const atomInOrbitShims = path.join(atomInOrbitRoot, 'shims');

module.exports = Object.assign({
  'atomInOrbitRoot': atomInOrbitRoot,
  'atomInOrbitLib': atomInOrbitLib,
  'atomInOrbitScript': atomInOrbitScript,
  'atomInOrbitStatic': atomInOrbitStatic
}, universalConfig);
