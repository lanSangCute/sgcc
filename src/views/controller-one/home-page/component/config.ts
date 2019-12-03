export default {
    model:[
      {id:1,name:'数据探索',status:'0'},
      {id:2,name:'数据集构建',status:'1'},
      {id:3,name:'数据建模',status:'0'},
      {id:4,name:'模型发布',status:'0'},
      {id:5,name:'服务封装',status:'0'},
      {id:6,name:'产品上架',status:'0'}
    ],
    analy:[
      {icon:'system',name:'系统',value:'102'},
      {icon:'dataBase',name:'数据库',value:'36'},
      {icon:'dataTable',name:'数据表',value:'82'},
      {icon:'angular',name:'表字段',value:'1032'},
      {icon:'models',name:'模型',value:'28'},
      {icon:'store',name:'总存储',value:'1PB'}
    ],
    assetTHead:[
      {prop:'source',label:'数据源',width:'145px',align:'left'},
      {prop:'tableNum',label:'表量',width:'50x',align:'right'},
      {prop:'dataNum',label:'数据量',width:'65px',align:'right'},
      {prop:'storeNum',label:'存储容量',width:'80px',align:'center'},
    ],
    moduleTHead:[
      {prop:'name',label:'模型名称',width:'200px',align:'left'},
      {prop:'time',label:'发布时间',width:'150px',align:'left'},
      {prop:'star',label:'评分',width:'250px',align:'left'},
      {prop:'btnArray',label:'操作',width:'',align:'left'},
    ],
    unitPercent:['0','20%','40%','60%','80%','100%'],
    gridTHead:[
      {prop:'title',label:'名称',width:'120px',align:'left'},
      {prop:'ralation',label:'目录表关系完整率',width:'120px',align:'left'},
      {prop:'desc',label:'表描述完整率',width:'120px',align:'left'},
      {prop:'item',label:'字段描述完整率',width:'120px',align:'left'},
      {prop:'total',label:'总体完整率',width:'120px',align:'left'}
    ],
    unitTHead:[
      {prop:'name',label:'名称',width:'120px',align:'left'},
      {prop:'percent',label:'完整率',width:'',align:'right'},
      {prop:'btnArray',label:'操作',width:'100px',align:'left'},
    ],
    rankGroup:[
      {label:'data',name:'数据集'},
      {label:'model',name:'数据模型'},
      {label:'product',name:'数据产品'}
    ],
    rankTHead:[
      {prop:'rank',label:'排名',width:'',align:'left'},
      {prop:'name',label:'数据名称',width:'',align:'left'},
      {prop:'type',label:'类型',width:'',align:'left'},
    ]
};