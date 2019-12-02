import {session_key} from "@/config/static";
import {loginReq,getUserInfo} from "@/requests/user.requests";
import {Subscribable,Observable} from "rxjs";
import {msg as publicMsg} from "@/config/config";

export default {
    namespaced:true,
    state:{
        sessionId:"",
        isLogin:false,
        account:"",
    },
    mutations:{
        /*
        * 设置ticket
        */
        setTicket(state:any,ticket:string){
          publicMsg.ticket=ticket;
        },
        /*
        * 处理登录成功
        */
        handleLogin(state:any,userInfo:any){
          //session赋值
          publicMsg.ticket=userInfo.sessionId;
          state.isLogin=true;
          Object.assign(state,userInfo);
        },

        /*
        * 处理登出
        */
        handleLogout(state:any){
          publicMsg.ticket="";
          delete localStorage[session_key];
        },
        /*
        *  储存登录信息
        * */
        setStoreSession(state:any):void{
          localStorage.setItem(session_key,state.sessionId);
        },
        //获取储存的登录session
        getStoreSession(state:any):string|null{
          return localStorage.getItem(session_key);
        },


    },
    actions:{
        /**ztw***
        * 校验登录全局路由守卫
        *
        **2019/10/10**/
        authEnterRoutes({commit,state,dispatch}:any,{to,from,next}:any){
          if(state.isLogin)return next(true);
          const sessionId=commit("getStoreSession");
          if(!sessionId)return next("/login");
          // 重新获取用户信息
          commit("setTicket",sessionId);
          dispatch("getUserInfo")
            .then(()=>next(true))
            .catch(()=>next("/login"))
        },
        getUserInfo():Promise<any>{
          return getUserInfo().toPromise().then((result:any)=>{

            return result;
          })
        },

        /*
        * 登录
        */
        login({commit,state}:any,loginStr:string):Promise<any>{
          return loginReq("loginStr").toPromise().then((result:any)=>{
            commit("handleLogin",result);
            return result;
          });
        },
        /*
        * 校验登录
        */
        checkLogin(){

        },
        /*
        * 登出
        */
        logout({commit,state}:any){
            
        }
    }
}