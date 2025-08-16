'use client';

import styles from './styles.module.scss';
import { useAppSelector } from '../../../shared/hooks/use-app-selector';
import { selectControlsVisibility } from '../../../shared/store/shared.slice';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

const controlsLeft = [
    { name: 'Рукописи', link: '/manuscripts' },
    { name: 'Редакции и варианты', link: '/editions-and-variants' },
    { name: 'Прижизненные издания', link: '/lifetime-editions' },
    { name: '*Атрибуты', link: '/attributes' },
];

const controlsRight = [
    { name: 'Научные комментарии', link: '/ыcientific-сomments' },
    { name: 'Библиография', link: '/bibliography' },
    { name: 'Экскурсы', link: '/excursions' },
    { name: 'Упоминания', link: '/mentions' },
];

type Props = {
    side: 'left' | 'right';
};

export function Controls({ side }: Props) {
    const isVisible = useAppSelector(selectControlsVisibility);
    const router = useRouter();
    const controls = side === 'left' ? controlsLeft : controlsRight;

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
                    {controls.map((control, index) => (
                        <span
                            className={styles.controls__item}
                            onClick={() => {
                                sessionStorage.setItem('animationPlay', 'true');
                                router.push(control.link);
                            }}
                            key={index}
                        >
                            {control.name}
                        </span>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
