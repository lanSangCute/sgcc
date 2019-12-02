设计目的
---
- 自动写入请求session
- 开发只需负责业务逻辑

结构 （见user 服务）
---
```
graph LR
A(项目目录)

A-->B(configuration)
B-->link
link-->|feign配置文件|lc(xxxConfiguration必要文件)
link-->|feign请求interceptor|li(xxxInterceptor必要文件)

A-->|session写入|aspect/NativeConnectAspect必要文件

A-->fegins

fegins-->|某feign服务|xxxFeign
fegins-->|请求熔断文件夹|fallback
```
feginClient
---
```

@FeignClient(
        value="service-graftstation",  //请求的服务名
        qualifier="testGraft",        //注入唯一名
        fallback = TestGraftFallback.class,
        configuration=NativeWebBankConfiguration.class  //指定配置文件
)
public interface TestGraftFeign {

    @ConnectNative  //使用本地连接注解
    @PostMapping(value="/run")
    public LinkTestBody query(
           @RequestParam String session,  //预留参数存放session，此参数必须有
           @RequestBody LinkTestParam linkTestParam    //请求体
    );
}
```


使用
---
```
testGraftFeign.query(null,linkTestParam);
```
session传递空。