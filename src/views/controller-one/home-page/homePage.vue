<template src="./homePage.html">
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import model from './component/children/model.vue';
import analy from './component/children/analy.vue';
import dataBase from './component/children/dataBase.vue';
import asset from  './component/children/asset.vue';
import module from  './component/children/module.vue';
import unit from  './component/children/unit.vue';
import rank from  './component/children/rank.vue';
import unitSlider from  './component/children/unitSlider.vue';
import titles from './component/titles.vue';

@Component({
  components:{
    titles:titles,
    'model':model,
    'analy':analy,
    'data-base':dataBase,
    'asset':asset,
    'module':module,
    'unit':unit,
    'rank':rank,
    'unit-slider':unitSlider
  }
})
export default class extends Vue{

}
</script>
<style src="./homePage.scss" lang="scss">

</style>