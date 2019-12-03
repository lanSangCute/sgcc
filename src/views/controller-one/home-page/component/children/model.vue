<template>
    <div>
        <el-steps :active="2" align-center>
            <el-step v-for="item in data" :key="item.name" :title="item.name"></el-step>
        </el-steps>
        <!-- <template v-for="item in data">
            {{item.name}}
        </template> -->
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';

@Component({})
export default class extends Vue{
    data:Array<object> = config.model;
}
</script>
<style lang="scss">

</style>