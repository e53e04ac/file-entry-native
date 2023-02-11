# file-entry-native

~~~~~ sh
npm install e53e04ac/file-entry-native
~~~~~

~~~~~ mjs
import { FileEntryNative } from 'e53e04ac/file-entry-native';
import { FileEntry } from 'e53e04ac/file-entry-native';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/base"]);
    B_1(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
    B_3(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  click B_0 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_1 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_3 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:fs";
    B_0_0(["existsSync"]);
    B_0_1(["mkdirSync"]);
    B_0_2(["opendirSync"]);
    B_0_3(["readFileSync"]);
    B_0_4(["writeFileSync"]);
    B_0_5(["unlinkSync"]);
  end;
  subgraph "node:fs/promises";
    B_1_0(["access"]);
    B_1_1(["copyFile"]);
    B_1_2(["cp"]);
    B_1_3(["mkdir"]);
    B_1_4(["opendir"]);
    B_1_5(["readFile"]);
    B_1_6(["rm"]);
    B_1_7(["writeFile"]);
    B_1_8(["unlink"]);
  end;
  subgraph "node:path";
    B_2_0(["parse"]);
    B_2_1(["relative"]);
    B_2_2(["resolve"]);
  end;
  subgraph "base";
    B_3_0(["Base"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
    B_4_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_0_1 ----> A;
  B_0_2 ----> A;
  B_0_3 ----> A;
  B_0_4 ----> A;
  B_0_5 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_1_2 ----> A;
  B_1_3 ----> A;
  B_1_4 ----> A;
  B_1_5 ----> A;
  B_1_6 ----> A;
  B_1_7 ----> A;
  B_1_8 ----> A;
  B_2_0 ----> A;
  B_2_1 ----> A;
  B_2_2 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
  B_4_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "base";
    B_0_0(["Base"]);
  end;
  subgraph "file-entry";
    B_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
    B_2_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_2_1 ----> A;
~~~~~
