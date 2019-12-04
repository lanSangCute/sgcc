interface ModuleModel {
  name?:string;
  time?:string;
  star?:number;
  btnArray?:string;
  img?:string;
}

interface UnitSliderModel{
  name?:string;
  percent?:number;
}

interface UUnitModel{
  name?:string;
  percent?:string;
  btnArray?:string;
}

interface GtidModel{
  title?:string;
  ralation?:string;
  desc?:string;
  item?:string;
  total?:string;
}

interface RankModel{
  rank?:number;
  name?:string;
  type?:string;
}

interface AssetModel{
  id?:string;
  source?:string;
  tableNum?:number;
  dataNum?:number;
  storeNum?:string;
}
interface TableColumnModel{
  prop?:string;
  label?:string;
  width?:string;
  align?:string;
}
interface AnalyModel{
  icon?:string;
  name?:string;
  value?:string;
}
interface Model{
  id?:number;
  name?:string;
  status?:string;
  url?:string;
}

export {
  ModuleModel,
  UnitSliderModel,
  UUnitModel,
  GtidModel,
  RankModel,
  AssetModel,
  TableColumnModel,
  AnalyModel,
  Model
}