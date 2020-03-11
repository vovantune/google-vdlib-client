var scriptProperties = PropertiesService.getScriptProperties();
var UI = new VDLib.UI({
  predictOptions: JSON.parse(scriptProperties.getProperty("predictOptions")),
  showClearButton: scriptProperties.getProperty("showClearButton") == "1",
  exportFields: JSON.parse(scriptProperties.getProperty("exportFields")),
  customExport: scriptProperties.getProperty("customExport"),
  debug: scriptProperties.getProperty("debug") == "1"
});

/** Открытие документа */
function onOpen() {
  UI.processOpen(SpreadsheetApp.getUi());
}

/** Сабмит по форме с файлами */
function onFormSubmit(e) {
  UI.processSubmit(e);
}

/** Заполняем склад */
function doFillOneSStore() {
  UI.fillOneSStore(SpreadsheetApp.getUi());
}

/** Запуск предсказаний Екатеринбург */
function doPredictEkb() {
  UI.predict(SpreadsheetApp.getUi(), VDLib.UISells.STORE_EKB);
}

/** Запуск предсказаний Краснодар */
function doPredictKrasnodar() {
  UI.predict(SpreadsheetApp.getUi(), VDLib.UISells.STORE_KRASNODAR);
}

/** Запуск предсказаний Новосибирск */
function doPredictNovosib() {
  UI.predict(SpreadsheetApp.getUi(), VDLib.UISells.STORE_NOVOSIB);
}

/** Запуск предсказаний Санкт-Петербург */
function doPredictSpb() {
  UI.predict(SpreadsheetApp.getUi(), VDLib.UISells.STORE_SPB);
}

/** Запуск предсказаний Хабаровск */
function doPredictKhabarovsk() {
  UI.predict(SpreadsheetApp.getUi(), VDLib.UISells.STORE_KHABAROVSK);
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
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onFormSubmit()
    .create();
}

/** Запуск вручную сабмита */
function testFormSubmit() {
  onFormSubmit({
    namedValues: {
      "Вся номенклатура WB": [""],
      "Остатки товара на складах WB": [""],
      "Товарные движения WB": [""],
      "Продажи WB": [""],
      "Дефицит товаров WB": [""],
      "Оборачиваемость товаров WB": [""],
      "Лист ожидания WB": [""],
      "Заказы для WB в пути": [""],
      "Остатки на ваших складах": [""]
    }
  });
}
