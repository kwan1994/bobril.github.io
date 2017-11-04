import * as b from 'bobril';
import * as m from 'bobril-m';

export interface IData {
    label: string;
    action: () => void;
    isActive?: boolean;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.children = [
            d.label
        ];

        b.style(
            me,
            buttonStyle,
            d.isActive && {color: m.white}
        );
    },

    onPointerDown(ctx: IContext): boolean {
        ctx.data.action();
        return true;
    }
});

export const buttonStyle = b.styleDef({
    cursor: 'pointer',
    height: 60,
    lineHeight: '60px',
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: 400,
    color: m.grey300
});