'use client';

import { Source } from '@modules/main/components/source';
import styles from './page.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../modules/shared/hooks/use-app-dispatch';
import { setContextButtonPosition, setControlsHidden } from '../modules/shared/store/shared.slice';
import { AnimatePresence, motion } from 'motion/react';
import { Controls } from '@modules/layout/components/controls';
import cn from 'classnames';

export default function Home() {
    const dispatch = useAppDispatch();

    // Set initial button position
    useEffect(() => {
        dispatch(setContextButtonPosition('center'));
    }, []);

    // Set controls hidden
    useEffect(() => {
        dispatch(setControlsHidden(false));
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className={styles.page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className='wrapper'>
                    <div className={styles.page__container}>
                        <aside className={styles.page__aside}>
                            <Controls side='left' />
                        </aside>
                        <Source />
                        <aside className={cn(styles.page__aside, styles.page__aside_right)}>
                            <Controls side='right' />
                        </aside>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
