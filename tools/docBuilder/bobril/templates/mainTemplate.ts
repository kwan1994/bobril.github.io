interface IMainPageData {
    menu: string;
    content: string;
}

const menuWidth = 190;

export function generateMainPage(data: IMainPageData): string {
    return `export function create() {
        return {
            tag : 'div',
            attrs: {
                class: 'markdown-body'
            },
            children: [
                {
                    tag: 'div',
                    children: [${data.content}],
                    style: {
                        padding: '16px 16px 16px 32px',
                        
                        marginRight: ${menuWidth}
                    }
                },
                {
                    tag: 'div',
                    children: [${data.menu}],
                    style: {
                        width: ${menuWidth},
                        position: 'fixed',
                        right: 0,
                        top: 84
                    }
                }
            ]
        }
    }`
}