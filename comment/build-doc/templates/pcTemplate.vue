<template>

<div class="exhibtion-pc">
    <cm-markdown :render="markdown"></cm-markdown>
</div>

</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import markdown from "#{$mdPath}";

@Component({})
export default class extends Vue{
    markdown:string=markdown;
}
</script>