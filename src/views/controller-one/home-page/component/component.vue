<template>
    <div>
        <p>场景导向</p>
        
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from './config';

@Component({})
export default class extends Vue{
    data:Array<object> = config.model;
}
</script>
<style lang="scss">

</style>