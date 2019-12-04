<template>
    <el-tabs v-model="activeName">
        <el-tab-pane v-for="item in tabObj" :key="item.activeName" :label="item.label" :name="item.activeName" >
            <rank-table :active="activeName" v-if="item.activeName === activeName"></rank-table>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts">
import {Component,Vue,Watch} from "vue-property-decorator";
import rankTable from './rankTable.vue';

@Component({
  components:{'rank-table':rankTable}
})
export default class extends Vue{
    activeName:string = 'hot';
    tabObj:Array<{label?:string;activeName?:string}> = [
        {label:'热点数据榜',activeName:'hot'},
        {label:'最新数据榜',activeName:'new'}
    ]
}
</script>
<style lang="scss">

</style>