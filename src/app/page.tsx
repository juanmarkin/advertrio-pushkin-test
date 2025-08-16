'use client';

import { Source } from '@modules/main/components/source';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../modules/shared/hooks/use-app-dispatch';
import {
    selectMainPageAnimation,
    setContextButtonPosition,
    setControlsHidden,
} from '../modules/shared/store/shared.slice';
import { Controls } from '@modules/layout/components/controls';
import cn from 'classnames';
import { useAppSelector } from '../modules/shared/hooks/use-app-selector';

export default function Home() {
    const dispatch = useAppDispatch();
    const animationDirection = useAppSelector(selectMainPageAnimation);

    // Set initial button position
    useEffect(() => {
        dispatch(setContextButtonPosition('center'));
    }, []);

    // Set controls hidden
    useEffect(() => {
        dispatch(setControlsHidden(false));
    }, []);

    return (
        <div className={styles.page}>
            <div className='wrapper'>
                <div
                    className={cn(styles.page__container, {
                        [styles.page__container_animateLeft]: animationDirection === 'left',
                        [styles.page__container_animateRight]: animationDirection === 'right',
                    })}
                >
                    <aside className={styles.page__aside}>
                        <Controls side='left' />
                    </aside>
                    <Source />
                    <aside className={cn(styles.page__aside, styles.page__aside_right)}>
                        <Controls side='right' />
                    </aside>
                </div>
            </div>
        </div>
    );
}
