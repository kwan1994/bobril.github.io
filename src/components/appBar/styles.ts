import * as b from 'bobril';
import * as color from '../color/lib';


export const height = 60;

export const appBar = b.styleDef({
    background: color.color01,
    overflow: 'hidden',
    height: height,
});

export const buttonsContainer = b.styleDef({
    cssFloat: 'left',
});

export const rightButtonsContainer = b.styleDef({
    cssFloat: 'right',
});

export const button = b.styleDef(
    {
        display: 'inline-block',
    }, {
        hover: {
            color: color.color04
        }
    }
);

export const rightButton = b.styleDef(
    {
        cssFloat: 'left',
    }, {
        hover: {
            color: color.color04
        }
    }
);