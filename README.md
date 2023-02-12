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
  click B_0 "https://github.com/e53e04ac/base/tree/ec922e97d594333727b64f0f4754321480a59c3c";
  click B_1 "https://github.com/e53e04ac/hold/tree/5dd6f94b8ecd94f98219a7afae52320676380c27";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_3 "https://github.com/e53e04ac/file-entry/tree/5e7bd3bb6438d7a2d7019e184729b9390342bb7d";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-native";
    E_0(["FileEntryNative"]);
    E_1(["FileEntry"]);
  end;
  M(["index.mjs"])
  subgraph "node:fs";
    I_0_0(["existsSync"]);
    I_0_1(["mkdirSync"]);
    I_0_2(["opendirSync"]);
    I_0_3(["readFileSync"]);
    I_0_4(["writeFileSync"]);
    I_0_5(["unlinkSync"]);
  end;
  subgraph "node:fs/promises";
    I_1_0(["access"]);
    I_1_1(["copyFile"]);
    I_1_2(["cp"]);
    I_1_3(["mkdir"]);
    I_1_4(["opendir"]);
    I_1_5(["readFile"]);
    I_1_6(["rm"]);
    I_1_7(["writeFile"]);
    I_1_8(["unlink"]);
  end;
  subgraph "node:path";
    I_2_0(["parse"]);
    I_2_1(["relative"]);
    I_2_2(["resolve"]);
  end;
  subgraph "base";
    I_3_0(["Base"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
    I_4_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_0_2;
  M ----> I_0_3;
  M ----> I_0_4;
  M ----> I_0_5;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_1_2;
  M ----> I_1_3;
  M ----> I_1_4;
  M ----> I_1_5;
  M ----> I_1_6;
  M ----> I_1_7;
  M ----> I_1_8;
  M ----> I_2_0;
  M ----> I_2_1;
  M ----> I_2_2;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_4_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-native";
    E_0(["type FileEntryNative"]);
    E_1(["const FileEntryNative"]);
    E_2(["const FileEntry"]);
  end;
  M(["index.d.ts"])
  subgraph "base";
    I_0_0(["Base"]);
  end;
  subgraph "file-entry";
    I_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
