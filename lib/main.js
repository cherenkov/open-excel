const pageMod = require("page-mod");
const self = require("self");
const {Cc, Ci} = require("chrome");
const prefs = require("preferences-service");

var selector = prefs.get("extensions.open-excel.selector", 'a[href$=".xls"], a[href$=".xlsx"]');
var includeUrl = prefs.get("extensions.open-excel.include_url", "*");
var excelPath = prefs.get("extensions.open-excel.excel_path", "C:\Program Files\Microsoft Office\Office14\EXCEL.EXE");

pageMod.PageMod({
  include: includeUrl.trim().split(/\s*,\s*/),
  contentScriptWhen: 'ready',
  contentScriptFile: self.data.url("contentscript.js"),
  onAttach: function onAttach(worker) {
    worker.postMessage(selector);

    worker.on('message', function(msg) {
      var args = [msg];
      var excel = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
      excel.initWithPath(excelPath);
      var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
      process.init(excel);
      process.run(false, args, args.length);
    });
  }
});