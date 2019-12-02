const Path=require("path");
const join=(...args)=>Path.resolve(__dirname,...args);

module.exports={
    productionSourceMap:false,
    chainWebpack:config=>{
        config.resolve.alias
        .set("@docs",join("docs"));
        
        config.module
            .rule("fonts")
            .use("url-loader")
            .loader("url-loader")
            .tap(options=>Object.assign(options,{limit:1}));
        config.module
            .rule("markdown")
            .test(/\.md$/)
            .use("html-loader")
            .loader("html-loader")
            .end()
            .use("markdown-loader")
            .loader("markdown-loader")
            .end();
     
    },

    pages:{
        index:{
            entry:["src/main.ts"],
            template:"public/index.html",
            filename:"index.html",
            chunks:["chunk-vendors","index"]
        }
    },
    devServer:{
        proxy:{
            "api-*":{
                target:"http://localhost:3000"
            }
        }
    }
}