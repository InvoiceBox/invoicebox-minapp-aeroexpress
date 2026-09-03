import { expect, test, Page } from '@playwright/test';

// Смоук против СОБРАННОГО бандла в настоящем браузере: ловит ошибки, которых не видят
// jsdom-тесты и tsc (пример-инцидент: незаменённый process.env.* ронял приложение до init).

const APP_ID = 'smoke-test';

const INITIAL_DATA = {
    public: {
        orderContainerId: 'oc-smoke',
        minappType: 'suborder',
        fullHeight: false,
        shopId: 1,
        userEmail: 'smoke@example.com',
        userName: 'Смоук Тестович',
        userPhone: '+79990000000',
        locale: 'ru',
    },
    private: { metaData: [{ iataCode: 'SVO' }] },
};

const TARIFFS_RESPONSE = {
    data: [
        {
            id: 1,
            name: 'Стандарт',
            description: 'Билет в одну сторону',
            days_from: 0,
            days_to: 90,
            seats_select: false,
            active: true,
            price: 450,
            max_tickets: 10,
            provider_tariff_id: 7,
            created_at: '2026-01-01T00:00:00Z',
        },
    ],
    extendedData: [],
    metaData: { totalCount: 1, pageSize: 100, page: 1 },
};

const collectErrors = (page: Page): string[] => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
    page.on('console', (message) => {
        if (message.type() === 'error') errors.push(`console: ${message.text()}`);
    });
    return errors;
};

test('мини-апп поднимается и рендерит форму после init от хоста', async ({ page }) => {
    const errors = collectErrors(page);
    await page.route('**/api/public/tariffs', (route) => route.fulfill({ json: TARIFFS_RESPONSE }));

    await page.goto(`/?id=${APP_ID}`);

    // Эмуляция хоста: сообщение с собственного origin SDK принимает (канал RN WebView)
    await page.evaluate(
        ([id, data]) => {
            window.postMessage({ id, action: 'init', data }, '*');
        },
        [APP_ID, INITIAL_DATA] as const,
    );

    await expect(page.getByText('Дата поездки')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Добавить в счёт' })).toBeVisible();
    expect(errors).toEqual([]);
});

test('страница тарифов открывается без ошибок', async ({ page }) => {
    const errors = collectErrors(page);
    await page.route('**/api/public/tariffs', (route) => route.fulfill({ json: TARIFFS_RESPONSE }));

    await page.goto('/tariffs.html');

    await expect(page.getByText('Стандарт')).toBeVisible();
    expect(errors).toEqual([]);
});
