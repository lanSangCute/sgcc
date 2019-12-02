const getUrlParams=(url:string):any=>{
  const params:any={}
  try{
    let paramsStr=(url.match(/\?.*$/)as any).toString().replace(/#.*/,"").slice(1).split("&");
    for(let i of paramsStr){
      const [key,value]=i.split("=");
      params[key]=value;
    }
  }catch(e){
    return {};
  }
  return params;
}

const getParamsStr=(obj:any)=>{
  let str="";
  if (!obj||Object.keys(obj).length<1)return str;
  for(let i in obj){
    str+=`${i}=${obj[i]}&`
  }
  return str.slice(0,-1);
};
const setNewUrl=(obj:any)=>{

};
const pushParamsHistory=(params:any,replace:boolean=false)=>{
  const paramsStr=getParamsStr(params);
  history.pushState(null,"",`${location.origin}${location.pathname}?${paramsStr}`);
};

const clearParamsUrl=(params:any)=>{
  let paramsStr=getParamsStr(params);
  paramsStr=paramsStr?"?"+paramsStr:"";
  history.replaceState(null,"",`${location.origin}${location.pathname}${paramsStr}`)
};




export {
  clearParamsUrl,
  getUrlParams,
  getParamsStr,
  pushParamsHistory,
}