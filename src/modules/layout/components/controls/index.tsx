'use client';

import styles from './styles.module.scss';
import { useAppSelector } from '../../../shared/hooks/use-app-selector';
import {
    selectControlsVisibility,
    setControlsHidden,
    setPageAnimated,
} from '../../../shared/store/shared.slice';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';
import { useAppDispatch } from '../../../shared/hooks/use-app-dispatch';
import Image from 'next/image';

const controlsLeft = [
    { name: 'Рукописи', link: '/manuscripts' },
    { name: 'Редакции и варианты', link: '/manuscripts' },
    { name: 'Прижизненные издания', link: '/manuscripts' },
    { name: '*Атрибуты', link: '/manuscripts' },
];

const controlsRight = [
    { name: 'Научные комментарии', link: '/right-side-page' },
    { name: 'Библиография', link: '/right-side-page' },
    { name: 'Экскурсы', link: '/right-side-page' },
    { name: 'Упоминания', link: '/right-side-page' },
];

type Props = {
    side: 'left' | 'right';
};

export function Controls({ side }: Props) {
    const isVisible = useAppSelector(selectControlsVisibility);
    const router = useRouter();
    const controls = side === 'left' ? controlsLeft : controlsRight;
    const dispatch = useAppDispatch();

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={cn(styles.controls, {
                        [styles.controls_right]: side === 'right',
                    })}
                    initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                >
                    <div className={styles.controls__items}>
                        {controls.map((control, index) => (
                            <span
                                className={styles.controls__item}
                                onClick={() => {
                                    dispatch(setPageAnimated(true));
                                    dispatch(setControlsHidden(false));
                                    router.push(control.link);
                                }}
                                key={index}
                            >
                                {control.name}
                            </span>
                        ))}
                    </div>

                    <Image
                        className={styles.controls__decor}
                        src={'/controls-decor.svg'}
                        width={80}
                        height={181}
                        priority
                        alt=''
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
