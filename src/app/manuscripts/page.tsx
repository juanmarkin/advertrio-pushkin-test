'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { Source } from '@modules/main/components/source';
import cn from 'classnames';
import { useAppDispatch } from '../../modules/shared/hooks/use-app-dispatch';
import { setContextButtonPosition } from '../../modules/shared/store/shared.slice';

export default function ManuscriptsPage() {
    const [finalLayout, setFinalLayout] = useState<boolean>(false);
    const [animate, setAnimate] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setContextButtonPosition('right'));
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;

        if (sessionStorage.getItem('animationPlay')) {
            setAnimate(true);
            timeout = setTimeout(() => {
                sessionStorage.removeItem('animationPlay');
            }, 1000);
        } else {
            setFinalLayout(true);
            setAnimate(false);
        }

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.container}>
            <div className='wrapper'>
                <div
                    className={cn(styles.wrapper, {
                        [styles.wrapper_final]: finalLayout,
                        [styles.wrapper_animate]: animate,
                    })}
                >
                    <div></div>
                    <div>
                        <Source animationStart />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
