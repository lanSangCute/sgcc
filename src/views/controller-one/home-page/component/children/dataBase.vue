<template>
    <div>
        <bar-hart></bar-hart>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import barChart from  '../barChart';

@Component({
    components: {
      'bar-hart':barChart
    }
})
export default class extends Vue{
}
</script>
<style lang="scss">

</style>