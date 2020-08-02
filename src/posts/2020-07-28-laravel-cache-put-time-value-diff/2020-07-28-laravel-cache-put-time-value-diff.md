---
title: "[Laravel]Cache::putメソッドの引数の時間単位が5.7以前は「分」、5.8以降は「秒」になっている件"
date: "2020-07-28"
archive: "2020/07"
tags:
  - Laravel
---

Laravelでキャッシュを保存したい時に使用する **Cache::put** メソッドですが、引数で時間指定する単位が、、、

<br />

## Laravel 5.7以前では "分"

<br />

## Laravel 5.8以降では "秒"

<br />

と異なっているようです。

<br />

公式サイトでも "$minutes", "$seconds" と書かれていてはいるのですが、注意書きなどがないので、覚えておかないとキャッシュの保存時間が全然変わってきますね。。

<br />

以上になります。



## 参考

Laravel 5.7

    Cache::put('key', 'value', $minutes);

https://laravel.com/docs/5.7/cache#storing-items-in-the-cache

<br />

Laravel 5.8  

    Cache::put('key', 'value', $seconds);


https://laravel.com/docs/5.8/cache#storing-items-in-the-cache