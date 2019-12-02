const fs=require("fs");
const Path=require("path");
const copydir=require("copy-dir");
const Url=require("url");
const TemplateDoc=require("./templateDoc");


const convertMarkdownToPath=(markdownPath)=>markdownPath.replace(/^\.\/?/,"");
const convertMarkdownToName=(markdownPath)=>{
    markdownPath=markdownPath.replace(/(^\.|\..*?$)/g,"");
    return markdownPath.split("/").filter(v=>!!v).reduce((p,n)=>p+n[0].toUpperCase()+n.slice(1));
}
module.exports=class HanldeDoc extends TemplateDoc{
    constructor(
        docDirPath,
        docJsonPath,
        outPath,
        navDataPath
    ){
        super();
        this.tempalteForceUpdate=true;
        this.docDirPath=docDirPath;
        this.pageList=[];
        this.outPath=outPath;
        this.navDataPath=navDataPath;
        this.modulePath=Path.resolve(outPath,"docs.module.ts");
        
        this.routerList="";
        this.importList="";
        this.navData=[];
        this.pageList=this.parseDoc(docJsonPath);
    }

    parseDoc(docJsonPath){
        return JSON.parse(fs.readFileSync(docJsonPath).toString())["navList"];
    }


    createStage(){
        // copydir(this.docDirPath,this.outPath,{utimes:true,mode:true,cover:true});
        
        if(!fs.existsSync(this.outPath))fs.mkdirSync(this.outPath);
    }

    createTemplate(pageInfo,parentItem=null){
        let routePath;
        //存在路由地址
        if(pageInfo.markdown){
            
            routePath=convertMarkdownToPath(pageInfo.markdown);
            const componentName=convertMarkdownToName(pageInfo.markdown);
            const componentFullName=componentName+".vue";
            const componentNativePath=Path.resolve(this.outPath,componentFullName);
            const componentIframe=pageInfo.iframe;
            const componentMdPath=Url.resolve("@docs/",pageInfo.markdown);
            
            this.createTp(
                componentMdPath,
                componentNativePath,
                pageInfo
            );
            this.routerList+=`
            {path:"${routePath}",component:()=>import("./${componentFullName}"),meta:{iframe:"${componentIframe||''}"}},
            `;
        }
       

        const pageItem={
            label:pageInfo.label
        };
        if(routePath)pageItem["path"]=`/docs/${routePath}`;

        if(parentItem){
            parentItem.children?parentItem.children.push(pageItem):(parentItem.children=[pageItem]);
        }else{
            this.navData.push(pageItem);    
        }
        return pageItem;
    }
    createModuleFile(){
        const moduleTp=this.getTemplate("module").replace(/#{\$importList}/g,this.importList)
            .replace(/#{\$routerList}/g,this.routerList);
        fs.writeFileSync(this.modulePath,moduleTp);
    }
    createNavFile(){
        const navTp=this.getTemplate("navData").replace(/#{\$navData}/g,JSON.stringify(this.navData));
        fs.writeFileSync(this.navDataPath,navTp);
    }
    fromPageList(pageList,parentItem=null){
        pageList.forEach(pageInfo=>{
           const item= this.createTemplate(pageInfo,parentItem);
           if(pageInfo.children&&pageInfo.children.length)this.fromPageList(pageInfo.children,item);
        })
    }

    beginTravel(){
        this.createStage();

        this.fromPageList(this.pageList);
        
        this.createModuleFile();
        
        this.createNavFile();
    }
}