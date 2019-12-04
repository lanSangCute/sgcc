
import {NavListItem} from "../mainComponent/index";

export {
  NavListItem
}

// export const navData:NavListItem[]= [
//   {path:"/controller/home-page",label:"首页",icon:"account"},
//   {label:"数据探索",icon:"explore",children:[
//     {path:"/controller/sample-page",label:"sample"},
//   ]},
//   {label:"数据建模",icon:'model',children:[
//     {path:"/controller/sample-page",label:"sample"},
//   ]},
//   {label:"产品管理",icon:'manage',children:[
//     {path:"/controller/samplage-page",label:"sample"},
//   ]}
// ];
export const navData:NavListItem[]= [
  {path:"/controller/home-page",label:"首页",icon:"account"},
  {path:"/controller/sample-page",label:"数据探索",icon:"explore",children:[]},
  {path:"/controller/sample2-page",label:"数据建模",icon:'model',children:[]},
  {path:"/controller/sample3-page",label:"产品管理",icon:'manage',children:[]}
];