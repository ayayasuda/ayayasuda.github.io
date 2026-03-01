# 言葉と写真 — Portfolio

## ファイル構成

```
portfolio/
 ├── index.html       ← トップページ（ヒーロー＋ピックアップ記事＋ランダム一覧）
 ├── works.html       ← 記事一覧（カテゴリフィルター付き）
 ├── article.html     ← 記事ページ（URLクエリで記事を切り替え）
 ├── about.html       ← プロフィールページ
 ├── css/
 │    └── style.css   ← 全ページ共通スタイル
 ├── js/
 │    ├── articles.js ← 記事データ（ここだけ編集すればOK）
 │    └── main.js     ← 共通JS（カーソル・スクロール・ページ遷移）
 └── images/          ← 写真を入れるフォルダ
```

---

## 記事を追加する方法

`js/articles.js` の `ARTICLES` 配列に追記するだけです。

```js
{
  id: 9,                          // 連番（既存と被らない数字）
  slug: "my-new-article",         // URLに使われる（英数字とハイフンのみ）
  title: "新しい記事のタイトル",
  category: "Essay",              // "Essay" / "Column" / "Photo Essay"
  date: "2025年1月1日",
  featured: false,                // true にするとトップページに表示
  excerpt: "記事の冒頭の一文。一覧ページに表示されます。",
  body: [
    "本文の第一段落。",
    "第二段落。配列の各要素が<p>タグになります。",
    "第三段落。"
  ]
}
```

---

## 公開方法

静的HTMLファイルなので、そのままサーバーにアップロードするだけで動きます。

おすすめのホスティング：
- **GitHub Pages**（無料・独自ドメイン対応）
- **Netlify**（無料・自動デプロイ）
- **Vercel**（無料・自動デプロイ）

---

## 記事URLの例

`article.html?slug=morning-market-in-fog`

このURLをSNSなどでそのまま共有できます。
