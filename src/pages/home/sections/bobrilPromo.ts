import * as b from 'bobril';
import * as Image from '../../../components/image/lib';
import * as assets from '../../../assets/assets';
import * as color from '../../../components/color/lib';
import * as fontStyle from '../../../components/fontStyle/lib';

interface IData {
    onGetStartedClick: () => void;
    onDownloadClick: () => void;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = b.styledDiv(
            [
                getBobrilLogo(),
                b.styledDiv(
                    [
                        getBobrilNotice(),
                        getButtons(d)
                    ],
                    {
                        marginTop: -130
                    }
                )
            ],
            {
                marginTop: -24
            }
        )
    }
});

function getBobrilLogo(): b.IBobrilChildren {
    return Image.create({
        asset: assets.bobrilLogo,
        width: 555,
        height: 549,
        style: {
            margin: 'auto'
        }
    });
}

function getBobrilNotice(): b.IBobrilChildren {
    return [
        b.styledDiv(
            'BOBRIL',

            fontStyle.headerText01,
            {color: color.color04}
        ),
        b.styledDiv(
            'is a component-oriented framework for creating web applications inspired by ReactJS' +
            ' (Virtual DOM, components with state) and Mithril (small size, more complete framework).',
            {
                marginTop: 30,
            },
            fontStyle.headerText02,
            {color: color.color04}
        )
    ]
}

function getButtons(d: IData): b.IBobrilChildren {
    return [];
}

