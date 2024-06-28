enum URLS {
    dev = 'https://aeroexpress.dev.invbox.ru/api/public',
    stage = 'https://aeroexpress.stage.invbox.ru/api/public',
    prod = 'https://aeroexpressbusiness.ru/api/public',
}

export const ENV_PARAM_NAME = 'env';
const DEV_PARAM_VALUE = 'dev';
export const STAGE_PARAM_VALUE = 'stage';

class EnvLogic {
    private getEnv() {
        return new URL(window.location.href).searchParams.get(ENV_PARAM_NAME);
    }

    getBaseUrl() {
        const env = this.getEnv();

        if (env === DEV_PARAM_VALUE) return URLS.dev;

        if (env === STAGE_PARAM_VALUE) return URLS.stage;

        return URLS.prod;
    }

    appendEnv(href: string) {
        const url = new URL(href);
        const env = this.getEnv();

        if (!env) return href;

        url.searchParams.append(ENV_PARAM_NAME, env);

        return url.href;
    }
}

export const envLogic = new EnvLogic();
