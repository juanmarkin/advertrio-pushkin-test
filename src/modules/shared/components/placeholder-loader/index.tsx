import style from './styles.module.scss';
import cn from 'classnames';

type props = {
    width: number|string;
    height: number|string;
    borderRadius?: number|null;
    circle?: boolean;
}

export function PlaceholderLoader({width, height, borderRadius = null, circle = false}: props) {
    return (
        <div className={style.placeholderLoader} style={{width, height}}>
            <div className={cn(
                    style.placeholderLoader__container,
                    {
                        [style.placeholderLoader__container_containerCircle]: circle,
                    }
                )}
                 style={borderRadius ? {borderRadius} : {}}>
                <div className={style.placeholderLoader__background}/>
            </div>
        </div>
    )
}