
import {NavListItem} from "../ztwComponents/index";

export {
  NavListItem
}

export const navData:NavListItem[]= [
  {path:"/controller/home-page",label:"首页",icon:"account"},
  {label:"数据探索",icon:"data",children:[
    {path:"/controller/sample-page",label:"sample"},
  ]},
  {label:"数据建模",children:[
    {path:"/controller/sample-page",label:"sample"},
  ]},
  {label:"产品管理",children:[
    {path:"/controller/samplage-page",label:"sample"},
  ]}
];