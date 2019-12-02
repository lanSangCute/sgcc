import btn from "./btn/btn.vue";
import card from "./card/card.vue";
import list from "./list/list.vue";
import listInput from "./listInput/listInput.vue";

export default [
      {path:"btn",component:btn,meta:{iframe:"btnPage"}},
      {path:"card",component:card,meta:{iframe:"listPage"}},
      {path:"list",component:list,meta:{iframe:"cardPage"}},
      {path:"listInput",component:listInput,meta:{iframe:"btn4"}}
]

