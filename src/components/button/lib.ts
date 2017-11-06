import * as b from 'bobril';
import * as color from '../color/lib';
import * as fontStyle from '../fontStyle/lib';

export enum Type {
    Light,
    Dark
}

interface IData {
    label: string;
    action?: () => void;
    type: Type
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = d.label;

        b.style(
            me,
            buttonStyle,
            d.type === Type.Light && buttonLightStyle,
            d.type === Type.Light && fontStyle.buttonText01,
            d.type === Type.Dark && buttonDarkStyle,
            d.type === Type.Dark && fontStyle.buttonText01,
        );
    },

    onClick(ctx: IContext): boolean {
        const d = ctx.data;
        d.action && d.action();
        return true;
    },

    shouldStopBubble(ctx: IContext): boolean {
        return true;
    }
});

const height = 45;
const buttonStyle = b.styleDef({
    height: height,
    lineHeight: `${height}px`,
    borderRadius: '2px',
    paddingLeft: 42,
    paddingRight: 42,
    display: 'inline-block',
    cursor: 'pointer',
    marginLeft: 30,
    marginRight: 30
});

const buttonLightStyle = b.styleDef({
    background: color.color04,
    color: color.color01,
    boxShadow: '2px 2px 4px 0px rgba(22,24,26,0.15)'
}, {
    hover: {
        boxShadow: '2px 2px 8px 0px rgba(255,255,255,0.30)'
    }
});

const buttonDarkStyle = b.styleDef({
    background: color.color01,
    color: color.color04,
    '-webkit-box-shadow': '2px 2px 4px 0px rgba(22,24,26,0.30)',
    '-moz-box-shadow': '2px 2px 4px 0px rgba(22,24,26,0.30)',
    'box-shadow': '2px 2px 4px 0px rgba(22,24,26,0.30)'
}, {
    hover: {opacity: '0.80'}
});