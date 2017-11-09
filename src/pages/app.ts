import * as b from 'bobril';
import * as color from '../components/color/lib';
import * as BasicLayout from '../components/lBasicLayout/lib';
import * as LMainContent from '../components/lMainContent/lib';
import * as AppBar from '../components/appBar/lib';
import * as SideBar from '../components/sidebar/lib';
import * as router from './router';
import * as Image from '../components/image/lib';
import * as assets from '../assets/assets';


interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    appHeight: number;
    menuVisible: boolean;
}

const app = b.createComponent<IData>({
    init(ctx: IContext) {
        ctx.menuVisible = false;
    },

    render(ctx: IContext, me: b.IBobrilNode) {

        const actualPageId = getActualPageId();

        me.children = [
            BasicLayout.create({
                sidebar: ctx.menuVisible && SideBar.create({
                    logo: Image.create({
                        asset: assets.bobrilLogoGrey,
                        width: 130,
                        height: 116,
                        style: {
                            opacity: .75
                        }
                    }),
                    items: [
                        SideBar.Button.create({
                            label: 'HOME',
                            isActive: actualPageId === router.home,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.home));
                            }
                        }),
                        SideBar.Button.create({
                            label: 'GET STARTED',
                            isActive: actualPageId === router.getStarted,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.getStarted));
                            }
                        }),
                        SideBar.Button.create({
                            label: 'DOWNLOAD',
                            isActive: actualPageId === router.download,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.download));
                            }
                        }),
                        SideBar.Button.create({
                            label: 'GUIDES',
                            isActive: actualPageId === router.guides,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.guides));
                            }
                        }),
                        SideBar.Button.create({
                            label: 'DOCS',
                            isActive: actualPageId === router.documentation,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.documentation));
                            }
                        })
                    ]
                }),
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
                            label: 'MENU',
                            isActive: true,
                            action : () => {
                                ctx.menuVisible = !ctx.menuVisible;
                                b.invalidate(ctx);
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
                        background: actualPageId === router.home ? color.color01 : color.color02,
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