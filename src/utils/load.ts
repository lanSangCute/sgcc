export const loadJS=(url_path:string,remove:boolean=true):Promise<boolean>=>{
  return new Promise((resolve,reject)=>{
    const script:HTMLScriptElement=document.createElement('script');
    const removeScript=():any=>document.body.removeChild(script);
    script.onload=()=>{
      resolve(true);
      remove&&removeScript();
    };
    script.onerror=()=>{
      reject(true);
      remove&&removeScript();
    };
    script.src=url_path;
    document.body.appendChild(script);
  })
};

export const UseJs=(jsAddress:string,handle?:Function)=>{
  let pathRun=()=>{};
  let isLoading:boolean=false;
  let loadEnd:boolean=false;
  let handleResult:any;
  return ():Promise<any>=>new Promise((resolve,reject)=>{
    if(loadEnd)return resolve(handleResult);
    if(isLoading){
      const oldRun=pathRun;
      pathRun=()=>{
        resolve(handleResult);
        oldRun();
      }
    }else{
      isLoading=true;
      loadJS(jsAddress,true)
          .then(()=>{
            isLoading=false;
            loadEnd=true;
            handleResult=handle&&handle();
            resolve(handleResult);
            pathRun();
          }).catch(reject)
    }
  })
};
export const random_int=(start:number,end:number):number=>start+Math.round(Math.random()*(end-start));
export const random_str=(count:number):string=>{
  const fnArr=[
    ()=>random_int(48,57),
    ()=>random_int(65,90),
    ()=>random_int(97,122)
  ];
  let result='';
  while(count--){
    result+=String.fromCharCode(
      fnArr[Math.floor(Math.random()*3)]()
    );
  }
  return result;
};

export const random_name=():string=>{
  const timestamp=new Date().getTime();
  return timestamp+random_str(8);
};

export const getSuffix=(filename:string):string=>{
  try {
    return (filename.match(/[^\.]\w+$/g) as any).toString()||"";
  }catch(e){
    return "";
  }
};