<template>
  <aside class="cmFire-container-body">
    <transition name="animate-abs-fade">
      <slot></slot>
    </transition>
  </aside>
</template>
<script lang="ts">
import {Component,Vue,Prop,Watch} from "vue-property-decorator";

 

@Component({})
export default class BodyTransitionWrapper extends Vue{
}

</script>