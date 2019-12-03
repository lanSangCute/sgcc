<template>
  <header
    class="cmFire-header-sticky"
    :class="{
      scrollOver:isScrollOver,
      scrollToggle:isScrollToggle
    }"
  >

    <main class="cmFire-header-main">
      <transition-group name="animate-fade">
        <aside
          :key="0"
          class="cmFire-header-aside _inside tmp-header-aside"
          v-if="!fireToggleValue"
        >
          <slot name="aside"></slot>
        </aside>

        <aside
          :key="1"
          class="cmFire-header-aside _left"
          v-if="!isScrollToggle">
          <div
            @click="navToggle()"
            class="cmFire-header-side-btn center-inline"
            v-cm-ripple="{deep:true}">
            <i class="fa fa-menu"></i>
          </div>
          <span :style="{visibility:!fireToggleValue?'hidden':'visible'}" class="tmp-header-left">
            <slot name="left"></slot>
          </span>
        </aside>
        <aside
          :key="2"
          class="cmFire-header-aside _right"
          v-if="!isScrollToggle">
          <slot name="right"></slot>
          <slot name="avatar"></slot>
        </aside>


        <aside
          :key="3"
          class="cmFire-header-aside _left _toggle"
          v-if="isScrollToggle">
          <div
            @click="navToggle()"
            class="cmFire-header-side-toggle-btn"
            v-cm-ripple="{deep:true}">
            <!-- 1 -->
            <i class="fa fa-menu"></i>
          </div>
          <slot name="toggle-left"></slot>
        </aside>
        <aside
          :key="4"
          class="cmFire-header-aside _right _toggle "
          v-if="isScrollToggle">
          <slot name="toggle-right"></slot>
        </aside>
      </transition-group>
    </main>
  </header>
</template>
<script lang="ts">
import {Vue,Component,Prop,Emit, Model, Watch} from "vue-property-decorator";
import {Observable} from "rxjs";
import {debounceTime,throttleTime} from "rxjs/operators";
import {HeaderAutoToggleLine as overLine} from "../lib-fire/config";


@Component({
  computed:{
    "isScrollToggle":function(){
      return (this as any).scrollToggle&&(this as any).isScrollOver;
    }
  }
})
export default class extends Vue{
  public isScrollOver:boolean=false;
  @Model(
    "fireToggleInput",{}
  )fireToggleValue:boolean;

  @Prop({default:true})scrollToggle:boolean;
  @Prop({})scrollOrder:Observable<number>;

  // @Prop()navHide:boolean;
  navToggle(){
    this.$emit("fireToggleInput",!this.fireToggleValue);
  }

  mounted(){
    this.scrollOrder.subscribe(this.handleScroll);
  }
  handleScroll(scrollTop:number=0){

    this.isScrollOver=scrollTop>=overLine;
  }

}
</script>