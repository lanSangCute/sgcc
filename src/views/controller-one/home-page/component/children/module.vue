<template>
    <div>
        <el-table :data="data" stripe style="width: 98%" max-height="300px">
            <el-table-column v-for="item in thead" :key="item.name" :prop="item.prop" :label="item.label" :width="item.width" :align="item.align">
                <template #default="data">
                    <span v-if="item.prop === 'name'">{{data.row.name}}{{item.img}}</span>
                    <span v-if="item.prop === 'time'">{{data.row.time}}</span>
                    <el-rate v-if="item.prop === 'star'" v-model="data.row.star" disabled text-color="#ff9900"> </el-rate>
                    <div v-if="item.prop === 'btnArray'" class="color-blue parent" >
                        <el-image
                        v-click
                        class="el-img"
                        :src="data.row.img" 
                        :preview-src-list="srcList">{{data.row.btnArray}}
                    </el-image>
                    {{data.row.btnArray}}</div>
                </template>
             </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import config from '../config';
import request from '../request';

@Component({
    directives:{
        click:{
            bind:(el,binding)=>{
                el.addEventListener('click',function(e){
                    el.classList.add('op-1')
                    // el.style.opacity = 1;
                    let closeTag = document.getElementsByClassName('el-icon-circle-close'),imgTag = document.getElementsByClassName('el-img');
                    for (let i = 0; i < closeTag.length; i++) {
                        closeTag[i].addEventListener('click',function(e){
                            // imgTag[i]['style'].opacity = 0;
                            imgTag[i].classList.add('op-0')
                            el.classList.add('op-0')
                            el.classList.remove('op-1');
                            e.stopPropagation();
                        })
                    }
                })
            }
        }
    }
})
export default class extends Vue{
    data:Array<object> = request.moduleTBody;
    thead:Array<object> = config.moduleTHead;
    srcList:any = [];
    mounted() {
        const that = this;
        that.data.map(item=>{
           that.srcList.push(item.img);
        })
        console.log(that.srcList)
    }
    updated() {
    }
}
</script>
<style lang="scss" scoped>
    .el-img{
        position:absolute;
        height:20px;
        width:30px;
        opacity:0
    }
    .op-1{
        opacity: 1;
    }
    .op-0{
        opacity: 0;;
    }
</style>