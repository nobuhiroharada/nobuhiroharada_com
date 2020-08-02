---
title: "Gatsbyで作ったサイトをGoogle Analyticsを使って、Google Search Consoleに簡単に登録する"
date: "2020-05-21"
tags:
  - Gatsby
---

### 検証環境

Gatsby 2.21.13

<br />

### 前提条件

Google Analyticsのプラグイン、'gatsby-plugin-google-analytics' を使用

<br />

### 登録方法

gatsby-config.js の options に head: true を設定します。

<br />

**修正前**

    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-XXXXXXXXX-X",
        },
    },

<br />

**修正後**

    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-XXXXXXXXX-X",
            head: true
        },
    },

<br />

登録後、Google Search Consoleからプロパティの追加 -> プロパティの選択 -> 所有権の確認 で Google Analytics を選択します。

<br />

これで Google Search Console に登録され、サイトマップの追加などができるようになります。

<br />

以上になります。

<br />

**参考**

Add a Gatsby site to the Google Search Console with Google Analytics

https://vincentdnl.com/add-gatsby-site-to-google-search-console-with-google-analytics/