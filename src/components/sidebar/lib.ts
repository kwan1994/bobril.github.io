import * as b from 'bobril';
import * as styles from './style';
import * as Divider from '../divider/lib';
import * as AppButton from './button';

export const Button = AppButton;

interface IData {
    logo: b.IBobrilChildren;
    items: b.IBobrilChildren[];
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = b.styledDiv([
                b.styledDiv(d.logo, styles.sidebarLogo),
                Divider.create(),
                b.styledDiv(
                    d.items.map((item) => {
                        return b.styledDiv(item, styles.sidebarItem)
                    }),
                    styles.sidebarItems
                )
            ],
            styles.sidebarWrapperContent
        );

        b.style(me, styles.sidebarWrapper);
    }
});