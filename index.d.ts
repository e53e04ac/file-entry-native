/*!
    @e53e04ac/file-entry-native/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from 'base';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace FileEntryNative {

    type Options = ValueOrGet<string> | {
        readonly path: ValueOrGet<string>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
    };

    type Self = Base & FileEntry & {
        readonly _FileEntry: Get<_Self>;
        readonly _FileEntryNative: Get<_Self>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type FileEntryNative = FileEntryNative.Self;

export declare const FileEntryNative: FileEntryNative.ConstructorWithCompanion;

export declare const FileEntry: FileEntryNative.ConstructorWithCompanion;
