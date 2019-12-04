<template>
    <div>
       <el-table :data="data" stripe style="width: 100%" max-height="300px">
            <el-table-column v-for="item in thead" :key="item.id" :prop="item.prop" :label="item.label" :width="item.width" :align="item.align"> 
                <template #default="data" v-if="item.prop === 'btnArray'">
                    <el-popover
                    placement="right"
                    width="650"
                    trigger="click">
                    <el-table :data="gridData">
                        <el-table-column v-for="item in gridThead" :key="item.id" :prop="item.prop" :label="item.label" :width="item.width" :align="item.align"></el-table-column>
                    </el-table>
                    <span class="color-blue" slot="reference">{{data.row.btnArray}}</span>
                    </el-popover>
                </template>
            </el-table-column>
      </el-table>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';
import request from '../request';
import {UUnitModel,GtidModel,TableColumnModel} from '../interface';

@Component({})
export default class extends Vue{
    data:Array<UUnitModel> = request.unitTBody;
    thead:Array<TableColumnModel> = config.unitTHead;
    gridData:Array<GtidModel> = request.gridTBody;
    gridThead:Array<TableColumnModel> = config.gridTHead; 
}
</script>
<style lang="scss">

</style>