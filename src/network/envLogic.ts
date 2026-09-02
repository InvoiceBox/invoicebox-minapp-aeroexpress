enum API_ORIGINS {
    stage = 'https://aeroexpress.stage.invbox.ru',
    prod = 'https://aeroexpressbusiness.ru',
}

const API_BASE_URL = '/api/public';

// PUBLIC_API_ENV инлайнится rsbuild'ом (префикс PUBLIC_): 'stage' | 'prod'.
// Используется Storybook'ом и позволяет собрать стенд на чужой API.
// Дефолты: dev-сервер -> stage, прод-сборка -> относительный путь (same-origin).
const API_ENV_OVERRIDE = process.env.PUBLIC_API_ENV;
const IS_DEV = process.env.NODE_ENV === 'development';

const getApiUrlByEnv = (): string => {
    if (API_ENV_OVERRIDE === 'prod') return `${API_ORIGINS.prod}${API_BASE_URL}`;
    if (API_ENV_OVERRIDE === 'stage') return `${API_ORIGINS.stage}${API_BASE_URL}`;
    if (IS_DEV) return `${API_ORIGINS.stage}${API_BASE_URL}`;
    return API_BASE_URL;
};

class EnvLogic {
    getApiUrl() {
        return getApiUrlByEnv();
    }

    appendCurrentOrigin(href: string) {
        const { origin } = window.location;
        return `${origin}${href}`;
    }
}

export const envLogic = new EnvLogic();
