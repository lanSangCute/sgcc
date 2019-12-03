
import {NavListItem} from "../mainComponent/index";

export {
  NavListItem
}

export const navData:NavListItem[]= [
  {path:"/controller/home-page",label:"首页",icon:"account"},
  {label:"数据探索",icon:"explore",children:[
    {path:"/controller/sample-page",label:"sample"},
  ]},
  {label:"数据建模",icon:'model',children:[
    {path:"/controller/sample-page",label:"sample"},
  ]},
  {label:"产品管理",icon:'manage',children:[
    {path:"/controller/samplage-page",label:"sample"},
  ]}
];