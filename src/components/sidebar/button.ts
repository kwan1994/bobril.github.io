import * as b from 'bobril';
import * as color from '../color/lib';
import * as fontStyle from '../fontStyle/lib';

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
            fontStyle.menuText02,
            d.isActive && {color: color.color03}
        );
    },

    onPointerDown(ctx: IContext): boolean {
        ctx.data.action();
        return true;
    }
});

export const buttonStyle = b.styleDef({
    cursor: 'pointer',
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 34,
    fontWeight: 400,
    color: color.color01
});