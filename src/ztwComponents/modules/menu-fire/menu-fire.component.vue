<template>
  <div>
    menu
    <slot></slot>
  </div>
</template>
<script lang="tsx">
import {Component,Vue as vue,Prop,Watch,Model} from "vue-property-decorator";
import Vue from "vue";



@Component({})
export default class MenuFireComponent extends vue{
    constructor(){
        super();
       
    }

    wrapper:HTMLElement|any=null;
    created(){
        @Component({
            render(h){
            return (
                <div>
                    {this.$slots.default}
                </div>
            )}
        })
        class MenuComponent extends vue{
            constructor(){
                super();  
            }
            open(){
                
            }
        }
    }
    mounted(){
        this.open();
    }
    beforeDestroy(){
        // document.body.removeChild(this.wrapper);
        // this.wrapper=null;
    }

    createWrapper(){

    
    }

    open(){
        if(!this.wrapper){
            this.wrapper=document.createElement("div");
            document.body.appendChild(this.wrapper);
            this.createWrapper();
        }
    }
}
</script>
