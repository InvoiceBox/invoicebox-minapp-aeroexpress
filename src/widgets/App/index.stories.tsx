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
    usual = 'widgets-app-inner--inner-available-real-fetch-real-submit',
}

const IFRAME_ID = 'IFRAME_ID';

const sendMessage = (message: unknown) => {
    var iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement;
    iframe.contentWindow!.postMessage(message, '*');
};

type TIFrameProps = {
    initialUseCase: USE_CASES;
    initialOrderContainerId: string;
};

const IFrame: FC<TIFrameProps> = ({ initialUseCase, initialOrderContainerId }) => {
    const [height, setHeight] = useState(287);

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
                            fullHeight: false,
                            locale: 'ru',
                            minappType: 'suborder',
                            orderContainerId: initialOrderContainerId,
                            shopId: 1,
                            userEmail: 'user@email.ru',
                            userName: 'user-name',
                            userPhone: '+79999999999',
                        },
                        private: {
                            metaData: [
                                {
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
    }, [initialUseCase, initialOrderContainerId]);

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

export const Usual: StoryObj<{ initialUseCase: USE_CASES; initialOrderContainerId: string }> = {
    args: {
        initialUseCase: USE_CASES.usual,
        initialOrderContainerId: 'order-container-id',
    },
    render: ({ initialUseCase, initialOrderContainerId }) => {
        const key = initialUseCase + initialOrderContainerId;
        return (
            <div style={{ padding: 15 }}>
                <div style={{ paddingBottom: 5 }}>
                    <Typography variant="bodyL">
                        <div>Корректная инициализация</div>
                        <div>Высоту сообщает мини-приложение</div>
                        <div>Тарифы загружаются с сервера</div>
                        <div>Форма отправляется на сервер</div>
                    </Typography>
                </div>
                <IFrame
                    key={key}
                    initialUseCase={initialUseCase}
                    initialOrderContainerId={initialOrderContainerId}
                />
            </div>
        );
    },
};
