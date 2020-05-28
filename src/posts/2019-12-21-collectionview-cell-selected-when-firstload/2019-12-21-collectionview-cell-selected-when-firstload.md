---
title: "SwiftのCollectionViewで初回起動時に前回選択していたセルを選択状態にしたい時"
date: "2019-12-21"
archive: "2019-12"
tags:
  - Swift
---

ColletionView cellForItemAt で cell を生成する際に selectItem を使用し、初回起動の時でもセルを選択した状態にします。

<br />

```
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
     
    if let cell: ColorCollectionViewCell = collectionView.dequeueReusableCell(withReuseIdentifier: colorCollectionCellId, for: indexPath) as? ColorCollectionViewCell {
         
        // 選択状態になる条件を書く
        if () {
            collectionView.selectItem(at: indexPath, animated: false, scrollPosition: [])
        }
         
        return cell
    }
     
    return UICollectionViewCell()
}
```

<br />

didSelectItemAt、didDeselectItemAt は ColletionView が表示され、ユーザーがcellを選択したり、選択を解除したらその位置を取れますが、初回起動時はユーザーのアクションがありません。

<br />

そこで cellForItemAt でcellを生成する際に selectItem を使い、cell の indexpath を指定することで選択した状態にすることができます。

<br />

こうすることで前回選択したセルの情報をUserDefaultsなどに保持しておいて、それに合致する条件の cell に対して、selectItem すれば、初回起動時でも cell を選択状態にすることができます。

<br />

以上になります。