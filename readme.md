# ①課題番号-プロダクト名
kadai00_cheese
チーズアカデミー

## ②課題内容（どんな作品か）

- htmlの練習用課題
- 仕様書をベースとしつつ、アニメーションや装飾などを追加した

## ③DEMO

デプロイしていない

## ④作ったアプリケーション用のIDまたはPasswordがある場合

なし

## ⑤工夫した点・こだわった点

- tailwindを使ってのアニメーションは不慣れだったが、多様なものを取り入れた
- ハンバーガーメニュークリック時のメニューアニメーションで、各項目が少しずつズレてアニメーションするようにした
- メニューのホバーカラーの変更に少しだけdurationを入れて高級感をだした
- タイトルのフォントを変えてみた
- ボタンやチェックボックス、ホバーした際に変わる色等を黄色系にして、チーズっぽさを演出した
- 地図は画像ではなく、googleマップの埋め込みにした
- 以下をレスポンシブ対応として工夫した
  1. メニュー部分の文字間隔、およびハンバーガーへの推移
  2. COURSE部分の文字が幅が狭いときは重なるようにした
  3. CONTACT部分の枠が幅が狭いときは縦になるようにした



## ⑥難しかった点・次回トライしたいこと(又は機能)

- アニメーションは全般に環境設定が追加で色々と必要で大変だった
- ハンバーガーメニュークリック時の少しずつズレてアニメーションするようにするのは非常に難しかった。同期、非同期処理について理解が追いつかなかったので、いずれは理解できるようにしたい。
- レスポンシブに対応した枠組みリストが難しかった

## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- `Promise` `async` `await`　がよくわかっていないので、わかりやすい解説サイトなどがあれば教えていただきたいです。一応下記[参考記事]は参考にしたのですが、いまいち掴みきれず困っています。

- 今回使用した箇所は下記です。
~~~js
//sleepを非同期関数として定義
  async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

 open.addEventListener("click", async ()=>{ //クリックされたときに処理される関数を非同期関数とする
   humburgerMenu.classList.remove("hidden");
   close.classList.remove("hidden");
   open.classList.add("hidden");
   for (const menu of menus){
    menu.classList.remove("hidden");
    menu.classList.add("animate-tracking-in-expand", "block");
    await sleep(100);
   }
  });
~~~

まず、`setTimeout`が非同期関数のため、awaitを使わなければそれぞれのmenuごとにsleepを実行してくれなくなるため上記の様な記述となると理解しています。
ここで、`Promise`はなぜ必要なのか、という点と、asyncが無名関数にも必要な理由がよくわかっておりません。そもそも`Promise`の理解がうまくできていないため、そこからまずは理解したいです。

- [参考記事]
  - 1. [JavaScriptのきほんを学ぼう
](https://baapuro.com/JavaScript/six/)
  - 2. [JavaScriptのforEachで非同期処理を逐次実行する方法
](https://zenn.dev/sora_kumo/articles/612ca66c68ff52)
  - 3. [JavaScriptの非同期処理を理解する その2 〜Promise編〜](https://knowledge.sakura.ad.jp/24890/)
  - 4. [chatGPT](https://chat.openai.com/share/b1be6c64-ec0a-4f3a-a997-21fa9b4a0377)