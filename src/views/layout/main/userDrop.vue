<template>
  <div class="cmFire-header-line">
    <el-tooltip content="前往git">
      <figure @click="navTo()" class="cmFire-header-avatar">
        <i class="fa fa-github"></i>
      </figure>
    </el-tooltip>
    <!-- <el-popover
            placement="bottom"
            width="250"
            ref="avatar"
            trigger="click"
    >

      <cm-line>line</cm-line>
      <cm-line>a</cm-line>
      <cm-line>exit</cm-line>
    </el-popover> -->
  </div>

</template>
<script lang="ts">

import {Vue,Component} from "vue-property-decorator";
import {gitAddress} from "../../../config/config";

@Component({
})
export default class extends Vue{
  constructor(){
    super();
  }
  click(){
    console.log("click")
  }
  navTo(){
    window.open(gitAddress);
  }
}
</script>