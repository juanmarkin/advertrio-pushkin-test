'use client';

import { useAppSelector } from '../../../shared/hooks/use-app-selector';
import { selectContextButtonPosition } from '../../../shared/store/shared.slice';
import styles from './styles.module.scss';
import cn from 'classnames';

const source = {
    text: `
        <p class=\"stixi\" s_num=\"1\">А в ненастные дни</p><p class=\"stixi\" s_num=\"2\">Собирались они</p><p class=\"stixi4\" s_num=\"3\">Часто.</p><p class=\"stixi\" s_num=\"4\">Гнули, &lt;- - - -&gt; их &lt;- - -&gt;!</p><p class=\"stixi\" s_num=\"5\">От пятидесяти</p><p class=\"stixi4\" s_num=\"6\">На сто.</p><p class=\"stixi\" s_num=\"7\">И выигрывали</p><p class=\"stixi\" s_num=\"8\">И отписывали</p><p class=\"stixi4\" s_num=\"9\">Мелом.</p><p class=\"stixi\" s_num=\"10\">Так в ненастные дни</p><p class=\"stixi\" s_num=\"11\">Занимались они</p><p class=\"stixi4\" s_num=\"12\">Делом.</p><p><br>&nbsp;</p>
`,
    title: `«Внемли, о Гелиос,<br/>серебряным луком<br/> звенящий…»`,
};

type Props = {
    animationStart?: boolean;
};

export function Source({ animationStart = false }: Props) {
    const buttonPosition = useAppSelector(selectContextButtonPosition);
    const isAside = buttonPosition === 'right' || buttonPosition === 'left';
    const isCenter = buttonPosition === 'center';

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <div className={styles.tab}>
                    <span>поздняя редакция</span>
                </div>
                <div className={styles.tab}>
                    <span>поздняя редакция</span>
                </div>
                <div className={styles.tab}>
                    <span>ранняя редакция</span>
                </div>
            </div>

            <div className={styles.source}>
                <h1
                    className={cn(styles.source__title, {
                        [styles.source__title_aside]: isAside,
                        [styles.source__title_center]: isCenter,
                    })}
                    dangerouslySetInnerHTML={{ __html: source.title }}
                />
                <div
                    className={cn(styles.source__text, {
                        [styles.source__text_aside]: isAside,
                    })}
                    dangerouslySetInnerHTML={{ __html: source.text }}
                />
            </div>
        </div>
    );
}
