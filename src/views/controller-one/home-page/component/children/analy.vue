<template>
    <div class="flex">
        <div v-for="item in data" :key="item.name" class="line flex-1">
            <div class="flex center">
                <div> <i class="fa font-30" :class="[`fa-${item.icon}`]"></i>  </div>
                <div class="ml-15">
                    <p>{{item.name}}</p>
                    <p>{{item.value}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import request from '../request';
import {AnalyModel} from '../interface';

@Component({})
export default class extends Vue{
    data:Array<AnalyModel> = request.analy;
}
</script>
<style lang="scss" scoped>
 .line{
    position: relative;
    &:after{
        width: 1px;
        height: 100%;
        color:#ccc;
        content:'';
        background-color: #ccc;
        position: absolute;
        right: 0;
        top: 0;
    }
    &:last-child:after{
        width: 0;
    }
}
</style>