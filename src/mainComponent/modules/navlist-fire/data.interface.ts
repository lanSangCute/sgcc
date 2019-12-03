export interface NavListItem{
  label:string;
  icon?:string;
  path?:string;
  //primary index for open
  index?:number;
  children?:NavListItem[];

}