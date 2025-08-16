import styles from './styles.module.scss';
import cn from 'classnames';

type Props = {
    year: string;
    layout?: 'left' | 'right';
};

export function TimelinePoint({ year, layout = 'left' }: Props) {
    return (
        <div
            className={cn(styles.point, {
                [styles.point_right]: layout === 'right',
            })}
        >
            <span>{year}</span>
        </div>
    );
}
