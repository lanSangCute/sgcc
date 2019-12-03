<template>
    <div class="flex">
        <div v-for="item in data" :key="item" class="flex-1">
            <i class="fa" :class="[`fa-${item.icon}`]"></i>
            {{item.name}}{{item.value}}
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';

@Component({})
export default class extends Vue{
    data:Array<object> = config.analy;
}
</script>
<style lang="scss">

</style>