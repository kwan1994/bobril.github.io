import * as b from 'bobril';
import * as color from '../color/lib';

interface IData {
    color?: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        b.style(
            me,
            dividerStyle,
            d.color && {background: d.color}
        );
    }
});

export const dividerStyle = b.styleDef({
    background: color.color03,
    width: '63.3%',
    margin: 'auto',
    height: 2,
    marginTop: 40,
    marginBottom: 40
});