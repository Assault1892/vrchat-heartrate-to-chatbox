# vrchat-heartrate-to-chatbox
Mi Bandから取得した心拍数をOSC使ってチャットボックスに送るよ

## 必要なもの
- [miband-heartrate-osc](https://github.com/mkc1370/miband-heartrate-osc/tree/master)
- Node.js

## セットアップ

miband-heartrate-oscを起動し、 `Write realtime data in text file` にチェックを入れておいてください  
`Send OSC to VRChat` はどっちでもいいです

1. リポジトリをクローン
2. `npm i`
3. `config.json` の中にある `heartratetxt` のキーをmiband-heartrate-oscの中にあるheartrate.txtまでのパスに変更 (ファイル名までは不要)
4. `node .`
5. 上手く動けばVRChatのチャットボックスに心拍数が出ます
