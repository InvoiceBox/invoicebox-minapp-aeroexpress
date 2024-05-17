import type { Meta, StoryObj } from '@storybook/react';
import { App, TProps } from '.';
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

const meta: Meta<typeof App> = {
    title: 'widgets/App',
    component: App,
    tags: ['autodocs'],
};

export default meta;

const APP_ID = 'widgets-app--default';
const IFRAME_ID = 'IFRAME_ID';

const sendMessage = (message: unknown) => {
    var iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement;
    iframe.contentWindow!.postMessage(message, '*');
};

const IFrame: FC = () => {
    const [height, setHeight] = useState(287);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.id !== APP_ID) return;
            const data = event.data as
                | TInitMessageTo
                | THeightMessageTo
                | TLinkMessageTo
                | TUnavailableMessageTo
                | TDoneMessageTo
                | TErrorMessageTo;
            action('message from app')(data);

            if (data.action === 'init') {
                const message: TInitMessageFrom = {
                    id: APP_ID,
                    action: 'init',
                    data: {
                        public: {
                            fullHeight: false,
                            locale: 'ru',
                            minappType: 'suborder',
                            orderContainerId: 'order-container-id',
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
    }, []);

    return (
        <div style={{ padding: 15 }}>
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
                    src={`/iframe.html?viewMode=story&id=${APP_ID}&args=`}
                    frameBorder="0"
                    title="title"
                    width="100%"
                    scrolling="no"
                />
            </div>
        </div>
    );
};

export const Default: StoryObj<TProps> = {};

export const Available: StoryObj<TProps> = {
    render: () => <IFrame />,
};
