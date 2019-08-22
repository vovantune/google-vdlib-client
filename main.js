var scriptProperties = PropertiesService.getScriptProperties();
var UI = new VDLib.UI({
  useOneSStore: scriptProperties.getProperty("useOneSStore") == "1",
  xlsStore: JSON.parse(scriptProperties.getProperty("xlsStore")),
  oneSStore: JSON.parse(scriptProperties.getProperty("oneSStore")),
  showClearButton: scriptProperties.getProperty("showClearButton") == "1",
  exportFields: JSON.parse(scriptProperties.getProperty("exportFields")),
  hidePredictGroupHeaders: scriptProperties.getProperty("hidePredictGroupHeaders") == "1"
});

/** Открытие документа */
function onOpen() {
  UI.processOpen(SpreadsheetApp.getUi());
}

/**
 * Сабмит по форме с файлами
 */
function onFormSubmit(e) {
  UI.processSubmit(e);
}

/** Заполняем склад */
function doFillOneSStore() {
  UI.fillOneSStore(SpreadsheetApp.getUi());
}

/**
 * Запуск предсказаний
 */
function doPredict() {
  UI.predict(SpreadsheetApp.getUi());
}

/**
 * Чистим все таблицы с загруженным ранее данными
 */
function doClear() {
  UI.clearAllSheets(SpreadsheetApp.getUi());
}

/**
 * Первоначальная настройка
 */
function doSetup() {
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onFormSubmit()
    .create();
}

/** Экспорт расчётов в Excel */
function doExcelExport() {
  UI.exportToExcel(SpreadsheetApp.getUi());
}

/** Экспорт расчётов в формате дефицита */
function doDeficiencyExport() {
  UI.deficiencyExport(SpreadsheetApp.getUi());
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
