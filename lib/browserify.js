'use strict';

const path = require('path');
const CONFIG = require('../config');
const browserify = require('browserify');
const browserifyInputFile = require(path.join(CONFIG.intermediateAppPath, 'src', 'initialize-application-window'));
//either these modules needs to be loaded or the path to these modules needs
//to be mentioned, i need to find out through the doc
const atom = require.resolve(CONFIG.intermediateAppPath, 'exports', 'atom');
const electronShim = require.resolve(CONFIG.atomInOrbitShims, 'electron', 'index');
const bufferShim = require.resolve('browserfs/dist/shims/buffer.js');
const fsShim = require.resolve('browserfs/dist/shims/fs.js');
const pathShim = require.resolve('browserfs/dist/shims/path.js');
const builtins = require.resolve('browserify/lib/builtins');

const modulesToFilter = new Set([
    // Modules with native dependencies that we do not expect to exercise at runtime.
    'onig-reg-exp',
    'runas',
    './squirrel-update',
    'tls',
    '../src/main-process/win-shell', // From exports/atom.js
]);

const excludes = new Set([
    'electron',
    'git-utils',
    'keyboard-layout',
    'marker-index',
    'nslog',
    'oniguruma',
    'pathwatcher',
    'scrollbar-style'
]);

const bundler = browserify([browserifyInputFile])
