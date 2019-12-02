button
---

#### color button

```html
<main>
    <cm-btn size="small" color="main">small</cm-btn>
    <cm-btn size="little" color="main">small</cm-btn>
    <cm-btn size="now" color="main">small</cm-btn>
    <cm-btn size="medium" color="main">small</cm-btn>
</main>
```
#### round button

```html
<main>
    <div><cm-btn color="main" round>roundBtn</cm-btn></div>
    <div><cm-btn color="secondary" round>roundBtn</cm-btn></div>
    <div><cm-btn color="thin" round>roundBtn</cm-btn></div>
    <div><cm-btn color="thin2" round>roundBtn</cm-btn></div>
    <div><cm-btn color="danger" round>roundBtn</cm-btn></div>
    <div><cm-btn color="success" round>roundBtn</cm-btn></div>
    <div><cm-btn color="linear" round>roundBtn</cm-btn></div>
</main>

```
#### block button

```html
<main>
    <div><cm-btn color="main" block>roundBtn</cm-btn></div>
    <div><cm-btn color="secondary" block>roundBtn</cm-btn></div>
    <div><cm-btn color="thin" block>roundBtn</cm-btn></div>
    <div><cm-btn color="thin2" block>roundBtn</cm-btn></div>
    <div><cm-btn color="danger" block>roundBtn</cm-btn></div>
    <div><cm-btn color="success" block>roundBtn</cm-btn></div>
    <div><cm-btn color="linear" block>roundBtn</cm-btn></div>
</main>

```

#### outline button
```html
<main>
    <cm-outline-btn size="small" color="main">outlineBtn</cm-outline-btn>
    <cm-outline-btn size="little" color="main">outlineBtn</cm-outline-btn>
    <cm-outline-btn size="now" color="main">outlineBtn</cm-outline-btn>
    <cm-outline-btn size="medium" color="main">outlineBtn</cm-outline-btn>

</main>

```

#### round outline btn
```html
<main>
    <cm-outline-btn round color="main">roundBtn</cm-outline-btn>
    <cm-outline-btn round color="secondary">roundBtn</cm-outline-btn>
    <cm-outline-btn round color="thin">roundBtn</cm-outline-btn>
    <cm-outline-btn round color="thin2">roundBtn</cm-outline-btn>
    <cm-outline-btn round color="danger">roundBtn</cm-outline-btn>
    <cm-outline-btn round color="success">roundBtn</cm-outline-btn>
    <cm-outline-btn round color="linear">roundBtn</cm-outline-btn>
</main>

```
Button Reference
---
#### cm-btn
|props|可用值|详情|
|-|-|-|
|color|`main` `secondary` `thin` `thin2` `danger` `success` `linear`| 颜色|
|size|`small` `little` `now` `medium`| 大小 |
|round|`true` `false`| 块级圆角|
|block|`true` `false`| 块级|