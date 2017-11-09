import * as b from 'bobril';
import * as router from './pages/router';
import app from './pages/app';
import home from './pages/home/page';
import documentation from './pages/documentation/page';
import guides from './pages/guides/page';
import getStarted from './pages/getStarted/page';
import download from './pages/download/page';

loadGithubMarkdownStyles();

b.routes(
    b.route({handler: app}, [
        b.route({url: `/${router.home}`, name: router.home, handler: home}),
        b.route({url: `/${router.getStarted}`, name: router.getStarted, handler: getStarted}),
        b.route({url: `/${router.guides}`, name: router.guides, handler: guides}),
        b.route({url: `/${router.documentation}`, name: router.documentation, handler: documentation}),
        b.route({url: `/${router.download}`, name: router.download, handler: download}),
        b.routeDefault({handler: home})
    ])
);

function loadGithubMarkdownStyles() {
    const markdownCss = b.asset('../node_modules/github-markdown-css/github-markdown.css');

    document.addEventListener('DOMContentLoaded', function (event) {
        const head = document.getElementsByTagName('head')[0];
        const s = document.createElement('link');
        s.setAttribute('rel', 'stylesheet');
        s.setAttribute('href', markdownCss);
        head.appendChild(s);
        b.injectCss('html,body{margin:0; padding:0; height:100%; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif !important}');

        // Override github style
        b.injectCss('.markdown-body {color: #ececed} .markdown-body .highlight pre, .markdown-body pre {background: #4c5060 ; color: #cacdd4}');

    });
}
