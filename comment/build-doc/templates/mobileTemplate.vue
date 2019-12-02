<template>
<cm-exhibition >
    <div slot="content">
        <cm-markdown :render="markdown"></cm-markdown>
    </div>
</cm-exhibition>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import markdown from "#{$mdPath}";

@Component({})
export default class extends Vue{
    markdown:string=markdown;
}
</script>