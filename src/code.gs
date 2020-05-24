function onOpen() {
  Browser.msgBox("aa");
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu('テスト', [
      {name: 'テストA', functionName: 'registerAll'},
      {name: 'テストB', functionName: 'cancelAll'},
    ]);
}

function registerAll() {
  Browser.msgBox("aa");
}

function cancelAll() {
  Browser.msgBox("bb");
}

function myFunction() {
  Logger.log("aaa")
}
