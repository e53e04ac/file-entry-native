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
  A(["e53e04ac/file-entry-native"]);
  subgraph "dependencies";
    B_0(["e53e04ac/base"]);
    B_1(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_2(["@types/node"]);
    B_3(["e53e04ac/file-entry"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  click B_0 "https://github.com/e53e04ac/base/tree/b4e091dbfeba0ea30c870ac7ac7877582e3fd4f0";
  click B_1 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_2 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_3 "https://github.com/e53e04ac/file-entry/tree/923119d07163b8f91b6138367a04760041225a06";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/file-entry-native"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:fs"
    D0(["existsSync"]);
    D1(["mkdirSync"]);
    D2(["opendirSync"]);
    D3(["readFileSync"]);
    D4(["writeFileSync"]);
    D5(["unlinkSync"]);
  end;
  subgraph "node:fs/promises"
    D6(["access"]);
    D7(["copyFile"]);
    D8(["cp"]);
    D9(["mkdir"]);
    D10(["opendir"]);
    D11(["readFile"]);
    D12(["rm"]);
    D13(["writeFile"]);
    D14(["unlink"]);
  end;
  subgraph "node:path"
    D15(["parse"]);
    D16(["relative"]);
    D17(["resolve"]);
  end;
  subgraph "base"
    D18(["Base"]);
  end;
  subgraph "hold"
    D19(["hold"]);
    D20(["unwrap"]);
    D22(["Get"]);
    D23(["ValueOrGet"]);
  end;
  subgraph "file-entry"
    D21(["FileEntry"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D7 --import--> C0;
  D8 --import--> C0;
  D9 --import--> C0;
  D10 --import--> C0;
  D11 --import--> C0;
  D12 --import--> C0;
  D13 --import--> C0;
  D14 --import--> C0;
  D15 --import--> C0;
  D16 --import--> C0;
  D17 --import--> C0;
  D18 --import--> C0;
  D19 --import--> C0;
  D20 --import--> C0;
  D18 --import--> C1;
  D21 --import--> C1;
  D22 --import--> C1;
  D23 --import--> C1;
~~~~~
