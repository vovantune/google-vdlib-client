# Применяемые свойства скрипта
* ```debug: 1|0``` - Выводить ли данные работы скрипта расчётов на отдельную страницу.
* ```hidePredictGroupHeaders: 1:0``` - Группировать ли артикулы по размерам на странице расчётов.
* ```exportFields: Object.<string, number>``` - Объект с описанием полей экспорта расчётов, если не указан, то 
копируется страница полностью, в противном случае имена свойств берутся из ```UIPredict.MAP```, значения - номера заполняемых
ячеек (нумерация с 1). <br />
Пример: ```{"article":1,"size":2,"predictLoading":3}```
* ```showClearButton: 1|0``` - Показывать ли кнопку "Очистить всё" в меню.
* ```xlsStore: Object[]``` - описание формата файлов с остатками из 1С. Поля формата:
    * ```fieldMap: {Object.<string, number>}``` - адреса полей. Имена свойств берутся из ```UIOneSStore.MAP```. Обязательные поля: 
`barcode`, `remainsQty`, значения - номера ячеек (нумерация с 1).
    * ```workPageNumber: int``` - номер страницы, с которой брать данные, по-умолчанию 1.
    * ```dataColumnNumber: int``` - с какой строки начинаются значения, по-умолчанию 2.
    * ```checkField: Object.<string, string>``` - ячейка с проверяемыми данными, для идентификации формата документа.
Позволяет грузить одновременно таблицы разных форматов:
        * Свойство ```address``` - адрес ячейки.
        * Свойство ```value``` - проверочное значение.

Пример описания двух форматов: 
```
[
    {
        "fieldMap": {"barcode": 8, "remainsQty": 2},
        "workPageNumber": 1,
        "dataColumnNumber": 1,
        "checkField": {
            "address": "A1",
            "value": "Прайс лист"
        }
    },
    {
        "fieldMap": {"barcode": 2, "remainsQty": 3},
        "workPageNumber": 1,
        "dataColumnNumber": 1,
        "checkField": {
            "address": "B1",
            "value": "ШК"
        }
    }
]
```
Для описания одного формата: 
```
{
    "fieldMap": {"barcode": 2, "remainsQty": 3}
}
```
* ```predictOptions: Object``` - Настройка выдачи прогнозатора:
    * ```showStoreName: string``` - Показывать ли на странице колонку "Название в 1С".
    * ```showStoreCode: string``` - Показывать ли на странице колонку "Код в 1С".
* ```useOneSStore: 1|0``` - Грузить ли остатки из 1С по протоколу OData.
* ```oneSStore: Object.<string, string>``` - Описание настроек доступа к 1С. Параметры:
    * ```pool: string``` - адрес 1С доступа.
    * ```user: string``` - пользователь.
    * ```pwd: string``` - пароль.
    * ```inn: string``` - ИНН компании, чьи остатки необходимо грузить.
* ```xlsInTransit: Object``` - описание формата файлов с товарами на пути к WB из 1С. Поля формата аналогичны элементу ```xlsStore```.
