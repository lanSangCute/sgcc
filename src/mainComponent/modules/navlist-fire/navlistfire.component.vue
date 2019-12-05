<template>
  <nav class="cmFire-nav">
    <div class="brand" v-if="$slots&&$slots.brand">
      <slot name="brand"></slot>
    </div>
    <div class="search" v-if="useSearch">
        
      <el-popover
        placement="bottom"
        width="250"
        v-model="searchPopoverVisible"
        trigger="manual"
      >
        <cmFire-search
          slot="reference"
          :placeholder="'search'"
          @fireInput="searchValueChange"
          v-model="searchValue">
          <i slot="prefix" class="fa fa-search"></i>
        </cmFire-search>
        <div style="max-height:550px;overflow-y:auto">
          <cmFire-searchItem
            @click="navSearch(i)"
            v-cm-ripple="{size:'md'}"
            :data="i"
            v-for="(i,index) in searchResultList"
            :key="index"
          />
        </div>
        <div class="cm-line border cm-text-des" v-if="!searchResultList||!searchResultList.length">
          empty...
        </div>
      </el-popover>
    </div>
    <aside class="content">
      <div
        class="cmFire-nav-primary"
        v-for="i in data"
        :key="i.index">
        <div 
          :class="{
            active:i.path&&i.path===activePath,
            open:openPrimaryIndex==i.index
          }"
          v-cm-ripple="{size:'lg',deep:themeDeep}" 
          class="cmFire-nav-primary-li"
          @click="clickPrimary(i)"
        >
          <label :class="{icon:!!i.icon}">
            <i v-if="i.icon" :class="'fa fa-'+i.icon"></i>
            {{i.label}}</label>
          <span v-if="i.children&&i.children.length">
            <i class="fa fa-right arrow"></i> 
          </span>
        </div>
        <cm-height-transition>
          <div class="cmFire-nav-primary-collapse" v-if="i.children&&i.children.length&&openPrimaryIndex==i.index">
            <div
              @click="clickSecondary(j)"
              :class="{
                active:j.path&&j.path===activePath
              }"
              v-cm-ripple="{size:'lg',deep:themeDeep}"
              class="cmFire-nav-secondary-li"
              v-for="(j,jIndex) in i.children"
              :key="jIndex"
            >
              {{j.label}}
            </div>
          </div>
        </cm-height-transition>
      </div>
    </aside>
  </nav>
</template>
<script lang="ts">
import {Component,Vue,Prop,Watch} from "vue-property-decorator";
import {NavListItem} from "./data.interface";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {SearchItemData} from "../search-item-fire/search-item.interface";

const SEARCH_LIMIT=10;

@Component({})
export default class extends Vue{
    public searchValue:string="";
    public searchResultList:SearchItemData[]=[];
    //list data
    public data:NavListItem[]=[];
    // current path;
    public activePath:string="";
    @Prop({default:true})useSearch:boolean;
    @Prop({})navData:NavListItem[];
    @Prop({})autoNavTop:boolean;
    @Watch("navData",{immediate:true})
    watchNavData(value:NavListItem[]){
      if(!value||!value.length)return;
      this.handleData(value);
      this.data=value;
    }
    constructor(){
        super();
    }
    private isPristine:boolean=true;
    @Watch("$route.path",{immediate:true})
    watchPath(value:string){
      // if(this.isPristine){
      //   this.isPristine=false;
      //   this.activePath=value;
      // }
      this.activePath=value;
      this.autoOpenPrimary(value,this.data);
    }

    autoOpenPrimary(path:string,data:NavListItem[]):void{
 
      if(!data||!data.length)return;
      let findItem:boolean=false;
    
      for(let i of data){
        if(i.children){
          for(let j of i.children){
            if(j.path===this.activePath){
              findItem=true;
              break;
            }
          }
          if(findItem){
            this.openPrimaryIndex=Number(i.index);
            break;
          }
        }
      }

    }


    @Prop({default:false})themeDeep:boolean;
    //collapse primary
    openPrimaryIndex:number=0;

    handleData(data:any){
        data.forEach((primaryRow:any,index:number)=>{
            if(primaryRow.children&&primaryRow.children.length)primaryRow.index=index+1;
        })
    }
    setOpenSecondary(i:NavListItem){
        if(!i.index)return;
        if(this.openPrimaryIndex==i.index){
            this.openPrimaryIndex=0;
        }else{
            this.openPrimaryIndex=i.index;
        }
    }
    routerNav(path:string){
      //pre handle ;
      if(path===this.activePath)return;
      this.$router.push(path);
      this.activePath=path;
      this.$emit("routerChange",path);
    }
    clickPrimary(i:NavListItem){
        this.setOpenSecondary(i);
        // if(i.path)this.routerNav(i.path);
        if(i.path) i.path.indexOf('http')>-1?location.href=i.path:this.routerNav(i.path);
    }
    clickSecondary(i:NavListItem){
      if(i.path)this.routerNav(i.path);
    }
    mounted(){
      this.registerSearchHanlde();
    }

    /*
    * watch router
    */
    // @Watch("$router.")

    //搜索框弹层
    public searchPopoverVisible:boolean=false;
    private SearchSub:Subject<string>=new Subject<string>();
    searchValueChange(e:string){
      this.SearchSub.next(e)
    }
    registerSearchHanlde(){
      this.SearchSub
        .pipe(
          debounceTime(300)
        )
        .subscribe((searchValue:string)=>{
          this.searchPopoverVisible=!!searchValue;
          if(searchValue){
            this.searchRegexpNav(searchValue,this.navData,this.searchResultList=[]);
          }
          
      })
    }
    navSearch(i:SearchItemData){
      
      if(i.label&&this.$route.path.lastIndexOf(i.label)<0){
        this.routerNav(i.label);
      }
      this.searchValue="";
      this.searchPopoverVisible=false;
    }
    searchRegexpNav(name:string,navData:NavListItem[],resultList:SearchItemData[]=[]){
      if(navData&&navData.length){
        for(let navItem of navData){
          if(resultList.length>=SEARCH_LIMIT)break;
          
          const {path,label,children}=navItem;
          let findIndex;
          let appendList:boolean=false;
          const searchItem:SearchItemData={
            content:label
          };
          if(path){
            findIndex=path.search(name);
            searchItem["label"]=path;
            if(findIndex>=0){
              searchItem.labelStart=findIndex;
              searchItem.labelEnd=findIndex+name.length;
              appendList=true;
            }
            if(label){
              findIndex=label.search(name);
              if(findIndex>=0){
                searchItem.contentStart=findIndex;
                searchItem.contentEnd=name.length;
                appendList=true;
              }
            }          
            if(appendList)resultList.push(searchItem);
          }
          if(children&&children.length)this.searchRegexpNav(name,children,resultList);
        }
      }
    }

}
</script>