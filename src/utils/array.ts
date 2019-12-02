(Array.prototype as any).findLastIndex=function(run:Function):any{
  for(let i=this.length-1;i>=0;i--){
    if(run(this[i]))return i;
  }
}