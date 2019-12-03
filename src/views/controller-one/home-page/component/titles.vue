<template>
    <div>
        <div class="flex between-center">
            <p>{{title}}</p>
            <p>{{msg}}</p>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {Component,Vue,Prop} from "vue-property-decorator";

@Component({})
export default class extends Vue{
    @Prop() private title: string;
    @Prop() private msg: string;
}
</script>
<style lang="scss">

</style>