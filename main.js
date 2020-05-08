const scriptProperties = PropertiesService.getScriptProperties();
const UI = VDLib.createUI({
  showClearButton: scriptProperties.getProperty("showClearButton") == "1"
});

/** Открытие документа */
function onOpen() {
  UI.processOpen(SpreadsheetApp.getUi());
}

/** Сабмит по форме с файлами */
function onFormSubmit(e) {
  UI._logStatus("Для загрузки отчётов воспользуйтесь новой формой по ссылке выше", UI.STATUS_COLUMNS.articles);
}

/** Заполняем склад */
function doFillOneSStore() {
  UI.fillOneSStore(SpreadsheetApp.getUi());
}

/** Запуск предсказаний Екатеринбург */
function doPredictEkb() {
  UI.predict(SpreadsheetApp.getUi(), "Екатеринбург");
}

/** Запуск предсказаний Краснодар */
function doPredictKrasnodar() {
  UI.predict(SpreadsheetApp.getUi(), "Краснодар");
}

/** Запуск предсказаний Новосибирск */
function doPredictNovosib() {
  UI.predict(SpreadsheetApp.getUi(), "Новосибирск");
}

/** Запуск предсказаний Санкт-Петербург */
function doPredictSpb() {
  UI.predict(SpreadsheetApp.getUi(), "Санкт-Петербург");
}

/** Запуск предсказаний Хабаровск */
function doPredictKhabarovsk() {
  UI.predict(SpreadsheetApp.getUi(), "Хабаровск");
}

/** Запуск предсказаний */
function doPredict() {
  UI.predict(SpreadsheetApp.getUi());
}

/** Чистим все таблицы с загруженным ранее данными */
function doClear() {
  UI.clearAllSheets(SpreadsheetApp.getUi());
}

/** Отключаем артикул */
function doDeactivateArticle() {
  UI.deactivateArticle(SpreadsheetApp.getUi());
}

/** Активируем артикул */
function doActivateArticle() {
  UI.activateArticle(SpreadsheetApp.getUi());
}

/** Экспорт расчётов в Excel */
function doExcelExport() {
  UI.exportToExcel(SpreadsheetApp.getUi());
}

/** Экспорт расчётов в формате дефицита */
function doDeficiencyExport() {
  UI.deficiencyExport(SpreadsheetApp.getUi());
}

/** Заполняем поставку на основании остатков на складе */
function doFillByClientStorage() {
  UI.fillByClientStorage(SpreadsheetApp.getUi());
}

/** Дебаг артикулов */
function doDebugArticles() {
  UI.debugData("articles");
}

/** Дебаг остатков */
function doDebugRemains() {
  UI.debugData("remains");
}

/** Дебаг движений */
function doDebugMovements() {
  UI.debugData("movements");
}

/** Дебаг продаж */
function doDebugSells() {
  UI.debugData("sells");
}

/** Дебаг оборачиваемости */
function doDebugTurnover() {
  UI.debugData("turnover");
}

/** Дебаг дефицита */
function doDebugDeficiency() {
  UI.debugData("deficiency");
}

/** Дебаг листа ожидания */
function doDebugWaitingList() {
  UI.debugData("waitingList");
}

/** Дебаг товара в пути */
function doDebugInTransit() {
  UI.debugData("inTransit");
}

/** Дебаг склада 1С */
function doDebugOneSStore() {
  UI.debugData("clientStorage");
}

/** Первоначальная настройка */
function doSetup() {
  throw "Deprecated";
}

/** Запуск вручную сабмита */
function testFormSubmit() {
  throw "Deprecated";
}
