const Path=require("path");
const fs=require("fs");

module.exports=class TemplateDoc{
    constructor(){
        const tps=this.template={
            "mobile":this.loadTemplate("mobileTemplate.vue"),
            "pc":this.loadTemplate("pcTemplate.vue"),
            "navData":this.loadTemplate("navDataTemplate.ts"),
            "module":this.loadTemplate("moduleTemplate.ts")
        };

        this.createdTemplateName=new Set();
    }
    
    selectTp(pageInfo){
        console.log(pageInfo.iframe)
        if(pageInfo.iframe)return this.getTemplate("mobile");
        return this.getTemplate("pc");
    }

    createTp(componentMdPath,componentNativePath,pageInfo){
        if(this.createdTemplateName.has(componentNativePath))return;

        if(this.tempalteForceUpdate||!fs.existsSync(componentNativePath)){
            const tp=this.selectTp(pageInfo)

            const tpContent=tp.replace(/#{\$mdPath}/g,componentMdPath);
            fs.writeFileSync(componentNativePath,tpContent);
        }
        this.createdTemplateName.add(componentNativePath);
    }


    loadTemplate(templateName){
        const templatePath= Path.resolve(__dirname,"../","templates",templateName);
        return fs.readFileSync(templatePath).toString();
    }
    getTemplate(name){
        return this["template"][name];
    }
}