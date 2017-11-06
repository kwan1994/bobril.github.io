import * as b from 'bobril';
import * as Href from '../../../components/href/lib';
import * as fontStyle from '../../../components/fontStyle/lib';
import {color04} from "../../../components/color/lib";
import * as Panel from '../../../components/panel/lib';
import * as Grid from '../../../components/grid/lib';
import * as Image from '../../../components/image/lib';
import * as assets from '../../../assets/assets';

const panelIconDimension = 40;

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(_ctx: IContext, me: b.IBobrilNode) {

        me.children = [
            b.styledDiv(
                [
                    getProlog(),
                    getFeaturesDescription(),
                    getEpilog()
                ],
                fontStyle.paragText01,
                {
                    textAlign: 'center',
                    color: color04
                }
            )
        ];
    }
});

function getProlog() {
    return b.styledDiv(
        ' Compared to ReactJS Added speed, autoprefixer, CSS in JS, router, additional lifecycle methods, ' +
        'only rAF based repaint. Bobril ignores Isomorphic JavaScript, because it would increase size and is not ' +
        'needed for SEO anyway (Google bot supports JavaScript). Client applications are expected to be written in ' +
        'TypeScript. Because it is heavily used in production, backward compatibility is king. Any new feature must ' +
        'be optional or its perceived value to minified size ratio must be high enough.',
        {
            marginTop: 120
        }
    );
}

function getFeaturesDescription() {
    return b.styledDiv(
        Grid.create({
            itemsPerRow: 3,
            children: [
                Panel.create({
                    icon: Image.create({
                        asset: assets.developerBoard40,
                        width: panelIconDimension,
                        height: panelIconDimension
                    }),
                    label: 'Component oriented',
                    value: 'There will be a perfect text :-)'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.panoramaVertical40,
                        width: panelIconDimension,
                        height: panelIconDimension
                    }),
                    label: 'Small and fast',
                    value: 'There will be a perfect text :-)'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.flashOn40,
                        width: panelIconDimension,
                        height: panelIconDimension
                    }),
                    label: 'Fast virtual DOM diffing',
                    value: 'There will be a perfect text :-)'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.devicesOther40,
                        width: panelIconDimension,
                        height: panelIconDimension
                    }),
                    label: 'Media detection',
                    value: 'There will be a perfect text :-)'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.eventNote40,
                        width: panelIconDimension,
                        height: panelIconDimension
                    }),
                    label: 'Events normalization',
                    value: 'There will be a perfect text :-)'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.icTrendingUp40,
                        width: panelIconDimension,
                        height: panelIconDimension
                    }),
                    label: 'Easy to learn',
                    value: 'There will be a perfect text :-)'
                })
            ]
        }),
        {
            marginTop: 100
        }
    );
}

function getEpilog() {
    return [
        b.styledDiv([
                'Bobril is intended to be used with ',
                Href.create({
                    label: 'Bobril Build',
                    href: 'https://github.com/Bobris/bobril-build',
                    newWindow: true
                }),
                '. It will ensure continuous build of your application. ' +
                'It supports: copying sprites, building big sprites, i18n.' +
                ' Bobril provide all this during optimal TypeScript compilation.'
            ],
            {
                marginTop: 100
            }
        ),
        b.styledDiv([

                'For modern design you can use bobril material design implementation ',
                Href.create({
                    label: 'Bobril-m',
                    href: 'https://github.com/Bobril/Bobril-m',
                    newWindow: true
                }),
                '. It is heavily inspired by ',
                Href.create({
                    label: 'www.material-ui.com',
                    href: 'http://www.material-ui.com',
                    newWindow: true
                }),
                '.'
            ],
            {
                marginTop: 24,
                paddingBottom: 120
            }
        )
    ];
}