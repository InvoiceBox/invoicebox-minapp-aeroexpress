import type { Meta, StoryObj } from '@storybook/react';
import { App } from '.';
import { FC, useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
    TInitMessageFrom,
    TDoneMessageTo,
    TErrorMessageTo,
    THeightMessageTo,
    TInitMessageTo,
    TLinkMessageTo,
    TUnavailableMessageTo,
} from '@invoicebox/minapp-sdk';
import '../../index.css';
import { Typography } from '@invoicebox/ui';

const meta: Meta<typeof App> = {
    title: 'widgets/App',
    component: App,
    tags: ['autodocs'],
};

export default meta;

enum USE_CASES {
    real = 'widgets-app-inner--inner-available-real-fetch-real-submit',
    success = 'widgets-app-inner--inner-available-success-fetch-success-submit',
    unavailable = 'widgets-app-inner--inner-unavailable',
    fetchError = 'widgets-app-inner--inner-available-error-fetch',
    submitError = 'widgets-app-inner--inner-available-success-fetch-error-submit',
    heightByContainer = 'widgets-app-inner--inner-height-by-container',
}

const IFRAME_ID = 'IFRAME_ID';

const sendMessage = (message: unknown) => {
    var iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement;
    iframe.contentWindow!.postMessage(message, '*');
};

type TIFrameProps = {
    initialUseCase: USE_CASES;
    initialOrderContainerId?: string;
    initialMetaData?: unknown;
    initialFullHeight?: boolean;
};

const IFrame: FC<TIFrameProps> = ({
    initialUseCase,
    initialOrderContainerId,
    initialMetaData,
    initialFullHeight = false,
}) => {
    const [height, setHeight] = useState(!initialFullHeight ? 287 : 400);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.id !== initialUseCase) return;
            const { id, ...data } = event.data as
                | TInitMessageTo
                | THeightMessageTo
                | TLinkMessageTo
                | TUnavailableMessageTo
                | TDoneMessageTo
                | TErrorMessageTo;
            action('message from app')(data);

            if (data.action === 'init') {
                const message: TInitMessageFrom = {
                    id: initialUseCase,
                    action: 'init',
                    data: {
                        public: {
                            fullHeight: initialFullHeight as false,
                            locale: 'ru',
                            minappType: 'suborder',
                            orderContainerId: initialOrderContainerId || 'order-container-id',
                            shopId: 1,
                            userEmail: 'user@email.ru',
                            userName: 'user-name',
                            userPhone: '+79999999999',
                        },
                        private: {
                            metaData: [
                                initialMetaData || {
                                    iataCode: 'VKO',
                                },
                            ],
                        },
                    },
                };
                sendMessage(message);
                return;
            }

            if (data.action === 'height') {
                setHeight(data.data);
                return;
            }
        };
        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [initialUseCase, initialOrderContainerId, initialMetaData, initialFullHeight]);

    return (
        <div
            style={{
                border: '1px solid #9d9',
                borderRightWidth: 2,
                display: 'flex',
            }}
        >
            <iframe
                height={height}
                id={IFRAME_ID}
                src={`/iframe.html?env=stage&viewMode=story&id=${initialUseCase}&args=`}
                frameBorder="0"
                title="title"
                width="100%"
                scrolling="no"
            />
        </div>
    );
};

export const Success: StoryObj<{}> = {
    render: () => {
        return (
            <div style={{ padding: 15 }}>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="bodyL">
                        <div>Высоту сообщает мини-приложение</div>
                        <div>Успешная загрузка тарифов</div>
                        <div>Успешная отправка формы</div>
                    </Typography>
                </div>
                <IFrame initialUseCase={USE_CASES.success} />
            </div>
        );
    },
};

export const Unavailable: StoryObj<{}> = {
    render: () => {
        return (
            <div style={{ padding: 15 }}>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="bodyL">
                        <div>Высоту сообщает мини-приложение</div>
                        <div>Приложение сообщает, что оно не доступно</div>
                    </Typography>
                </div>
                <IFrame initialUseCase={USE_CASES.unavailable} initialMetaData={{}} />
            </div>
        );
    },
};

export const FetchError: StoryObj<{}> = {
    render: () => {
        return (
            <div style={{ padding: 15 }}>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="bodyL">
                        <div>Высоту сообщает мини-приложение</div>
                        <div>Ошибка загрузки тарифов</div>
                    </Typography>
                </div>
                <IFrame initialUseCase={USE_CASES.fetchError} />
            </div>
        );
    },
};

export const SubmitError: StoryObj<{}> = {
    render: () => {
        return (
            <div style={{ padding: 15 }}>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="bodyL">
                        <div>Высоту сообщает мини-приложение</div>
                        <div>Успешная загрузка тарифов</div>
                        <div>Ошибка отправки формы</div>
                    </Typography>
                </div>
                <IFrame initialUseCase={USE_CASES.submitError} />
            </div>
        );
    },
};

export const HeightByContainer: StoryObj<{}> = {
    render: () => {
        return (
            <div style={{ padding: 15 }}>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="bodyL">
                        <div>Мини-приложение подстраивается под высоту контейнера</div>
                    </Typography>
                </div>
                <IFrame initialUseCase={USE_CASES.heightByContainer} initialFullHeight />
            </div>
        );
    },
};

export const Real: StoryObj<{ initialOrderContainerId: string }> = {
    args: {
        initialOrderContainerId: 'order-container-id',
    },
    render: ({ initialOrderContainerId }) => {
        return (
            <div style={{ padding: 15 }}>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="bodyL">
                        <div>Высоту сообщает мини-приложение</div>
                        <div>Тарифы загружаются с сервера</div>
                        <div>Форма отправляется на сервер</div>
                    </Typography>
                </div>
                <IFrame
                    key={initialOrderContainerId}
                    initialUseCase={USE_CASES.real}
                    initialOrderContainerId={initialOrderContainerId}
                />
            </div>
        );
    },
};
