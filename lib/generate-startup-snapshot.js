const path = require('path');
const CONFIG = require('../config');
const FileSystemBlobStore = require(path.join(CONFIG.repositoryRootPath, 'src', 'file-system-blob-store'));
const NativeCompileCache  = require(path.join(CONFIG.repositoryRootPath, 'src', 'native-compile-cache'));
const CompileCache = require(path.join(CONFIG.repositoryRootPath, 'src', 'compile-cache'));

//NativeCompileCache.setCacheStore(FileSystemBlobStore.load(path.join(process.env.ATOM_HOME, 'blob-store')))
NativeCompileCache.setCacheStore(FileSystemBlobStore.load());
NativeCompileCache.setV8Version(process.versions.v8);
NativeCompileCache.install();

CompileCache.setAtomHomeDirectory(process.env.ATOM_HOME);
CompileCache.install(process.resourcesPath, require);


