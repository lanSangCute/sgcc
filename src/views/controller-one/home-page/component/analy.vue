<template>
    <div>
        <p>统计情况</p>
        <template v-for="item in data">
            {{item.name}}{{item.value}}
        </template>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from './config';

@Component({})
export default class extends Vue{
    data:Array<object> = config.analy;
}
</script>
<style lang="scss">

</style>