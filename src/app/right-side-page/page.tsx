'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { Source } from '@modules/main/components/source';
import cn from 'classnames';
import { useAppDispatch } from '../../modules/shared/hooks/use-app-dispatch';
import { setContextButtonPosition } from '../../modules/shared/store/shared.slice';
import { PlaceholderLoader } from '../../modules/shared/components/placeholder-loader';
import { AnimatePresence, motion } from 'motion/react';

export default function CommentsPage() {
    const [finalLayout, setFinalLayout] = useState<boolean>(false);
    const [animate, setAnimate] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setContextButtonPosition('left'));
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
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <PlaceholderLoader width={'100%'} height={600} borderRadius={30} />
                            </motion.div>
                        </AnimatePresence>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
