<template src="./btn.html">
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import btnMarkdown from "./btn.md";

@Component({})
export default class extends Vue{
    btnMarkdown:string=btnMarkdown;
}
</script>