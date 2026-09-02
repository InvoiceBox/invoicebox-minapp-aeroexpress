# invoicebox-minapp-aeroexpress

Мини-приложение «Аэроэкспресс»: покупка билетов внутри платёжной страницы Invoicebox
(iframe, суборлер к заказу) и мобильного приложения (WebView, самостоятельный заказ).
Общение с хостом — через [`@invoicebox/minapp-sdk`](https://github.com/InvoiceBox/invoicebox-minapp-sdk)
(протокол v2: `updateData`, origin-пиннинг, ретраи хендшейка).

[Storybook](https://ui.aeroexpress.business/) — деплоится автоматически из `main`
(workflow `Deploy Storybook` → ветка `gh-pages`).

## Стек

React 19 · TypeScript 5 · rsbuild · react-final-form · styled-components · @invoicebox/ui ·
vitest · Storybook 10 (storybook-react-rsbuild) · ESLint 9

## Команды

```bash
npm ci
npm start            # dev-сервер (API -> stage)
npm run build        # прод-сборка -> build/ (entries: index + tariffs.html)
npm test             # vitest
npm run lint         # eslint + prettier
npm run typecheck
npm run storybook    # Storybook на :6006 (API -> stage)
```

## Структура

- `src/widgets/App` — основной сценарий: connect к хосту, initial data (+ `onDataUpdate`),
  тарифы, форма, checkout, экран результата оплаты.
- `src/tariffs.tsx` — отдельная entry-страница тарифов (`/tariffs.html`), открывается
  хостом в новой вкладке по link-сообщению.
- `src/minappClient.ts` — ленивый синглтон SDK.
- `src/network` — API-клиент (fetch, явные мапперы snake_case ↔ camelCase), env-логика:
  dev → stage API, прод — same-origin `/api/public`, переопределение `PUBLIC_API_ENV=stage|prod`.

## Окружение

Прод раздаётся same-origin с бэкендом (`/api/public`). Отдельного SPA-fallback для
`/tariffs.html` не нужно — это статический файл сборки.
