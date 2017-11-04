import * as b from 'bobril';
import * as styles from '../styles';
import * as Divider from '../../components/divider/lib';
import * as LCenter from '../../components/lCenter/lib';
import * as color from '../../components/color/lib';

import * as GetStartedSection from './sections/getStarted';
import * as BobrilLogoSection from './sections/bobrilPromo';
import * as CoreFeaturesPromo from './sections/coreFeaturesPromo';

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
                    children: BobrilLogoSection.create({
                        onGetStartedClick: () => {

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
                    CoreFeaturesPromo.create(),
                    Divider.create(),
                    GetStartedSection.create()
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
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding
});

export default home;


