import * as b from 'bobril';
import * as BasicLayout from '../components/lBasicLayout/lib';
import * as LMainContent from '../components/lMainContent/lib';
import * as AppBar from '../components/appBar/lib';
import * as router from './router';
import * as Image from '../components/image/lib';
import * as assets from '../assets/assets';


interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    appHeight: number;
}

const app = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {

        const actualPageId = getActualPageId();

        me.children = [
            BasicLayout.create({
                header: AppBar.create({
                    contentWidth: 1000,
                    leftChildren: [
                        b.styledDiv(
                            Image.create({
                                asset: assets.menuIcon,
                                width: 24,
                                height: 14
                            }),
                            {
                                paddingRight: 12
                            }
                            ),
                        AppBar.Button.create({
                            label: 'BOBRIL',
                            isActive: actualPageId === router.home,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.home));
                            }
                        }),
                        AppBar.Button.create({
                            label: 'GUIDES',
                            isActive: actualPageId === router.guides,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.guides));
                            }
                        }),
                        AppBar.Button.create({
                            label: 'DOCS',
                            isActive: actualPageId === router.documentation,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.documentation));
                            }
                        })
                    ],
                    rightChildren: [
                        AppBar.Button.create({
                            label: 'GitHub',
                            action: () => {
                                window.open('https://github.com/Bobris/Bobril')
                            }
                        })
                    ]
                }),
                content: [
                    LMainContent.create({
                        content: [
                            me.data.activeRouteHandler()
                        ]
                    })
                ]
            }),
        ];

        b.style(
            me,
            ctx.appHeight && {height: ctx.appHeight}
        )
    },
    postUpdateDom(ctx: IContext) {
        // Update correct height of the application
        const currHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (currHeight !== ctx.appHeight) {
            ctx.appHeight = currHeight;
            b.invalidate(ctx);
        }
    },
});

function getActualPageId(): string {
    return b.getActiveRoutes()[0].name || router.home;
}

export default app;