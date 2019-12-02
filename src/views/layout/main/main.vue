<template src="./main.html">
</template>

<script lang="ts">
import {navData,NavListItem} from "../../navData";
import {Component,Vue} from "vue-property-decorator";
import UserDrop from "./userDrop.vue";

@Component({
  components:{"self-user-drop":UserDrop},
})
export default class extends Vue{
  public navData:NavListItem[]=navData;
  created(){
    
  }
}
</script>

<style scoped src="./main.scss" lang="scss"></style>