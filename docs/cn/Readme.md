
## 主观分类

不收录任何看上去像是拉丁字母的东西

不收录看上去好像不是文字或者密文的东西, 比如图案和表情

- `Cipher` 是指看上去只是某种符号排列组合的东西
- `Conlang` 是指看上去像是某种文字的东西

## 清空缓存

如果页面加载异常或者控制台报错, 刷新 SW 缓存即可

```js
if ('serviceWorker' in navigator) {
    caches.keys().then(function (cacheNames) {
        cacheNames.forEach(function (cacheName) {
            caches.delete(cacheName);
        });
    });
}
```
