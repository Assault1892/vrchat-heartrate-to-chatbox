// 様々をインポート
const osc = require('node-osc');
const config = require('./config.json');
const fs = require("fs");

// クライアントを生成
// VRChatに送信する IP:127.0.0.1 ポート:9000
const client = new osc.Client("127.0.0.1", 9000);

// 読み込むテキストファイルを指定 config.jsonよりパスを読む
// ファイル名のハードコーディングはよくないかも。ディレクトリを走査してファイルを探すようにする？
const hrpath = config.heartratetxt + "\\heartrate.txt";

setInterval(() => {

    // ファイルを読み込む
    fs.readFile(hrpath, 'utf8', (err, data) => {
        // リセット
        // client.send("/chatbox/input", "", true);

        if (err) {
            console.error(err)
            return
        }
        // ファイルの中身を出力
        console.log(data)
        // VRChat用に結合
        var text = "Heartrate: " + data + " BPM";
        // VRChatに送信
        client.send("/chatbox/input", text, true)
    })

}, 3000)