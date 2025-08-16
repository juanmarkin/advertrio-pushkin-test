'use client';

import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../../../shared/hooks/use-app-dispatch';
import { setControlsVisible } from '../../../shared/store/shared.slice';
import styles from './styles.module.scss';

export function ContextButton() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className={styles.contextButton}>
            <button
                className={styles.contextButton__left}
                onClick={() => {
                    sessionStorage.setItem('animationPlay', 'true');
                    router.push('/manuscripts');
                }}
            >
                <ArrowIcon />
            </button>
            <button className={styles.contextButton__main} onClick={() => dispatch(setControlsVisible())}>
                Контекст
            </button>
            <button className={styles.contextButton__right}>
                <ArrowIcon />
            </button>
        </div>
    );
}

const ArrowIcon = () => (
    <svg width='27' height='64' viewBox='0 0 27 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11.8835 0H27V32V64H11.8835L0 32L11.8835 0Z' fill='#3A5547' />
        <g clipPath='url(#clip0_128_65)'>
            <path d='M18.25 10L10 32L18.25 54' stroke='white' strokeWidth='2' strokeLinecap='square' />
        </g>
        <defs>
            <clipPath id='clip0_128_65'>
                <rect width='12' height='48' fill='white' transform='translate(8 8)' />
            </clipPath>
        </defs>
    </svg>
);
