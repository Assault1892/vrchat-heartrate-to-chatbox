# vrchat-heartrate-to-chatbox

Mi Band から取得した心拍数を OSC 使ってチャットボックスに送るよ

## 必要なもの

- [miband-heartrate-osc](https://github.com/mkc1370/miband-heartrate-osc/tree/master)
- Node.js

## セットアップ

miband-heartrate-osc を起動し、 `Write realtime data in text file` にチェックを入れておいてください  
`Send OSC to VRChat` はどっちでもいいです

1. リポジトリをクローン
2. `npm i`
3. `config.json` の中にある `heartratetxt` のキーを `MiBand-Heartrate-2.exe` までのフォルダパスに変更 バックスラッシュはエスケープするなりなんなり
4. 上手く動けば VRChat のチャットボックスに心拍数が出ます
