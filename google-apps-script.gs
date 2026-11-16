/**
 * RSVP receiver for the wedding website.
 * Paste this whole file into Extensions > Apps Script of a Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * See README.md for the step-by-step guide.
 */
var SHEET_NAME = "RSVPs";
var HEADERS = ["Received", "Name", "Phone", "Attending", "Guests", "Message"];

// Stops spreadsheet formula injection: text starting with = + - @ is stored as plain text.
function safe_(v) {
  var s = String(v == null ? "" : v).slice(0, 600);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    if (data.company) return json_({ ok: true }); // honeypot filled: ignore silently

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange("C:C").setNumberFormat("@"); // phone column as text keeps leading zeros
      sheet.setFrozenRows(1);
    }
    var row = sheet.getLastRow() + 1;
    sheet.getRange(row, 1, 1, 6).setNumberFormats([["yyyy-mm-dd hh:mm", "@", "@", "@", "0", "@"]]);
    sheet.getRange(row, 1, 1, 6).setValues([[
      new Date(),
      safe_(data.name),
      safe_(data.phone),
      safe_(data.attending),
      Number(data.guests) || 0,
      safe_(data.message)
    ]]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function doGet() { return json_({ ok: true, info: "RSVP endpoint is running" }); }

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
