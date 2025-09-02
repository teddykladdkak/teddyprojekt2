function doGet(e) {
  var callback = (e.parameter.callback || "callback").replace(/[^\w$]/g, "");
  var action = e.parameter.action;
  var sheetName = e.parameter.sheetName;
  var row = Number(e.parameter.row);
  var col = Number(e.parameter.col);
  var value = e.parameter.value;

  var res = {};
  try {
    if (!sheetName) throw new Error("sheetName saknas.");

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    if (!sheet) throw new Error("Hittar inte blad: " + sheetName);

    if (action === "read") {
      if (!row || !col || row < 1 || col < 1) {
        throw new Error("Ogiltig rad/kolumn: row=" + e.parameter.row + " col=" + e.parameter.col);
      }
      var cell = sheet.getRange(row, col);
      res = { value: cell.getDisplayValue(), raw: cell.getValue() };

    } else if (action === "write") {
      if (!row || !col || row < 1 || col < 1) {
        throw new Error("Ogiltig rad/kolumn: row=" + e.parameter.row + " col=" + e.parameter.col);
      }
      var cell = sheet.getRange(row, col);
      cell.setValue(value);
      res = { status: "ok", written: value };

    } else if (action === "readSheet") {
      // Hämta hela datan (inkl tomma celler inom "used range")
      var range = sheet.getDataRange();
      var values = range.getDisplayValues();
      res = { sheet: sheetName, values: values };

    } else {
      res = { error: "unknown action" };
    }
  } catch (err) {
    res = { error: err.message };
  }

  var out = ContentService.createTextOutput(callback + "(" + JSON.stringify(res) + ");");
  out.setMimeType(ContentService.MimeType.JAVASCRIPT);
  return out;
}
