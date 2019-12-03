<template>
    <div>
       <el-table :data="data" stripe style="width: 100%" max-height="300px">
            <el-table-column v-for="item in thead" :key="item.id" :prop="item.prop" :label="item.label" :width="item.width" :align="item.align">
                <template #default="data" v-if="item.prop === 'star'">
                    <el-rate v-model="data.row.star" disabled text-color="#ff9900"> </el-rate>
                </template>
             </el-table-column>
      </el-table>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';
import request from '../request';

@Component({})
export default class extends Vue{
    data:Array<object> = request.moduleTBody;
    thead:Array<object> = config.moduleTHead;
}
</script>
<style lang="scss">

</style>