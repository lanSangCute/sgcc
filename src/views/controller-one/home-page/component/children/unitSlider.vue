<template>
    <div>
        <div v-for="item in data" :key="item.name" class="mb-15">
            <el-progress 
            :text-inside="true"  :stroke-width="18" :percentage="item.percent" 
            status="warning" :show-text="true" ></el-progress>
            {{item.name}}
        </div>
        <div class="line flex mt-30">
            <span v-for="item in unitPercent" :key="item" class="flex-1">{{item}}</span>
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
    unitPercent:Array<string> = config.unitPercent;
}
</script>
<style lang="scss" scoped>
    .line{
        position: relative;
        &:before{
            width: 100%;
            height: 1px;
            color:#ccc;
            content:'';
            background-color: #ccc;
            position: absolute;
            top: -10px;
        }
    }
</style>