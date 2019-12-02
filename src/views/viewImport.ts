
export default (viewpath:string):()=>Promise<any>=>()=>{
    return import(`@/views/${viewpath}.vue`).then((res:any)=>{
      /*
      *  handle loading
      */
      return res;
    })
  }
