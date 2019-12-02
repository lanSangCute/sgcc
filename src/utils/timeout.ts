
export class CanClearTimeout{
  timestamp:number;
  constructor(timestamp:number){
    this.timestamp=timestamp;
  }
  timeout:any;
  run(fn:Function){
    this.timeout=setTimeout(()=>{
        this.timeout=null;
        fn();
    },this.timestamp)
  }
  clear(){
    if(this.timeout){
      clearTimeout(this.timeout);
      this.timeout=null;
    }
  }
}