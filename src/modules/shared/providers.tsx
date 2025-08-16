'use client';

import { ReactNode } from 'react';
import StoreProvider from './store/store-provider';

type Props = {
    children: ReactNode;
};

export function Providers({ children }: Props) {
    return <StoreProvider>{children}</StoreProvider>;
}
