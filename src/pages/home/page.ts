import * as b from 'bobril';
import * as router from '../router';
import * as styles from '../styles';
import * as LCenter from '../../components/lCenter/lib';
import * as color from '../../components/color/lib';
import * as BobrilPromo from './sections/bobrilPromo';
import * as About from './sections/about';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                LCenter.create({
                    children: BobrilPromo.create({
                        onGetStartedClick: () => {
                            b.runTransition(b.createRedirectPush(router.getStarted));
                        },
                        onDownloadClick: () => {

                        }
                    }),
                    maxWidth: styles.maxPageWidth
                }),
                bobrilPromoStyle
            ),
            LCenter.create({
                children: [
                    About.create()
                ],
                maxWidth: styles.maxPageWidth,
            })
        ]
    }
});

const imageContainerPadding = 24;
const bobrilPromoStyle = b.styleDef({
    textAlign: 'center',
    background: color.color02,
    height: `calc(100vh - 60px)`,
    minHeight: 700,
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding,
});

export default home;


