import * as b from 'bobril';
import * as color from '../color/lib';
import * as fontStyle from '../fontStyle/lib';

interface IData {
    icon: b.IBobrilChildren;
    label: string;
    value: b.IBobrilChildren;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv([
                    b.styledDiv(d.icon, panelIconStyle)
                ],
                panelLeftStyle
            ),
            b.styledDiv(
                [
                    b.styledDiv(
                        d.label,
                        panelHeadingStyle,
                        fontStyle.menuText01b
                    ),
                    b.styledDiv(
                        d.value,
                        panelValueStyle,
                        fontStyle.smallText01
                    )
                ],
                panelRightStyle
            )
        ];

        b.style(
            me,
            panelStyle
        );
    }
});

const panelStyle = b.styleDef({
    overflow: 'hidden',
    height: 120,
    width: 280,
    padding: 20,
    borderRadius: 2,
    background: color.color04,
    boxShadow: '0px 0px 5px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left'
});

const leftWidth = 40;
const panelLeftStyle = b.styleDef({
    cssFloat: 'left',
    width: leftWidth
});

const panelIconStyle = b.styleDef({
    cssFloat: 'left',
    width: 40,
    height: 40
});

const marginLeftMargin = 22;
const panelRightStyle = b.styleDef({
    marginLeft: marginLeftMargin,
    cssFloat: 'left',
    width: `calc(100% -  ${leftWidth + marginLeftMargin}px)`
});

const panelHeadingStyle = b.styleDef({
    color: color.color02
});
const panelValueStyle = b.styleDef({
    color: color.color02,
    marginTop: 12
});