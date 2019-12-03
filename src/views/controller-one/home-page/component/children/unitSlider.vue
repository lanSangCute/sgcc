<template>
    <div>
        <div v-for="item in data" :key="item.name">
            <el-progress :text-inside="true"  :stroke-width="18"  :percentage="item.percent" 
            status="warning" :show-text="true" ></el-progress>
            {{item.name}}
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';
import request from '../request';

@Component({})
export default class extends Vue{
    data:Array<object> = request.unitSlider;
}
</script>
<style lang="scss">

</style>