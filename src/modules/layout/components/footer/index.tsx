'use client';

import { ContextButton } from '@modules/main/components/context-button';
import styles from './styles.module.scss';
import { useAppSelector } from '../../../shared/hooks/use-app-selector';
import { ContextButtonType, selectContextButtonPosition } from '../../../shared/store/shared.slice';
import { useEffect, useState } from 'react';
import { TimelinePoint } from '../timeline-point';
import cn from 'classnames';

export function Footer() {
    const buttonPosition = useAppSelector(selectContextButtonPosition);
    const [scaleWidth, setScaleWidth] = useState<number>(1520);

    const calculateButtonPosition = (position: ContextButtonType, scaleWidth: number) => {
        switch (position) {
            case 'center':
                return {
                    transform: 'translateX(-50%)',
                };
            case 'left':
                return {
                    transform: `translateX(${(-1 * scaleWidth) / 2 + 200}px)`,
                };
            case 'right':
                return {
                    transform: `translateX(${scaleWidth / 2 - 400}px)`,
                };
        }
    };

    useEffect(() => {
        const setWidth = () => {
            if (window.innerWidth > 1600) {
                setScaleWidth(1520);
                return;
            }

            setScaleWidth(window.innerWidth - 80);
        };

        setWidth();
        window.addEventListener('resize', setWidth);
        return () => document.removeEventListener('resize', setWidth);
    }, []);

    return (
        <footer className={styles.footer}>
            <div className='wrapper'>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__scale}>
                        <div
                            className={cn(
                                styles.footer__scalePoint,
                                styles.footer__scalePoint_start,
                            )}
                        >
                            <TimelinePoint year='1799' />
                        </div>
                        <div
                            className={cn(styles.footer__scalePoint, styles.footer__scalePoint_end)}
                        >
                            <TimelinePoint year='1837' layout={'right'} />
                        </div>
                    </div>
                    <div
                        className={styles.footer__contextButton}
                        style={calculateButtonPosition(buttonPosition, scaleWidth)}
                    >
                        <ContextButton />
                    </div>
                </div>
            </div>
        </footer>
    );
}
