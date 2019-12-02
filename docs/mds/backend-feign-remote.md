
feign远程调用 设计目的
---
- 远程服务地址可配置化
- 业务书写时，无须考虑服务地址。
- 可根据数据结果，直接指向到对应的服务。即最终请求目的地，为数据可控。



feign结构
---

```
graph LR

A(服务目录)

A-->B(fegin)
A-->configuration

configuration-->link

link-->|某feign服务配置|CC(xxxConfiguration)
link-->|某feign服务请求adapter|CI(xxxInterceptor)


B-->|某业务feign|XXXFeign
B-->YYYFeign

```

feign 请求远程服务构建
---
- 远程服务请求，由`ConnectRemote`统一管理。 
需要在请求前添加`@ConnectRemote`注解。
- 参数0和1，为固定格式，不要更改。

```
@FeignClient(
    name="Remote-Name",     //注意name唯一性
    url="http://localhost", //url随意填写，无实际意义，需要符合http url规范。
    configuration= RemoteWebBankConfiguration.class
)
public interface CommonFeign {

    @ConnectRemote              //remote请求注解
    @PostMapping(path="/path")
    public String visit(
        URI url,                            // URI
        @RequestParam Object serviceName,   //远程服务的服务名  
        @RequestBody  MyParam params   //post请求参数
    );
}

```
请求使用

```
@Autowired
private CommonFeign commonFeign;

public String visit(){

   return virtualCommonFeign.visit2(
        null,          //uri均填写null
        "remoteName",   //此处添加服务名
        myParam
    );
}

```

fegin远程服务配置
----

###### `filters/filter-${env}.properties`
```
#### service-link
serviceLink.remote.name.nodeJs=remoteNodeJs
serviceLink.remote.name.virtual=remoteVirtual
serviceLink.remote.value.nodeJs=http://localhost:4000
serviceLink.remote.value.virtual=http://localhost:5000
```

服务注入位置

##### `resources/feign/feign-link.xml`

```
<bean id="feignLinkSetting" class="cm.service.graftstation.configuration.FeignLinkSetting">
   <constructor-arg>
        <map>
            <entry key="@serviceLink.remote.name.nodeJs@" value="@serviceLink.remote.value.nodeJs@"/>
            <entry key="@serviceLink.remote.name.virtual@" value="@serviceLink.remote.value.virtual@" />
        </map>
    </constructor-arg>
</bean>
```
因此

#### 服务名填写为如 `remoteNodeJs` 会使用已配置的服务地址，做为url发送。