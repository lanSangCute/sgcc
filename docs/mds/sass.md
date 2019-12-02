目录结构
---
####  sass 

 - src
   - styles
     - components
       - btn.scss       //按钮样式
       - card.scss      //card卡片样式
       - common.scss        
       - components.scss
       - dialog.scss
       - font.scss
       -searchInput.scss
   - basic-var.scss      //基础变量存放处
   - component-var.scss  //组件和框架样式替换  
   - my-var.scss  //框架样式替换  
   
代码演示   
---   
#### basic-var.scss

```
  //颜色
  $fire-nav-bg:#010207; //左边导航背景
  $fire-nav-color:#E0E0E0; //左边导航字体
  $light-line-color:#3B3B40;//浅色相关背景
  $greed-color:#0EC700;//绿色主题
  $font-color-green:#1fe010;// 字体颜色
  $deep-font-color:white;//可深背景字体色
  $bg-color-light:#BAFAB3;//淡绿色基准色
  $btn-back:#ddd;//返回按钮X的基准颜色
  
  
  
  //字体大小
  $font-1:14px;
  $font-2:15px;
  $font-3:16px;
  
  
  //字体图标样式
  $font-count-icon:42px; //汇总图标基准样式
  $font-x:38px; //返回按钮X的基准样式
  $font-icon:24px; //小图标的基准样式
  $font-tb-icon:20px; //表格内的图标基准样式
  $font-count-icon:42px; //表格内的图标基准样式
  
  
  //宽度
  $search-width:260px;//普通搜索框宽度
  
  
  //padding
  $p-0:0px;
  $p-5:5px;
  $p-10:10px;
  $p-15:15px;
  $p-20:20px;
  $p-25:25px;
  $p-30:30px;
  
  
  //margin
  $m-0:0px;
  $m-5:5px;
  $m-10:10px;
  $m-15:15px;
  $m-20:20px;
  $m-25:25px;
  $m-30:30px;

```
#### card.scss    

```



```  

      
#### btn.scss

```
    //el-table,编辑字体
    .text-button{
      color: $font-color-green;
      font-size: $font-1;
      line-height: $font-1;
      padding: $p-0 $p-5;
      cursor: pointer;
    }
    // 小图标的样式
    .icon-button{
      color: $font-color-green;
      font-size: $font-icon !important;
      line-height: $font-icon !important;
      padding: $p-0 $p-15;
      cursor: pointer;
    }
```  

#### component-var.scss

```
    //card
    $card-radius:$radius-base;
    $card-closable-title:(margin-bottom: Space(small),
    );
    
    
    $card-closable-title-close:(cursor: pointer,
        padding: Space(small));
    
    //searchInput
    $search-input-width: Width(large);
    $search-input-space: Space(small);
    $serch-input-lable:Width(mini);
    
    
    /**
    *
    *       element style 重构
    *
    **/
    
    //table文章居中
    .el-table th, .el-table td {
      text-align: center;
    }
    //弹窗的标题样式
    .el-dialog__title{
      font-weight: bold;
      font-size:$font-3;
    }
    
    //颜色
    $material-gray:rgba(0,0,0,0.54);
    
    //中英文切换字体颜色
    .langcolor{
      color:$greed-color !important;
    }
    //弹窗
    .el-dialog__headerbtn .el-dialog__close{
      font-size: 30px;
    }
    //分页选中的颜色
    .el-pager li.active{
      background: $bg-color-light !important;
    }
    .el-pagination{
      font-weight: normal !important;
    }
    
    //导航条：hover的颜色 ，浅色主题
    .ripple-wrapper-light:hover{
      background-color:rgba(204,251,201,.5) !important;
    }
    //导航条：hover的颜色 ，深色主题
    .ripple-wrapper-deep:hover{
      background-color:rgba(204,251,201,.5) !important;
    }
    .cmFire-header-avatar{
      background-color: $greed-color !important;
      i{
        color:$deep-font-color !important
      }
    }
    
    .cmFire-header-avatar{
      background-color: $greed-color !important;
      i{
        color:$deep-font-color !important
      }
    }
    
    //input禁用的鼠标样子
    .el-input.is-disabled .el-input__inner {
      cursor: text !important;
    }
```  


#### component-var.scss

```
   @import "basic-var";
    
    $color-primary:#1fe010;
    $color-secondary:#1fe010;
    $shadow-color:rgb(45, 25, 80);
    
    $my-color-font:rgba(0,0,0,0.75);
    
    
    $fire-nav-line-active-color:#0EC700;   //左侧导航 激活栏字体色
    $fire-nav-line-active-bg:mix($fire-nav-bg,white,80%);  //左侧导航 激活栏背景色
    
    
    $fire-header-bg:$light-line-color;  // 顶部背景色
    $fire-header-color:$greed-color; //顶部字体色
    
    
    
    
    
    .el-loading-mask {
            z-index: 1990 !important;
    }
    
    
    /**
    *
    *       element style 重构
    *
    **/
    $--color-primary:$color-primary;
    $--color-secondary:$color-secondary;
    $--color-info:$color-secondary;
    
    $--button-medium-border-radius:35px !default;
    
    $--card-border-color:white;
    
    $--button-default-border-color:transparent;
    $--button-primary-border-color:transparent;
    $--button-success-border-color:transparent;
    $--button-warning-border-color:transparent;
    $--button-danger-border-color:transparent;
    $--button-info-border-color:transparent;
    
    //butten 大小修改 small mini medium 三个样式
    $--button-mini-padding-horizontal:18px;
    $--button-small-padding-horizontal:24px;
    $--button-padding-horizontal:30px;
    $--button-medium-padding-horizontal:30px;
    
    $media-font-size:(
            small:14px,
            medium:14px,
            large:14px,
            x:14px
    );
    
    .el-carousel__arrow--left {
            left: 0px !important;
    }
    
    .el-carousel__arrow--right {
            right: 0px !important;
    }
    
    //中间内容的边距修改
    $fire-body-media-p:(
            small:(p:.5rem,w:920px),
            medium:(p:1rem,w:1080px),
            large:(p:1.2rem 0rem,w:1280px),
            x:(p:1.5rem 0.5rem,w:1400px)
    );

```  
