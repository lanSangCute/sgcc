<template>
    <div>
       <el-table :data="data" stripe style="width: 100%" max-height="400px">
            <el-table-column v-for="item in thead" :key="item.id" :prop="item.prop" :label="item.label" :width="item.width" :align="item.align"> </el-table-column>
      </el-table>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';
import request from '../request';
import {AssetModel,TableColumnModel} from '../interface';

@Component({})
export default class extends Vue{
    data:Array<AssetModel> = request.assetTBody;
    thead:Array<TableColumnModel> = config.assetTHead;
}
</script>
<style lang="scss">

</style>