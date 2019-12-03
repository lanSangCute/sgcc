<template>
        <div class="flex center" style="padding:0 60px;">
            <div v-for="item in data" :key="item.name" class="flex-1 center fa-fw" >
                <div v-models="item.status"><p class="font">{{item.name}}</p></div>
                <i class="fa fa-arrowRight color-primary font-60"></i>
            </div>
        </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';

@Component({
    directives:{
        models:{
            bind:(el,binding)=>{
                let val = binding.value;
                el.classList.add(val!=='1'?'bgNormal':'bgActive')
            }
        }
    }
})
export default class extends Vue{
    data:Array<object> = config.model;
}
</script>
<style lang="scss" scoped>
.font{
    margin: 0 auto;
}
.flex-1:last-child .fa{
opacity: 0;
}

</style>