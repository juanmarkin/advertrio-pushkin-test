'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';
import { Source } from '@modules/main/components/source';
import cn from 'classnames';
import { useAppDispatch } from '../../modules/shared/hooks/use-app-dispatch';
import {
    selectPageAnimated,
    setContextButtonPosition,
} from '../../modules/shared/store/shared.slice';
import { PlaceholderLoader } from '../../modules/shared/components/placeholder-loader';
import { AnimatePresence, motion } from 'motion/react';
import { useAppSelector } from '../../modules/shared/hooks/use-app-selector';

export default function CommentsPage() {
    const dispatch = useAppDispatch();
    const hasAnimation = useAppSelector(selectPageAnimated);

    useEffect(() => {
        dispatch(setContextButtonPosition('left'));
    }, []);

    return (
        <div className={styles.container}>
            <div className='wrapper'>
                <div
                    className={cn(styles.wrapper, {
                        [styles.wrapper_animate]: hasAnimation,
                    })}
                >
                    <div />
                    <div>
                        <Source animationStart />
                    </div>
                    <div className={styles.content}>
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <PlaceholderLoader width={'100%'} height={600} borderRadius={30} />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <PlaceholderLoader width={'100%'} height={600} borderRadius={30} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
