import Image from 'next/image';
import styles from './styles.module.scss';

const menuItems = [
    {
        name: 'Творчество',
        link: '/',
    },
    {
        name: 'Каталог',
        link: '/',
    },
    {
        name: 'О проекты',
        link: '/',
    },
    {
        name: 'Экскурсы',
        link: '/',
    },
];

export function Header() {
    return (
        <header className={styles.header}>
            <div className='wrapper'>
                <div className={styles.header__wrapper}>
                    <Image src={'/pushkin-digital-logo.svg'} width={205} height={20} alt='Pushkin Digital' />
                    <nav className={styles.header__menu}>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.header__actions}>
                        <button className={styles.header__button}>
                            <Image src={'/search-icon.svg'} width={16} height={16} alt='' />
                            <span>Найти на сайте</span>
                        </button>
                        <button className={styles.header__button}>Войти</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
