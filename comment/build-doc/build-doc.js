const {config:{docDir,docJson,outDir,pageDirName,navData}}=require("./build-doc.config");
const {HOSTPATH,join,resolve} =require("./lib/common");
const HandleDoc=require("./lib/handleDoc");

const dirPath=join(docDir);
const jsonPath=join(docJson);
const outPath=join(outDir);
const navDataPath=join(navData);

const hanldeDoc=new HandleDoc(
    dirPath,
    jsonPath,
    outPath,
    navDataPath
);

hanldeDoc.beginTravel();