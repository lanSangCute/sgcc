<template>
  <div class="exhibition-wrapper" :class="{showMobile:showMobile}">
    <main class="exhibition-content">
      <slot name="content"></slot>
    </main>
    <div class="exhibition-mobile">
      <main class="mobile">
        <img class="exhibition-load" src="/image/loading.svg" />
        <iframe 
          v-if="showIframe"
          :src="iframePath"
        ></iframe>
      </main>
    </div>
    <div class="exhibition-toggle" @click="toggle">
      T
    </div>
  </div>
</template>

<script lang="ts">
import {Vue,Component,Prop} from "vue-property-decorator";

@Component({})
export default class extends Vue{
    showIframe:boolean=false;
    iframePath:string="";
    showMobile:boolean=!!(window as any).showMobile;
    @Prop({})path:string;
    mounted(){
        this.iframePath=this.$route.meta.iframe;
        setTimeout(()=>this.showIframe=true,500);
    }
    toggle(){
        this.showMobile=(window as any).showMobile=!this.showMobile;
    }
}
</script>