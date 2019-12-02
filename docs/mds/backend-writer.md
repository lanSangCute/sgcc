后端代码功能规范
---

#### 路由请求

- path

    每个**controlle**    根据功能聚合接口，必须指定`controller path`。
   


- application/json` (Json请求)`

    返回数据超过10KB时，使用，返回为经*gzip*压缩的**get**请求。

    其余一律使用`post`请求`(包括查询)`。
- **application/x-www-form-urlencode**
    
    除特殊情况外，均不使用`(表单提交)`
    

#### 路由参数
- Param 约定
    
    所有拥有参数的 **post** 请求，必须书写一个`Param`类。
    相应的`Param`类均放于，其所属的`controller`目录内的`params` 文件夹下。

- 参数校验
    
    param类需要对必要参数进行校验。必须校验的常见参数种类：
    - **非空** 不能为空的字段
    - **长度** 需满足一定长度区间
    - **一定格式的field** 如身份证、邮箱、手机号等，必须进行正则校验
    - **大小** 需要满足一定size

- 参数格式
    
    - **date** 
        
        一般情况下接收的时间类型，json中均以`yyyy/MM/dd HH:mm:ss` 格式的字符串来表示。
    - **Long**
        
        所有接收的Long类型，json中均为`String`类型。
- interceptor参数获取

    拦截信息，均通过`@RequestAttribute`获取。 如用户session,id等，经拦截器处理获得的信息。
    

#### 返回体

正常处理均直接返回结果，处理失败或未通过等其他非正常情况，则需要返回 *失败状态* 及或 *提醒语*。一般约束下，后端不必返回*提醒语*，前端通过*失败状态*，来操作相应的前端变更。

- 返回状态
    - 错误返回
        
        接口层面，非正常处理，均抛出`http status:400`。
        返回内容遵循 `错误状态返回格式`。
        常用的错误状态：
        - **Normal(0)**         默认未知错误
        - **NotLogin(1)**       未登陆
        - **ExpiredLogin(2)**      登陆已过期
        - **NotAuth(3)**        未授权操作
        - **FindEmpty(101)** 查询-未找到
        - **FindUnAuth(102)**  查询-未通过
        - **InsertDup(201)**    插入-已存在
        - **UpdateNotFound(301)** 更新-未找到
    
    - 成功返回
    
        `http code:200` 即为请求成功。勿须在状态码为200的前提下，再返回`{result:"success"}`来表示成功。故而，有部分更新操作，只需返回`void`，便可表示更新成功。

    - 自定义成功状态返回
    
        请求成功后，仍存在需返回多种状态值的接口，应该为该接口，书写独自的**状态枚举**, 返回内容遵循 `自定义成功状态返回格式`。
        
    - 自定义错误状态返回
        
        书写独自**状态枚举**，遵循`错误状态返回格式`，返回自定义错误。自定义错误状态码至少4位。
        
        
        
> 错误状态返回格式
```js
{
    int type,    //状态码
    String message, //提示语
    String content, //内容 
}

```
        
        
> 自定义成功状态返回格式   
```js
{  
    type    : Enum.Type.getType(), //状态
    content : resultEntity //内容
}
// 接口独自处理自己状态返回，全局状态只遵循http状态码。
```

 


    
- JSON
    
    所有的`application/json`请求，均以相应的json实体类做为返回类型。
    *不要封装`profile`*。
    
    生产模式的下返回数据，不应该包含值为`null`的字段。

- 错误处理
    
    一般只对`runtime exception`进行处理。
    接口书写时，对可预知的错误，进行错误抛出。

    常用的可抛出错误类型：
    - **ReqBad** 业务错误
    - **ReqBadParams** 参数错误
    - **ReqForbidden** 禁止操作
    - **ReqNotFound** 未找到
    - **ReqUnauthorized** 未通过认证

- JSON返回体格式
    
    - **Date** 以`yyyy/MM/dd HH:mm:ss`字符串表示
    - **Long** 以`String`类型表示

- Stream返回体约定

    所有Stream的返回体，均以`ResposeEntity<T>`的形式进行返回。

#### 日志输出
日志统一采用 `@Sf4j` 类注解，进行日志操作。
项目中禁止出现**直接打印**。

- debug
    
    所有的**debug**，必须使用debug日志输出。  
- info

    必要的信息打印
- warn
    
    接口抛出的`错误状态`，以warn形式输出。
    
- error
    
    崩溃未能预知的错误，以error输出。    

#### Injector

1.  controller中禁止注入dao层服务，直接操作dao层方法。
2.  自定义`Bean`均放于 `BeanConfiguration`中初始化。



#### MyBatis


- 映射

    一般表字段到JAVA类的映射，都应该通过`resultMap`来完成。

- 重用查询字段

    能复用的查询字段，应该尽量封装为`<sql>`
    
    
#### 文件上传
文件上传必须使用流式上传，禁止完全读取文件后再保存。
#### 文件导出
- excel
    
    大数据量的**excel**文件导出，禁止全部查询后再输出**excel**文件。须做边查边导出。


#### Thread线程

- 禁止开启不可控的独立线程，有所线程都需受控于线程池。
- spring线程方法必须放置于`@Async` component类下。

#### 代码书写规范

`java` `mysql`遵循常见代码格式书写规范。