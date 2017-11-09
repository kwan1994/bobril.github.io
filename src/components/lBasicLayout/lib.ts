import * as b from 'bobril';
import * as styles from './styles';
import * as m from 'bobril-m';

const zDepthHeader = 2;

interface IData {
    header?: b.IBobrilChildren;
    content: b.IBobrilChildren;
    footer?: b.IBobrilChildren;
    sidebar?: b.IBobrilChildren;
    backgroundColor?: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            d.sidebar && b.styledDiv(
                d.sidebar,
                styles.sidebar
            ),
            d.header &&  b.styledDiv(
                d.header,
                styles.header,
                d.sidebar && styles.layoutWithSidebar
            ),
            d.content && b.styledDiv(
                d.content,
                styles.content,
                d.sidebar && styles.layoutWithSidebar
            ),
            d.footer && b.styledDiv(
                d.footer,
                styles.footer,
                d.sidebar && styles.layoutWithSidebar
            )
        ];

        b.style(
            me,
            styles.basicLayout,
            d.backgroundColor && {background: d.backgroundColor}
        );
    }
});