import * as b from 'bobril';
import * as styles from './styles';
import * as AppButton from './button';
import * as fontStyle from '../fontStyle/lib';

export const Button = AppButton;

interface IData {
    leftChildren: b.IBobrilChildren[];
    rightChildren?: b.IBobrilChildren[];
    contentWidth?: number;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(
                [
                    d.leftChildren && b.styledDiv(
                        d.leftChildren.map((button) => {
                            return b.styledDiv(
                                button,
                                styles.button,
                                fontStyle.menuText01
                            );
                        }),
                        styles.buttonsContainer
                    ),
                    d.rightChildren && b.styledDiv(
                        d.rightChildren.map((button) => {
                            return b.styledDiv(
                                button,
                                styles.rightButton,
                                fontStyle.menuText01s
                            );
                        }),
                        styles.rightButtonsContainer
                    )
                ],
                d.contentWidth && {
                    maxWidth: d.contentWidth,
                    margin: 'auto'
                }
            )
        ];

        b.style(
            me,
            styles.appBar
        );
    }
});