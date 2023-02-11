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
    B_1(["e53e04ac/file-entry"]);
    B_2(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  click B_0 "https://github.com/e53e04ac/base/tree/86bc9dc951e32d7e173b8e7bf020b9439d75f8f7";
  click B_1 "https://github.com/e53e04ac/file-entry/tree/3121d37092abe3439372f24817a295aa5ed10d7e";
  click B_2 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_3 "https://www.npmjs.org/package/@types/node/v/18.13.0";
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
