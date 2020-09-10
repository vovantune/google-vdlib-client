const scriptProperties = PropertiesService.getScriptProperties();
const UI = VDLib.createUI({
  showClearButton: scriptProperties.getProperty("showClearButton") == "1"
});

/** Открытие документа */
function onOpen() {
  UI.processOpen();
}

/** Чистим все таблицы с загруженным ранее данными */
function doClear() {
  UI.clearAllSheets();
}
