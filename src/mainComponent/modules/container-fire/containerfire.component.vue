<template>
  <main class="cmFire-container" :class="{navHide:navIsHidden}">
    <cmFire-navList
      :navData="navData"
      :useSearch="useSearch"
      :autoNavTop="autoNavTop"
      :themeDeep="themeDeep"
      @routerChange="routerChange"
    >
      <slot name="nav-brand" slot="brand"></slot>
    </cmFire-navList>
    <article @scroll="onscroll" ref="article">
      <cmFire-header 
        v-model="navIsHidden"
        :scrollToggle="scrollHeaderToggle"
        :scrollOrder="scrollOrderPerformance">
        <template slot="aside">
          <slot name="header-aside"></slot>
        </template>
        <template slot="left">
          <slot name="header-aside"></slot>
        </template>
        <template slot="right">
          <slot name="header-right"></slot>
        </template>

        <template slot="toggle-left">
          <slot name="header-toggle-left"></slot>
        </template>
        <template slot="toggle-right">
          <slot name="header-toggle-right"></slot>
        </template>
      </cmFire-header>
      <nav class="cmFire-header-base"></nav>
      <main class="cmFire-container-body">
        <slot name="body"></slot>
      </main>
      <!-- <div class="cmFire-container-holder"></div> -->
      <footer>
        <slot name="footer"></slot>
      </footer>
      <button v-show="useAutoTop&&showAutoTop"></button>
    </article>
    <div @click="navOpen()" class="cmFire-nav-shade"></div>
  </main>
</template>
<script lang="ts">
import {Component,Vue,Prop,Watch} from "vue-property-decorator";
import {NavListItem} from "../navlist-fire/data.interface";
import {Subject,Observable,merge,from, Subscription} from "rxjs";
import {throttleTime,debounceTime} from "rxjs/operators";
import {orderScreenWidth,screenSmallSub} from "../lib-fire/method";

@Component
export default class extends Vue{
  @Prop({})navData:NavListItem[];
  @Prop({default:true})autoTop:boolean;
  @Prop({})useSearch:boolean;
  //页面跳转时自动滚动至顶部
  @Prop({})autoNavTop:boolean;
  //header栏 滚动时，大小切换
  @Prop({})scrollHeaderToggle:boolean;
  @Prop({})themeDeep:boolean;
  public useAutoTop:boolean=false;
  public showAutoTop:boolean=false;
  private self:any;
  constructor(){
    super();
    this.self=this;
  }
  //nav 是否隐蔽
  public navIsHidden:boolean=false;
  //正常滚动
  scrollOrder:Observable<number>;
  //截流防抖滚动
  scrollOrderPerformance:Observable<number>;
  scrollSub:Subject<number>=new Subject<number>();
  screenWidthOrder:Subscription;

  created(){
    this.scrollSub=new Subject();
    const startOrder:Observable<number>=from(Promise.resolve(this.self.$refs.article&&this.self.$refs.article.scrollTop));

    this.scrollOrder=merge(
      startOrder,
      this.scrollSub
    );

    this.scrollOrderPerformance=merge(
      startOrder,
      this.scrollOrder.pipe(throttleTime(100)),
      this.scrollOrder.pipe(debounceTime(200))
    )
  }
  //js 获取到的是否 处于small状态
  screenWidthHide:boolean;
  mounted(){
    this.screenWidthOrder=screenSmallSub().subscribe((hid:boolean)=>{
      this.screenWidthHide=hid;
    })
  }
  onscroll(e:any){
    const article:HTMLElement=this.self.$refs.article;
    this.scrollSub.next(article.scrollTop);
  }
  navOpen(){
    this.navIsHidden=false;
  }
  navToggle(e:any){
    this.navIsHidden=!this.navIsHidden;
  }

  @Watch("autoTop",{immediate:true})
  watchAutoTop(use:boolean){
    
  }
  routerChange(v:string){
    if(this.autoNavTop){
      setTimeout(()=>{
        const article:HTMLElement=(this.$refs as any).article;
        article&&article.scrollTo(0,0);
        //处于small状态下，关闭nav侧边栏
        if(this.screenWidthHide)this.navIsHidden=false;
      })
    }
  }
}
</script>