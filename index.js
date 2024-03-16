// 様々をインポート
const osc = require('node-osc');
const config = require('./config.json');
const fs = require("fs");
const { cursorTo } = require('readline');

// 時間用
require("date-utils");

// クライアントを生成
// VRChatに送信する IP:127.0.0.1 ポート:9000
const client = new osc.Client("127.0.0.1", 9000);

// 読み込むテキストファイルを指定 config.jsonよりパスを読む
// ファイル名のハードコーディングはよくないかも。ディレクトリを走査してファイルを探すようにする？
const hrpath = config.heartratetxt + "\\heartrate.txt";

console.log("Start!");

setInterval(() => {

    // 時間 (これいる?)
    var currentTime = new Date().toFormat("YYYY/MM/DD HH24:MI:SS");

    // ファイルを読み込む
    fs.readFile(hrpath, 'utf8', (err, data) => {
        // リセット
        // client.send("/chatbox/input", "", true);

        if (err) {
            console.error(err)
            return
        }
        // VRChat用に結合
        var text = "Heartrate: " + data + " BPM";
        // VRChatに送信
        client.send("/chatbox/input", text, true)
        // コンソールに出力
        console.log(currentTime + " | " + text)
    })

}, 3000)