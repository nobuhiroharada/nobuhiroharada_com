---
title: "Unityの ARFoundation HumanBodyTracking3D の精度を検証してみた！"
date: "2019-09-28"
tags:
  - ARKit
  - Unity
---

AppleのARKit3を利用した　UnityのARFoundation HumanBodyTracking3D は一体どれくらい人の動きを追えるのかいろんな動作を検証してみました。

<br />

**参考**

ARFoundation Samples

https://github.com/Unity-Technologies/arfoundation-samples

<br />

## ヨガ、ジャンプ

<iframe width="560" height="315" src="https://www.youtube.com/embed/_Hqmbj0uNdo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

時折カクカクとトラッキングがぶれてますが、人の動作を追えてますね。

<br />

これらの動画にはiPadProを使用していますが、iPhone11Proを使用しても似たようなトラッキング精度でした。

<br />

立ち姿勢はそこそこトラッキングできてますが、寝転んだり、地面に手をつくような姿勢になると、トラッキングできなくなっています。

<br />

今後、よりモーションキャプチャの学習モデルの精度が増していくと思うので、期待したいところです。

<br />

### 開発していて気づいた課題

- Unityを使わずにネイティブで開発したいが、リギングした3Dモデルをusdzファイルに変換すると、ボーンの階層や座標が崩れてしまい、トラッキングがおかしくなる。

→ ネイティブで開発できれば、画像ファイルを読むようにusdzファイルを読みにいくので、いろんなことができそうです。これができるようになると大きいのですが、現状ツールや手法がネット上に見当たらず、、、何か技術的に難しいことがあるのかもしれません。ただ、animoji, mimojiも表情用にリギングしたusdzファイルを使ってるように思うので、、

<br />

- Unity のサンプルはラッピングしてるような状態だと思うので、制限が大きい。

<br />

- 3Dモデルのリギングが特殊でMotionCapture用のリギングをする必要がある。

→ 左右対称でなく、しかも向きが一般的な3Dモデルのボーンと全然違います。

<br />

- リアルで人をトラッキングした場合とYouTubeなどディスプレイ上の人をトラッキングさせた場合とで、トラッキングの精度に差がなさそう。

→ UnityのARFoundationSamplesでそうなのですが、差があるように見えませんでした。iPadProのカメラとiPhone11Proと比べても差がなかったので、深度を利用せず、2D上でしか人を判定してないのかもしれません。

<br />

### 開発環境

Unity 2019.2.2f1

Blender 2.80

Xcode 11.0

macOS 10.15.Beta

<br />

### 撮影機器

iPadPro

iPhone11Pro

<br />

### 撮影協力

株式会社フトワク様

http://futowaku.jp/

<br />

3Dモデルはモテコビューティのモテ美を使わせていただいております。

mb(モテコビューティー)

https://moteco-web.jp/

<br />

ありがとうございました。

以上になります。