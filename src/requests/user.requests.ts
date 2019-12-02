import {xhr} from "@/config/http";
import {Subscribable,Observable} from "rxjs";

export const loginReq=(loginStr:string):Observable<any>=>
  xhr("post","user","login",{loginStr});

export const getUserInfo=():Observable<any>=>
  xhr("post","user","userInfo");