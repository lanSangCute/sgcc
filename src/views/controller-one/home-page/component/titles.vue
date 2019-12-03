<template>
    <div>
        <p>{{title}}</p>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {Component,Vue,Prop} from "vue-property-decorator";

@Component({})
export default class extends Vue{
    @Prop() private title: string;
}
</script>
<style lang="scss">

</style>