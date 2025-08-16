'use client';

import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../../shared/hooks/use-app-dispatch';
import {
    selectContextButtonPosition,
    selectControlsVisibility,
    setControlsHidden,
    setControlsVisible,
} from '../../../shared/store/shared.slice';
import styles from './styles.module.scss';
import cn from 'classnames';
import { useAppSelector } from '../../../shared/hooks/use-app-selector';

export function ContextButton() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const isActive = useAppSelector(selectControlsVisibility);
    const buttonPosition = useAppSelector(selectContextButtonPosition);

    return (
        <div
            className={cn(styles.contextButton, {
                [styles.contextButton_active]: isActive,
            })}
        >
            <button
                className={styles.contextButton__left}
                onClick={() => {
                    sessionStorage.setItem('animationPlay', 'true');
                    dispatch(setControlsHidden(false));

                    if (buttonPosition === 'left') {
                        router.push('/');
                        return;
                    }

                    router.push('/manuscripts');
                }}
                disabled={buttonPosition === 'right'}
            >
                <ArrowIcon />
            </button>
            <button
                className={styles.contextButton__main}
                onClick={() => {
                    if (buttonPosition === 'center') {
                        dispatch(setControlsVisible());
                        return;
                    }
                    router.push('/');
                }}
            >
                {buttonPosition === 'left' || buttonPosition === 'right' ? 'К тексту' : 'Контекст'}
            </button>
            <button
                className={styles.contextButton__right}
                onClick={() => {
                    sessionStorage.setItem('animationPlay', 'true');
                    dispatch(setControlsHidden(false));

                    if (buttonPosition === 'right') {
                        router.push('/');
                        return;
                    }

                    router.push('/right-side-page');
                }}
                disabled={buttonPosition === 'left'}
            >
                <ArrowIcon />
            </button>
        </div>
    );
}

const ArrowIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='48' viewBox='0 0 12 48' fill='none'>
        <g clipPath='url(#clip0_5_837)'>
            <path d='M10.25 2L2 24L10.25 46' stroke='white' strokeWidth='2' strokeLinecap='square' />
        </g>
        <defs>
            <clipPath id='clip0_5_837'>
                <rect width='12' height='48' fill='white' />
            </clipPath>
        </defs>
    </svg>
);
