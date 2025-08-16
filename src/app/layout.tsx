import type { Metadata } from 'next';
import { Roboto, Spectral, Spectral_SC } from 'next/font/google';
import './globals.scss';
import { Header } from '@modules/layout/components/header';
import { Providers } from '../modules/shared/providers';
import { BreadCrumbs } from '@modules/layout/components/bread-crumbs';
import { Footer } from '@modules/layout/components/footer';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['cyrillic'],
});

const spectral = Spectral({
    variable: '--font-spectral',
    subsets: ['cyrillic'],
    weight: ['300'],
});

const spectralSc = Spectral_SC({
    variable: '--font-spectral-sc',
    subsets: ['cyrillic'],
    weight: ['500', '600'],
});

export const metadata: Metadata = {
    title: 'Advertrio test',
    description: 'Pushkin Digital',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru'>
            <body className={`${roboto.variable} ${spectral.variable} ${spectralSc.variable}`}>
                <Header />
                <BreadCrumbs />
                <Providers>
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
