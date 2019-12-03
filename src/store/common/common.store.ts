import {Module, ActionContext} from "vuex";
import {NavListItem,getFirstNav,NavListResult} from "../../mainComponent/index";
import {navData} from "../../views/navData";

export interface CommonState{
    navAll:NavAll
}
export interface NavAll{
    [key:string]:NavListItem[];
}


export type NavType="docs"|"controllerOne";
export const AuthNavCompletedTpye="authNavCompletedAction";


export const selectFirstNav=(state:any,navType:NavType):NavListItem[]=>{
    return state["common"]["navAll"][navType];
}

const commonStore:Module<CommonState,any>={
    namespaced:true,
    state:{
        navAll:{
            "docs":[]
        }
    },
    mutations:{
        commitNavData(state:CommonState,{navData,navType}:{
            navData:NavListItem[],
            navType:NavType
        }){
            state.navAll[navType]=navData;
        }
    },
    getters:{
     
    },
    actions:{
        authNav(
            {state,commit,getters,dispatch},
            {from,to,next,navType}:{from:any,to:any,next:any,navType:NavType}
        ):void{
            let data:NavListItem[]=[];
            const existsNavData=state["navAll"][navType];
            
            if(existsNavData&&existsNavData.length){
                dispatch("commitNavCompleted",true);
            }else{
                //switch navData:
                if(navType==="docs")data=navData;    
                commit("commitNavData",{navData:data,navType});
                dispatch("commitNavCompleted",true);
            }
        },
        commitNavCompleted(params,pass:boolean){},

        authNavFailure(params,next:any){
            
        }
    }
}

export default commonStore;