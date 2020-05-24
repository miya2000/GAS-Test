function onOpen() {
  Browser.msgBox("111");
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu('テスト', [
      {name: 'テストA', functionName: 'registerAll'},
      {name: 'テストB', functionName: 'cancelAll'},
    ]);
}

function registerAll() {
  Browser.msgBox("aa1");
}

function cancelAll() {
  Browser.msgBox("bb2");
}

function myFunction() {
  Logger.log("aaa")
}
