import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';
import * as Code from '../../components/code/lib';
import * as BobrilHighligtJs from 'bobril-highlightjs';

// examples
import * as ExampleCounter from '../getStarted/examples/counter';
import * as ExampleTodo from '../getStarted/examples/todo';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const download = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            'Download'
        ];
    }
});

export default download;
