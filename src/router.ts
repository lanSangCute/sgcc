import Vue from 'vue';
import Router from 'vue-router';
import Part1Module from "./views/part1Module/part1.module";
import MainLayout from "./views/layout/main/main.vue";
import controllerOneRoutes from "./views/controller-one/controllerOne.module";

import store from "./store";
import {allRouteEnter} from "@/config/config";
import Import from "./views/viewImport";
import { getFirstNav, NavListItem, NavListResult } from './ztwComponents';
import { selectFirstNav } from './store/common/common.store';


Vue.use(Router);
export default new Router({
  mode:"history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:"",redirect:"/docs/"
    },

    {
      path:"/login",
      component:Import("common/login/login")
    },
    {
      path:"/main",
      component:MainLayout,
      ...allRouteEnter?{}:{
        beforeEnter:(to,from,next)=>store.dispatch("user/authEnterRoutes",{to,from,next})
      },
      children:[
        ...Part1Module,
      ]
    },
    {
      path:"/controller",
      component:MainLayout,
      beforeEnter:(to,from,next:any)=>{
        console.log(22)
        const unSub=store.subscribeAction(({type,payload})=>{
          if(type==="common/commitNavCompleted"){
            unSub();
            if(!payload)return store.dispatch("common/authNavFailure",next);
            next(true);
          }
        })
        store.dispatch("common/authNav",{to,from,next,navType:"controllerOne"});
      },
      children:[
        ...controllerOneRoutes,
        
        //handle not found
        {path:"*",beforeEnter:(to,from,next:any)=>{
          const navItem:NavListResult=getFirstNav(selectFirstNav(store.state,"controllerOne"))
          navItem?next(navItem.path):store.dispatch("common/authNavFailure",next);
        }}
      ]
    },
    {
      path:"*",
      component:Import("common/notfound/notfound")
    }
  ],
});
