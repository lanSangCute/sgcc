<template>
    <iframe onload="this.height=document.documentElement.clientHeight" :src="$route.query.src" id="iframepage" frameborder="0" width="100%!important"></iframe>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";

@Component({})
export default class extends Vue{
}
</script>
<style>

</style>