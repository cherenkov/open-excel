【FireFox】についての質問です。 イントラネット上のExcelを開.. - 人力検索はてな
[http://q.hatena.ne.jp/1297583742](http://q.hatena.ne.jp/1297583742) の質問を受けて作成した、xlsファイルをExcel（OpenOffice.org Calcも可）で直接開くためのFirefox拡張です。

![](http://cdn.f.st-hatena.com/images/fotolife/C/Cherenkov/20110213/20110213213326.png)

リンクのURLが.xlsで終わる場合にアイコンを表示し、クリックするとExcelで開かれます。


使い方
------

#### about:configを変更した後は必ずFirefoxの再起動をしてください。

1. Excel.exe（OpenOffice.org Calcも可）の場所をFirefoxに教える必要があるので、ロケーションバーから **about:config** を開いて、右クリック - 新規作成 - 文字列から設定名は **extensions.open-excel.excel_path** とし、値はお使いになるPCのExcel.exeの場所を指定してください。今回はデフォルトで C:\Program Files\Microsoft Office\Office14\EXCEL.EXE になっています。
2. この拡張を有効にするサイトを限定的に設定する場合は、**extensions.open-excel.include_url** に URLをそのまま入力するか、複数の場合は **http://www.example.com/1.html, http://** のようにコンマで区切って、設定してください。正規表現が使えます。\*（アスタリスク）でワイルドカードになります。デフォルトでは \* になっており全てのサイトで有効になります。
3. デフォルトではCSSセレクタ **a[href$=".xls"], a[href$=".xlsx"]** に当てはまる要素にアイコンを表示します。 **extensions.open-excel.selector** にCSSセレクタを設定すると条件が上書きされ、任意の要素を検索することが可能です。


アンインストール
------
普通に拡張をアンインストールした後、**about:config** で **extensions.open-excel.include_url**、**extensions.open-excel.excel_path**、**extensions.open-excel.selector** を設定した場合は、これらをリセットすれば元の状態に戻ります。
