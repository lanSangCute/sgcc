const Path=require("path");

const HOSTPATH=process.cwd();

module.exports={
    HOSTPATH,
    join:(...path)=>Path.resolve(HOSTPATH,...path),
    resolve:(...path)=>Path.resolve(...path)   
};

