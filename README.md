# file-entry-native

~~~~~ sh
npm install e53e04ac/file-entry-native
~~~~~

~~~~~ mjs
import { FileEntryNative } from 'file-entry-native';
import { FileEntry } from 'file-entry-native';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["base"]);
    B_1(["hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
    B_3(["file-entry"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/base\n58b103e868bb808365f57a91729e725c379c93a1"]);
    C_1(["e53e04ac/hold\n6ce132702778d99c7f80a785e982419974dca8e5"]);
    C_3(["e53e04ac/file-entry\n43d558c1cb0725770c2f06b00bd2d174c543a145"]);
  end;
  subgraph "npmjs";
    C_2(["@types/node\n18.15.11"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  click C_0 "https://github.com/e53e04ac/base/tree/58b103e868bb808365f57a91729e725c379c93a1";
  click C_1 "https://github.com/e53e04ac/hold/tree/6ce132702778d99c7f80a785e982419974dca8e5";
  click C_2 "https://www.npmjs.com/package/@types/node/v/18.15.11";
  click C_3 "https://github.com/e53e04ac/file-entry/tree/43d558c1cb0725770c2f06b00bd2d174c543a145";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-native";
    E_0(["namespace FileEntryNative"]);
    E_1(["type FileEntryNative"]);
    E_2(["const FileEntryNative"]);
    E_3(["const FileEntry"]);
  end;
  M["index.d.ts"]
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
  E_3 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/file-entry-native";
    E_0(["FileEntryNative"]);
    E_1(["FileEntry"]);
  end;
  M["index.mjs"]
  subgraph "node:fs";
    I_0_0(["createReadStream"]);
    I_0_1(["createWriteStream"]);
    I_0_2(["existsSync"]);
    I_0_3(["mkdirSync"]);
    I_0_4(["opendirSync"]);
    I_0_5(["readFileSync"]);
    I_0_6(["writeFileSync"]);
    I_0_7(["unlinkSync"]);
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
    I_2_3(["sep"]);
  end;
  subgraph "node:stream";
    I_3_0(["Transform"]);
  end;
  subgraph "node:url";
    I_4_0(["fileURLToPath"]);
  end;
  subgraph "base";
    I_5_0(["Base"]);
  end;
  subgraph "hold";
    I_6_0(["hold"]);
    I_6_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_0_2;
  M ----> I_0_3;
  M ----> I_0_4;
  M ----> I_0_5;
  M ----> I_0_6;
  M ----> I_0_7;
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
  M ----> I_2_3;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_6_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
