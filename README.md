# Проект - "Mesto (backend)"

Учебный проект - приложение для публикации и последующего хранения/редактирования/удаления изображений.
Работа велась с backend частью сервиса

## Использованный стек:
 - node.js, express.js
 
## Инструменты
 - Сборка Webpack (^4.39.2): 2 режима сборки dev и prod.
 
## Для установки:
1. [Склонировать](https://git-scm.com/book/ru/v2/Appendix-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%9A%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B5%D0%B2) репозиторий на локальный компьютер
1. После распаковки, в директории проекта выполнить команду: 

    ```npm install``` 
(должен быть установлен [Node.js](https://nodejs.org/en/))
2. После установки зависимостей,в директории проекта для режима разработки (dev mode hot-reload), выполнить:

    ```npm run dev```
3. Для получения production (prod mode) версии проекта в директории проекта, выполнить:

    ```npm run build```
4. Созданная папка **dist** является production версией проекта

## Выполненны слудующие задачи:
1. На GET запрос localhost:3000/users сервер вернёт JSON-объект из файла users.json

2. На GET запрос localhost:3000/cards сервер вернёт JSON-объект из файла cards.json

3. На GET запрос localhost:3000/users/8340d0ec33270a25f2413b69, сервер вернёт JSON-объект пользователя с переданным после идентификатором

4. Если пользователя с запрошенным идентификатором нет, API должен возвращать 404 статус ответа и JSON: "Нет пользователя с таким id"

5. При запросе на несуществующий адрес, API должен возвращать 404 статус ответа и JSON: "Запрашиваемый ресурс не найден"
