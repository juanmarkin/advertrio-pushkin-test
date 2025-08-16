import Link from 'next/link';
import styles from './styles.module.scss';

const items = ['Каталог', 'Произведения', 'Стихотворения', '«Внемли, о Гелиос, серебряным луком звенящий…»'];

export function BreadCrumbs() {
    return (
        <div className={styles.container}>
            <div className='wrapper'>
                <div className={styles.wrapper}>
                    {items.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <Link href={'/'}>{item}</Link>
                            {index < items.length - 1 && <ArrowIcon />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const ArrowIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='6' height='11' viewBox='0 0 6 11' fill='none'>
        <path d='M0 9.325L3.7085 5.5L0 1.675L1.1417 0.5L6 5.5L1.1417 10.5L0 9.325Z' fill='#D4D4D4' />
    </svg>
);
