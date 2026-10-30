# Работа с GitHub Pages

Выполнила: Смирнова А.М.

Установка и запуск в PowerShell, два терминала:

```powershell
npm ci
npm run serve
```

```powershell
npm start
```

Клиент: http://localhost:3000

API: http://localhost:3001/api/data

В development приложение получает JSON от json-server. В production данные загружаются из ветки gh-pages по адресу raw.githubusercontent.com.

```powershell
npm run build
npm run deploy
```

Команда build собирает React-приложение и записывает JSON в build/static/db/data.json. Команда deploy очищает build, создает свежую сборку и публикует ее в gh-pages. В настройках Pages выбрана ветка gh-pages, каталог /.

Сайт: https://telphie.github.io/github-pages-demo/

Репозиторий: https://github.com/Telphie/github-pages-demo
