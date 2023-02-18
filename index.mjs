/*!
    @e53e04ac/file-entry-native/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { createReadStream as fsCreateReadStream } from 'node:fs';
import { createWriteStream as fsCreateWriteStream } from 'node:fs';
import { existsSync as fsExistsSync } from 'node:fs';
import { mkdirSync as fsMkdirSync } from 'node:fs';
import { opendirSync as fsOpendirSync } from 'node:fs';
import { readFileSync as fsReadFileSync } from 'node:fs';
import { writeFileSync as fsWriteFileSync } from 'node:fs';
import { unlinkSync as fsUnlinkSync } from 'node:fs';
import { access as fsAccess } from 'node:fs/promises';
import { copyFile as fsCopyFile } from 'node:fs/promises';
import { cp as fsCp } from 'node:fs/promises';
import { mkdir as fsMkdir } from 'node:fs/promises';
import { opendir as fsOpendir } from 'node:fs/promises';
import { readFile as fsReadFile } from 'node:fs/promises';
import { rm as fsRm } from 'node:fs/promises';
import { writeFile as fsWriteFile } from 'node:fs/promises';
import { unlink as fsUnlink } from 'node:fs/promises';
import { parse as pathParse } from 'node:path';
import { relative as pathRelative } from 'node:path';
import { resolve as pathResolve } from 'node:path';
import { Transform as StreamTransform } from 'node:stream';

import { Base } from 'base';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').FileEntryNative.Constructor} */
const constructor = ((options) => {

    const _options = ({
        path: hold(() => {
            return (
                typeof options === 'object'
                    ? unwrap(options.path)
                    : unwrap(options)
            );
        }),
    });

    /** @type {import('.').FileEntryNative._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').FileEntryNative.Self} */
    const self = ({
        ...Base({}),
        _FileEntry: (() => {
            return _self;
        }),
        _FileEntryNative: (() => {
            return _self;
        }),
        path: (() => {
            return _options.path();
        }),
        parsedPath: hold(() => {
            return pathParse(self.path());
        }),
        root: (() => {
            return self.parsedPath().root;
        }),
        dir: (() => {
            return self.parsedPath().dir;
        }),
        base: (() => {
            return self.parsedPath().base;
        }),
        ext: (() => {
            return self.parsedPath().ext;
        }),
        name: (() => {
            return self.parsedPath().name;
        }),
        parent: (() => {
            return constructor(self.dir());
        }),
        resolve: ((...paths) => {
            return constructor(pathResolve(self.path(), ...paths));
        }),
        relative: ((destination) => {
            return pathRelative(self.path(), destination.path());
        }),
        exists: (async () => {
            return await fsAccess(self.path()).then(() => {
                return true;
            }, (error) => {
                if (error.code === 'ENOENT') {
                    return false;
                }
                throw error;
            });
        }),
        children: (async function* (params) {
            const depth = (params?.depth ?? Infinity);
            const returnDirectories = (params?.returnDirectories ?? true);
            const returnFiles = (params?.returnFiles ?? true);
            if (depth > 0) {
                const dir = await fsOpendir(self.path());
                for await (const dirent of dir) {
                    const child = constructor(pathResolve(dir.path, dirent.name));
                    if (dirent.isDirectory()) {
                        if (returnDirectories === true) {
                            yield child;
                        }
                        yield* child.children({ depth: depth - 1, returnDirectories, returnFiles });
                    }
                    if (dirent.isFile()) {
                        if (returnFiles === true) {
                            yield child;
                        }
                    }
                }
            }
        }),
        directories: (async function* (params) {
            yield* self.children({ ...params, returnDirectories: true, returnFiles: false });
        }),
        files: (async function* (params) {
            yield* self.children({ ...params, returnDirectories: false, returnFiles: true });
        }),
        childrenSync: (function* (params) {
            const depth = (params?.depth ?? Infinity);
            const returnDirectories = (params?.returnDirectories ?? true);
            const returnFiles = (params?.returnFiles ?? true);
            if (depth > 0) {
                const dir = fsOpendirSync(self.path());
                while (true) {
                    const dirent = dir.readSync();
                    if (dirent == null) {
                        break;
                    }
                    const child = constructor(pathResolve(dir.path, dirent.name));
                    if (dirent.isDirectory()) {
                        if (returnDirectories === true) {
                            yield child;
                        }
                        yield* child.childrenSync({ depth: depth - 1, returnDirectories, returnFiles });
                    }
                    if (dirent.isFile()) {
                        if (returnFiles === true) {
                            yield child;
                        }
                    }
                }
                dir.closeSync();
            }
        }),
        directoriesSync: (function* (params) {
            yield* self.childrenSync({ ...params, returnDirectories: true, returnFiles: false });
        }),
        filesSync: (function* (params) {
            yield* self.childrenSync({ ...params, returnDirectories: false, returnFiles: true });
        }),
        createDirectory: (async () => {
            await fsMkdir(self.path(), {
                recursive: true,
            });
        }),
        copyDirectory: (async (destination) => {
            await destination.parent().createDirectory();
            await fsCp(self.path(), destination.path(), { recursive: true });
        }),
        deleteDirectory: (async () => {
            await fsRm(self.path(), {
                force: true,
                recursive: true,
            });
        }),
        copyFile: (async (destination) => {
            await destination.parent().createDirectory();
            await fsCopyFile(self.path(), destination.path());
        }),
        deleteFile: (async () => {
            await fsUnlink(self.path());
        }),
        writeBytes: (async (bytes) => {
            await self.parent().createDirectory();
            await fsWriteFile(self.path(), bytes);
        }),
        writeString: (async (string, options) => {
            await self.writeBytes(Buffer.from(string, options?.encoding ?? 'utf8'));
        }),
        writeLines: (async (lines, options) => {
            await self.writeString(lines.join(options?.lineDelimiter ?? '\r\n'), {
                encoding: options?.encoding,
            });
        }),
        writeJson: (async (json, options) => {
            await self.writeString(JSON.stringify(json, options?.replacer, options?.space), {
                encoding: options?.encoding,
            });
        }),
        readBytes: (async () => {
            return await fsReadFile(self.path());
        }),
        readString: (async (options) => {
            return await self.readBytes().then((bytes) => {
                return bytes.toString(options?.encoding ?? 'utf8');
            });
        }),
        readLines: (async (options) => {
            return await self.readString({ encoding: options?.encoding }).then((string) => {
                return string.split(options?.lineDelimiter ?? '\r\n');
            });
        }),
        readJson: (async (options) => {
            return await self.readString({ encoding: options?.encoding }).then((string) => {
                return JSON.parse(string, options?.reviver);
            });
        }),
        transformString: (async (destination, transform, options) => {
            await self.readString(options?.source).then((input) => {
                return transform(input);
            }).then((output) => {
                return destination.writeString(output, options?.destination);
            });
        }),
        existsSync: (() => {
            return fsExistsSync(self.path());
        }),
        createDirectorySync: (() => {
            fsMkdirSync(self.path(), {
                recursive: true,
            });
        }),
        deleteFileSync: (() => {
            fsUnlinkSync(self.path());
        }),
        writeBytesSync: ((bytes) => {
            self.parent().createDirectorySync();
            fsWriteFileSync(self.path(), bytes);
        }),
        writeStringSync: ((string, options) => {
            self.writeBytesSync(Buffer.from(string, options?.encoding ?? 'utf8'));
        }),
        writeLinesSync: ((lines, options) => {
            self.writeStringSync(lines.join(options?.lineDelimiter ?? '\r\n'), {
                encoding: options?.encoding,
            });
        }),
        writeJsonSync: ((json, options) => {
            self.writeStringSync(JSON.stringify(json, options?.replacer, options?.space), {
                encoding: options?.encoding,
            });
        }),
        readBytesSync: (() => {
            return fsReadFileSync(self.path());
        }),
        readStringSync: ((options) => {
            return self.readBytesSync().toString(options?.encoding ?? 'utf8');
        }),
        readLinesSync: ((options) => {
            return self.readStringSync({ encoding: options?.encoding }).split(options?.lineDelimiter ?? '\r\n');
        }),
        readJsonSync: ((options) => {
            return JSON.parse(self.readStringSync({ encoding: options?.encoding }), options?.reviver);
        }),
        createReadStream: (async () => {
            return fsCreateReadStream(self.path());
        }),
        createWriteStream: (async () => {
            await self.parent().createDirectory();
            return fsCreateWriteStream(self.path());
        }),
        createWriteLineStream: (async (options) => {
            return await self.createWriteStream().then((writeStream) => {
                const lineDelimiter = (options?.lineDelimiter ?? '\r\n');
                return (new StreamTransform({
                    writableObjectMode: true,
                    readableObjectMode: false,
                    encoding: options?.encoding,
                    transform(chunk, encoding, callback) {
                        this.push(chunk);
                        this.push(lineDelimiter);
                        callback();
                    },
                    final(callback) {
                        callback();
                    },
                })).pipe(writeStream);
            });
        }),
    });

    return self;

});

/** @type {import('.').FileEntryNative.Companion} */
const companion = ({});

/** @type {import('.').FileEntryNative.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as FileEntryNative };

export { constructorWithCompanion as FileEntry };
