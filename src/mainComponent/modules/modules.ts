import {Vue} from "vue-property-decorator";
import ContainerFire from "./container-fire/containerfire.component.vue";
import NavlistFire from "./navlist-fire/navlistfire.component.vue";
import NavHeaderFire from "./navHeader-fire/navheaderfire.vue";
import BodyTransitionWrpperFire from "./body-transition/bodyTransitionWrapper.component.vue";
import SearchFire from "./search-fire/search-fire.vue";
import MenuFire from "./menu-fire/menu-fire.component.vue";
import SearchItemFire from "./search-item-fire/search-item-fire.vue";

export const FireContainerModule:any={
  install:function(vue:Vue){
    Vue.component("cmFire-header",NavHeaderFire);
    Vue.component("cmFire-navList",NavlistFire);
    Vue.component("cmFire-container",ContainerFire);
    Vue.component("cmFire-body-transition",BodyTransitionWrpperFire);
    Vue.component("cmFire-search",SearchFire);
    Vue.component("cmFire-menu",MenuFire);
    Vue.component("cmFire-searchItem",SearchItemFire);
  }
};

//export interface
export {NavListItem} from "./navlist-fire/data.interface";