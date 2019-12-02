const webfont=require('webfont').default;
const fs=require('fs');
const path=require('path');
const host=process.cwd();
const join=_path=>path.join(host,_path);

webfont({
	files: join('font_img/*.svg'),
	fontName:"ztwFontIcons",
	formats:['woff'],
	templateClassName:'fa',
	template:'css',
	templateFontPath:'./',
	templateFontName:'customer'
})
.then(result=>{
	fs.writeFile(join('src/styles/webfont/customer.woff'),result.woff,(err,r)=>{
			if(err)return console.error(err);
			fs.readFile(join('src/styles/webfont/_font.css'),'utf8',(err,content)=>{
				content+='\n'+result.template;
				fs.writeFile(join('src/styles/webfont/font.css'),content,'utf8',(err)=>{
					err?console.log(err):console.log('success')
				
				})
			})

	})
}).catch(err=>{
	console.log(err)
})
