import React, { Component, ReactNode } from 'react';
import { getMinapp } from '../../minappClient';
import { InitErrorScreen } from '../InitErrorScreen';

type TProps = { children: ReactNode };
type TState = { hasError: boolean };

// Ошибка рендера раньше отдавала пустой iframe (errorElement роутера был <div/>),
// а хост ни о чём не узнавал. Теперь: экран ошибки + сообщение error хосту.
export class AppErrorBoundary extends Component<TProps, TState> {
    state: TState = { hasError: false };

    static getDerivedStateFromError(): TState {
        return { hasError: true };
    }

    componentDidCatch(): void {
        try {
            const minapp = getMinapp();
            if (minapp.isConnected()) minapp.onError();
        } catch {
            // хост недоступен — достаточно экрана ошибки
        }
    }

    render(): ReactNode {
        if (this.state.hasError) return <InitErrorScreen />;
        return this.props.children;
    }
}
