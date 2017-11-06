import * as b from 'bobril';

interface IData {
    children: b.IBobrilChildren[];
    itemsPerRow: number;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        let act = [];
        let result = [];

        for (let i = 0; i < d.children.length; i++) {
            if (i !== 0 && i % d.itemsPerRow === 0) {
                result.push(addRow(act));
                act = [addItem(d.children[i])];
            } else {
                act.push(addItem(d.children[i]));
            }
        }

        if (act.length !== 0) {
            result.push(addRow(act));
        }

        me.children = result;

        b.style(
            me,
            containerStyle
        );
    }
});

function addRow(act: b.IBobrilChildren[]): b.IBobrilChildren {
    return b.styledDiv([...act], rowStyle);
}

function addItem(item: b.IBobrilChildren) {
    return b.styledDiv(item, itemStyle);
}

const containerStyle = b.styleDef({
    textAlign: 'center',
    width: '100%',
    margin: 'auto',
    overflow: 'auto'
});

const rowStyle = b.styleDef({
    overflow: 'auto'
});

const itemStyle = b.styleDef({
    margin: 'auto',
    display: 'inline-block',
    padding: 20
});