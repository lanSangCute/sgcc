<template>
<div>
    <el-radio-group v-model="tabPosition">
        <el-radio-button :label="item.label" v-for="item in rankGroup" :key="item.label">{{item.name}}</el-radio-button>
    </el-radio-group>
    <el-table :data="data" stripe style="width: 100%">
        <el-table-column v-for="item in thead" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width" :align="item.align">
            <template #default="data" v-if="item.prop === 'rank'">
                <!-- <div v-rank="data.row.rank" > -->
                    <i v-rank="data.row.rank" class="fa">{{data.row.rank}}</i>
                    <!-- {{data.row.rank}}</div> -->
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script lang="ts">
import {Component,Vue,Prop,Watch} from "vue-property-decorator";
import config from '../config';
import request from '../request';

@Component({
    directives:{
        rank:{
            bind:(el,binding)=>{
                console.log(binding.value);
                let val = binding&&binding.value;
                let color = 'red',icon = 'fa-redRank';
                if(parseInt(val) > 3){
                    color = '#ff9900';
                    icon = 'fa-yeRank';
                }
                el.style.color=color;
                el.classList.add(icon)
            }
        }
    }
})
export default class extends Vue{
    data:Array<object> = request.rankTBody;
    thead:Array<object> = config.rankTHead;
    rankGroup:Array<object> = config.rankGroup;
    tabPosition:string = 'data';
    @Prop() private active: string;
    @Watch("active",{immediate:true})
    watchActive(value:string){
      console.log(value);
    }
}
</script>
<style lang="scss">

</style>