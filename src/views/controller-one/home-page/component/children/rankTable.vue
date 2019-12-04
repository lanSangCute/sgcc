<template>
<div>
    <el-radio-group v-model="tabPosition" style="min-width:278px;">
        <el-radio-button :label="item.label" v-for="item in rankGroup" :key="item.label">{{item.name}}</el-radio-button>
    </el-radio-group>
    <el-table :data="data" stripe style="width: 100%" max-height="650px">
        <el-table-column v-for="item in thead" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width" :align="item.align">
            <template #default="data" v-if="item.prop === 'rank'">
                <div v-rank="data.row.rank" class="fa-fw">{{data.row.rank}}</div>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script lang="ts">
import {Component,Vue,Prop,Watch} from "vue-property-decorator";
import config from '../config';
import request from '../request';
import {RankModel,TableColumnModel} from '../interface';

@Component({
    directives:{
        rank:{
            bind:(el,binding)=>{
                let val = binding&&binding.value,
                    color = parseInt(val) > 3?'#ff9900':'red',
                    icon = parseInt(val) > 3?'yeRank':'redRank';
                el.style.color=color;
                el.classList.add(icon)
            }
        }
    }
})
export default class extends Vue{
    data:Array<RankModel> = request.rankTBody;
    thead:Array<TableColumnModel> = config.rankTHead;
    rankGroup:Array<{label?:string;name?:string}> = config.rankGroup;
    tabPosition:string = 'data';
    @Prop() private active: string;
}
</script>
<style lang="scss" scoped>
</style>