<template src="./login.html"></template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import {mapState,mapActions} from "vuex";
import {projectName,providerName} from "@/config/config";

const vueCanvasNest:any=require("vue-canvas-nest").default;


@Component({
    components:{"vue-canvas-nest":vueCanvasNest},
    computed:{
        ...mapState({
            "user":(state:any)=>state.user,
        })
    },
    methods:{
        ...mapActions("user",[
            "login"
        ])
    }
})
export default class extends Vue{
    public show:boolean=false;
    public account:string="";
    public password:string="";
    public saveAccount:boolean=false;
    public nestConfig:any={
        color:"25,25,25"
    };
    public projectName:string=projectName;
    public providerName:string=providerName;
    private self:any;
    constructor(){
        super();
        this.self=this;
    }

    public pageLogin():void{
      this.self.login("login encrypt string");
    }
}


</script>

<style scoped src="./login.scss" lang="scss"></style>