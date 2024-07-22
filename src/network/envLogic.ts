enum API_ORIGINS {
    dev = 'https://aeroexpress.dev.invbox.ru',
    stage = 'https://aeroexpress.stage.invbox.ru',
    prod = 'https://aeroexpressbusiness.ru',
}

enum ENV_VARIANTS {
    storybookDev = 'storybookDev',
    storybookProd = 'storybookProd',
    craDev = 'craDev',
    craProd = 'craProd',
}

const API_BASE_URL = '/api/public';

const IS_STORYBOOK_DEV = process.env.STORYBOOK_ENV_DEV === 'true';
const IS_STORYBOOK_PROD = process.env.STORYBOOK_ENV_PROD === 'true';
const IS_CRA_DEV = process.env.NODE_ENV === 'development';

const ENV_VARIANT = (() => {
    if (IS_STORYBOOK_DEV) return ENV_VARIANTS.storybookDev;
    if (IS_STORYBOOK_PROD) return ENV_VARIANTS.storybookProd;
    if (IS_CRA_DEV) return ENV_VARIANTS.craDev;
    return ENV_VARIANTS.craProd;
})();

const API_URLS: Record<ENV_VARIANTS, string> = {
    storybookDev: `${API_ORIGINS.stage}${API_BASE_URL}`,
    storybookProd: `${API_ORIGINS.prod}${API_BASE_URL}`,
    craDev: `${API_ORIGINS.stage}${API_BASE_URL}`,
    craProd: API_BASE_URL,
};

const API_URL = API_URLS[ENV_VARIANT];

class EnvLogic {
    getApiUrl() {
        return API_URL;
    }

    appendCurrentOrigin(href: string) {
        const { origin } = window.location;
        return `${origin}${href}`;
    }
}

export const envLogic = new EnvLogic();
