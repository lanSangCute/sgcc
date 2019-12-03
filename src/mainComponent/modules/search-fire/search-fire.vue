<template>
  <div class="cmFire-search">
    <div class="_wrapper">
      <span class="_place-prefix">
        <slot name="prefix"></slot>
      </span>
      <span class="_input-wrapper">
        <input
          class="_input" 
          v-bind="this.$attrs"
          v-on="this.$listeners"
          @input="input"
          v-model="value"
        />
      </span>
      <span
        @click="close()"
        class="_place-close"
        v-if="value">
        <i class="fa fa-close"></i>
      </span>
      <span class="_place-suffix">
        <slot name="suffix"></slot>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import {Component,Vue,Prop,Watch,Model} from "vue-property-decorator";

@Component({})
export default class SearchFireComponent extends Vue{
    public value:string="";
    @Model(
        "fireInput",
        {})
    fireValue:string;

    @Watch("fireValue",{immediate:true})
    watchFireValue(val:string){
        this.value=val;
    }
    input(v:InputEvent){
       const target:any=v.target;
       this.$emit("fireInput",target.value);
    }
    close(){
        this.$emit("fireInput",this.value="");
    }
}
</script>