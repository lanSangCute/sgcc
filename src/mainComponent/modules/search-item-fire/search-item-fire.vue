<script lang="tsx">
import {Component,Vue,Prop,Watch} from "vue-property-decorator";
import { NavListItem } from '../../../views/navData';
import {SearchItemData} from "./search-item.interface";

interface RangeValue{
    start:number;
    end:number;
}

@Component({
    render(h){
        const self:any=this;
        const data:SearchItemData=(this as any).data;
        const sliceTp=(str:string|undefined,start:number|undefined,end:number|undefined)=>{
            if(start!==undefined&&str&&start!==undefined&&end!==undefined){
                return (
                    <span>
                    {str.slice(0,start)}<kbd>{str.slice(start,end)}</kbd>{str.slice(end)}
                    </span>
                )
            }else{
                return str;
            }
        }
        return (
        <main onClick={()=>self.click()} class={"cmFire-search-item cm-line border"}>
            {data?
            (<div>
                <div class={"_label"}>{sliceTp(data.label,data.labelStart,data.labelEnd)}</div>
                <div class={"_content"}>{sliceTp(data.content,data.contentStart,data.contentEnd)}</div>
            </div>)
            :null}
        </main>
        )
    }
})
export default class SearchItemFireComponent extends Vue{
    @Prop({})name:string;
    @Prop({})data:SearchItemData;
    click(){
        this.$emit("click");
    }
}
</script>